import * as React from 'react';
// import { threadId } from 'worker_threads';
// import { AwsHelper } from '../AwsHelpers';
// import { Link } from 'react-router-dom';
import WorkFlow from '../../components/WorkFlowCommonComponent'
export class WorkFlowView extends React.Component<any, any> {
	awsHelper: any;
	constructor(props: any) {
		super(props);
		this.state = {
			activeStage: 0,
			stageList: [
				{
					name: 'Requirements',
					stepList: [
						{
							name: 'Create Usecase Document',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Create Screen Design',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Updating Usecase in Netlifi',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Mock Development',
					stepList: [
						{
							name: 'Create API Spec',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create Postman Test',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Create UI Screen with Mock API',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create Test API',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Actual Development',
					stepList: [
						{
							name: 'Data Design GitHub Page',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'API Source Code in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Populate Test data in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Junit5 Test in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Cucumber BDD tests in GitHub',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Gatling Performance',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Code Review with Tech Lead',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Actual UI-API Integration',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Branch Merge after Review',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						}
					]
				},
				{
					name: 'CI/CD Test',
					stepList: [
						{
							name: 'Create CI/CD Pipeline',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create Kubernetes Operator',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Link API with GitHub and Netlifi',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Upload Test results in S3 Website',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'Upload Test env URL in Netlifi site',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Stage after review',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Stage Release',
					stepList: [
						{
							name: 'Stage Test and Review',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Promote to Prod',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						},
						{
							name: 'API Security Test in Prod',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Create/Update Release Note',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				},
				{
					name: 'Publish and Operate',
					stepList: [
						{
							name: 'Security & Operation Readiness',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 1,
							endDate: '01/05/2022',
							endDeviation: 1
						},
						{
							name: 'Release Note',
							assignTo: 'Team member',
							startDate: '01/05/2022',
							startDeviation: 0,
							endDate: '01/05/2022',
							endDeviation: 0
						}
					]
				}
			],
			useCase: {},
			usecaseData: {},
			userList: [
				{ name: 'John', id: '1' },
				{ name: 'Smith', id: '2' },
				{ name: 'Rado', id: '3' },
				{ name: 'Smyten', id: '4' },
				{ name: 'Oliver', id: '5' },
				{ name: 'Harry', id: '6' },
				{ name: 'George', id: '7' },
				{ name: 'Jack', id: '8' }
			],
		};
	}

	setUseCaseData = (data: any) => {
		if (data && data.stepInput && data.stepInput.S && data.stepInput.S.stages && data.stepInput.S.stages.length > 0) {
			this.setState({
				useCase: data,
				usecaseData: data
			});
		}
	}

	updateStep = (usecaseData:any) => {
		let {useCase}=this.state;
		let useCases = {
			name: usecaseData.stepInput.S.name,
			description: usecaseData.stepInput.S.description,
			assignTo: usecaseData.stepInput.S.assignTo,
			stages: usecaseData.stepInput.S.stages
		}
		this.props.updateWorkflowInput(useCase.usecaseName.S , JSON.stringify(useCases))
	};

	
	render() {
		const { usecaseData, activeStage } = this.state;
		return (<React.Fragment>
			<div className="workflow-content">
				<WorkFlow usecaseData={usecaseData} activeStage={activeStage} editFormData={false} updateStep={this.updateStep} />

			</div>
		</React.Fragment>
		);
	}
}

export default WorkFlowView;
