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
			usecaseDevelopment: {
				specs: [],
				usecaseName: '',
				selectActors: [
					{ key: 1, name: "Super Admin", isChecked: false },
					{ key: 2, name: "Admin", isChecked: false },
					{ key: 3, name: "Project Manager", isChecked: false },
					{ key: 4, name: "Team Mamber", isChecked: false },
					{ key: 5, name: "Vendor", isChecked: false },
					{ key: 6, name: "Supplier", isChecked: false },
					{ key: 7, name: "Team Member", isChecked: false },
					{ key: 8, name: "Stakeholder", isChecked: false }],
				description: '',
				tigger: '',
				preConditions: '',
				postConditions: '',
				usecaseFlow: '',
				prototypeLink: '',

			},
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
		const { usecaseDevelopment } = this.state
		if (data.stepinput.stages && data.stepinput.stages.length > 0) {
			if (data.stepinput.stages[0] && !data.stepinput.stages[0].usecaseDevelopment) {
				data.stepinput.stages[0].usecaseDevelopment = usecaseDevelopment
			}
			this.setState({
				usecaseData: data
			});
		}
	}

	updateStep = (usecaseData: any, activeStageIndex: any) => {
		// let index = usecaseData.stepinput.S.stages[activeStageIndex].index ?
		//  usecaseData.stepinput.S.stages[activeStageIndex].index : activeStageIndex;

		usecaseData.stepinput.stages[activeStageIndex].index = usecaseData.stepinput.stages[activeStageIndex].index ?
			usecaseData.stepinput.stages[activeStageIndex].index : activeStageIndex;

		// let useCases = {
		// 	name: usecaseData.stepinput.S.name,
		// 	description: usecaseData.stepinput.S.description,
		// 	index,
		// 	assignTo: usecaseData.stepinput.S.assignTo,
		// 	stages: usecaseData.stepinput.S.stages[activeStageIndex]
		// }
		let useCases = {
			usecaseName: usecaseData.usecaseName,
			stageData: usecaseData.stepinput.stages[activeStageIndex]
		};

		this.setState({
			usecaseData
		});
		this.props.updateUsecaseData(usecaseData);
		this.props.updateWorkflowInput(useCases)
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
