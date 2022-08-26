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
			usecaseDevelopment:{
				specs:[],
				usecaseName:'',
				selectActors:[
				{key:1,name:"Super Admin",isChecked:false},
				{key:2,name:"Admin", isChecked:false},
				{key:3,name:"Project Manager", isChecked:false},
				{key:4,name:"Team Mamber", isChecked:false},
				{key:5,name:"Vendor", isChecked:false},
				{key:6,name:"Supplier", isChecked:false},
				{key:7,name:"Team Member", isChecked:false},
				{key:8,name:"Stakeholder", isChecked:false}],
				description:'',
				tigger:'',
				preConditions:'',
				postConditions:'',
				usecaseFlow:'',
				prototypeLink:'',
				
			},
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
		const {usecaseDevelopment}=this.state
		if (data && data.stepInput && data.stepInput.S && data.stepInput.S.stages && data.stepInput.S.stages.length > 0) {
			if (data.stepInput.S.stages[0] && !data.stepInput.S.stages[0].usecaseDevelopment){
				data.stepInput.S.stages[0].usecaseDevelopment=usecaseDevelopment
			}
			this.setState({
				useCase: data,
				usecaseData: data
			});
		}
	}
	
	updateStep = (usecaseData: any, activeStageIndex: any) => {
		let {useCase}=this.state;
		let index = usecaseData.stepInput.S.stages[activeStageIndex].index ?
		 usecaseData.stepInput.S.stages[activeStageIndex].index : activeStageIndex;

		usecaseData.stepInput.S.stages[activeStageIndex].index = usecaseData.stepInput.S.stages[activeStageIndex].index ?
		usecaseData.stepInput.S.stages[activeStageIndex].index : activeStageIndex;

		let useCases = {
			name: usecaseData.stepInput.S.name,
			description: usecaseData.stepInput.S.description,
			index,
			assignTo: usecaseData.stepInput.S.assignTo,
			stages: usecaseData.stepInput.S.stages[activeStageIndex]
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
