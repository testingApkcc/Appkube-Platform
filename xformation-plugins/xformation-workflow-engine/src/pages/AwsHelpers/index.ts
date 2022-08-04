import { configFun } from '../../config';
const AWS = require('aws-sdk');
const StepFunctions = require('aws-sdk/clients/stepfunctions');

export class AwsHelper {
  config: any;
  credentials: any;
  dynamoDB: any;
  stepFunctions: any;
  constructor(props: any) {
    this.config = configFun(props.meta.jsonData.accessKey, props.meta.jsonData.secretKey, props.meta.jsonData.region);
    this.credentials = {
      region: this.config.REGION,
      accessKeyId: this.config.ACCESS_KEY_ID,
      secretAccessKey: this.config.SECRET_KEY,
    };
    this.dynamoDB = new AWS.DynamoDB(this.credentials);
    this.stepFunctions = new StepFunctions(this.credentials);
  }

  gettingMachineDef = (machineArn: any, onDone: any, onError: any) => {
    const params = {
      stateMachineArn: machineArn,
    };
    this.stepFunctions.describeStateMachine(params, function (err: any, data: any) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        onError(err);
      } else {
        onDone(JSON.parse(data.definition).States);
      }
    });
  };
  // second table name =usecase_arn
  usecaseInputToDynamoDb(useCaseName: any, stepInput: any, onDone: any) {
    var paramsForDb = {
      TableName: 'usecase_input',
      Item: {
        usecaseName: { S: useCaseName },
        stepInput: { S: stepInput },
      },
    };

    this.dynamoDB.putItem(paramsForDb, function (err: any, data: any) {
      if (err) {
        console.error('Unable to write data: ', JSON.stringify(err, null, 2));
      } else {
        console.log('Put Input succeeded');
        onDone('Workflow Updated Successfully');
      }
    });
  }

  getUsecaseInputData(useCaseName: any, onDone: any, onError: any) {
    var params = {
      TableName: 'usecase_input',
    };
    this.dynamoDB.scan(params, function (err: any, data: any) {
      if (err) console.log(err, err.stack);
      else {
        // an error occurred
        console.log('Got usecase inputlist', data.Items);
        data.Items.forEach((e: any) => {
          if (e.usecaseName.S === useCaseName) {
            onDone(e);
          } else {
            onError(e.err);
          }
        });
      }
    });
  }

  getUsecaseList = (onDone: any, onError: any) => {
    var params = {
      TableName: 'usecase_input',
    };
    this.dynamoDB.scan(params, (err: any, data: any) => {
      console.log(data);
      if (err) {
        onError(err);
      } else {
        onDone(data.Items);
      }
    });
  };

  getExecutionHistory = (executionArn: any, onDone: any, onError: any) => {
    this.stepFunctions.getExecutionHistory({ executionArn }, function (err: any, data: any) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        onError(err);
      } else {
        const executedStateArray: any = [];
        data.events.forEach((e: any) => {
          if (e.type === 'TaskStateEntered' || e.type === 'PassStateEntered') {
            executedStateArray.push(e.stateEnteredEventDetails.name);
          }
        });
        onDone(executedStateArray);
      } // successful response
    });
  };

  executeStateMachine(params: any, onDone: any) {
    const useCaseName = params.usecaseName;
    delete params.usecaseName;
    this.stepFunctions.startExecution(params, (err: any, data: any) => {
      if (err) {
        console.log(err);
        // const response = {
        // 	statusCode: 500,
        // 	body: JSON.stringify({
        // 		message: 'There was an error'
        // 	})
        // };
      } else {
        console.log(data);
        // usecaseArnToDynamoDb(data.executionArn);
        this.usecaseInputToDynamoDb(useCaseName, params.input, (data: any) => {
          console.log(data);
        });
        if (data) {
          onDone(data);
        }
        // const response = {
        // 	statusCode: 200,
        // 	body: JSON.stringify({
        // 		message: 'Step function worked'
        // 	})
        // };
        // gettingExecutionHistory(data.executionArn);
      }
    });
  }
}
