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

  usecaseInputToDynamoDb(useCaseName: any, stepInput: any) {
    var paramsForDb = {
      TableName: 'usecase_input',
      Item: {
        usecaseName: { S: useCaseName },
        stepInput: { S: stepInput },
      },
    };
    console.log(paramsForDb);
    this.dynamoDB.putItem(paramsForDb, function (err: any, data: any) {
      if (err) {
        console.error('Unable to write data: ', JSON.stringify(err, null, 2));
      } else {
        console.log('Put Input succeeded');
      }
    });
  }

  getUsecaseInputData(useCaseName: any, onDone: any) {
    var params = {
      TableName: 'usecase_input',
    };
    this.dynamoDB.scan(params, function (err: any, data: any) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else {
        console.log('Got usecase inputlist', data.Items);

        data.Items.forEach((e: any) => {
          if (e.usecaseName.S === useCaseName) {
            onDone(e);
          }
        });
      }
    });
  }

  getUsecaseList = (onDone: any, onError: any) => {
    var params = {
      TableName: 'usecase_arn',
    };
    this.dynamoDB.scan(params, (err: any, data: any) => {
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
}
