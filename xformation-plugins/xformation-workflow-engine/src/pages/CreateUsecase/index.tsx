// import { values } from 'lodash';
import * as React from 'react';

export class CreateUsecase extends React.Component<any, any> {
  id: any;
  constructor(props: any) {
    super(props)
    this.state = {
      subStageDetails: { "assignto": '', "startDate": '', "endDate": '', "comments": '' },
      stages: [
        { 'name': 'Requirements', 'description': '', 'assignedTo': '', "details": [] },
        { 'name': 'Mock Development', 'description': '', 'assignedTo': '', "details": [] },
        { 'name': 'Actual Development', 'description': '', 'assignedTo': '', "details": [] },
        { 'name': 'CI/CD/TEST', 'description': '', 'assignedTo': '', "details": [] },
        { 'name': 'Stage / Release', 'description': '', 'assignedTo': '', "details": [] },
        { 'name': 'Publish/Operate', 'description': '', 'assignedTo': '', "details": [] }
      ],
      usecase: { name: '' },
      isSubmitted: false,
      subStageName: '',
      activeIndex: -1,
    }
    this.id = 10;
  }

  // const { id } = useParams();
  // const [usecase, setUsecase] = useState({});
  // const [isSubmitted, setSubmitted] = useState(false);
  // const [stages, setStaging] = useState([]);


  // useEffect(() => {
  //   if (id && id != '') {
  //     props.dispatch(WorkflowAction.getWorkflowEditDetail({ 'id': id }));
  //   } else {
  //     setUsecase({});
  //     setStaging([]);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   if (props.get_workflow_data_status === status.SUCCESS && id && id !== '') {
  //     if (props.get_workflow_data) {
  //       let data = {
  //         'assignTo': props.get_workflow_data.assignTo,
  //         'description': props.get_workflow_data.description,
  //         'id': props.get_workflow_data.id,
  //         'name': props.get_workflow_data.name,
  //       }
  //       setUsecase(data);
  //       setStaging(JSON.parse(JSON.stringify(props.get_workflow_data.stages)));
  //     }
  //   }
  // }, [props.get_workflow_data_status])

  // useEffect(() => {
  //   if (props.edit_workflow_status === status.SUCCESS) {
  //     if (props.edit_workflow_data) {
  //       navigate(`/workflow/${props.edit_workflow_data.id}`, { replace: true })
  //     }
  //   }
  // }, [props.edit_workflow_status])

  handleStateChange = (e: any) => {
    const { name, value } = e.target;
    const { usecase } = this.state;
    this.setState({ usecase: { ...usecase, [name]: value } });
  }

  handleStageDetail = (e: any, index: any) => {
    const { name, value } = e.target;
    const { stages } = this.state;
    stages[index] = {
      ...stages[index],
      [name]: value
    };
    stages({ stages: JSON.parse(JSON.stringify(stages)) });
  }
  addDetails = (index: any) => {
    let { activeIndex } = this.state;
    if (index === activeIndex) {
      activeIndex = -1
    }
    else {
      activeIndex = index;
    }

    this.setState({ activeIndex })
  }

  validateForm = (submitted: any) => {
    const { usecase, stages } = this.state
    const validObj = {
      isValid: true,
      message: ""
    };
    let isValid = true;
    const retData = {
      name: validObj,
      description: validObj,
      assignTo: validObj,
      stageDetail: validObj,
      isValid
    };
    if (submitted) {
      if (!usecase.name) {
        retData.name = {
          isValid: false,
          message: "Name is required"
        };
        isValid = false;
      }
      if (!usecase.description) {
        retData.description = {
          isValid: false,
          message: "Description is required"
        };
        isValid = false;
      }
      if (!usecase.assignTo) {
        retData.assignTo = {
          isValid: false,
          message: "Assig to is required"
        };
        isValid = false;
      }
      if (stages && stages.length > 0) {
        for (let i = 0; i < stages.length; i++) {
          if (!stages[i].description || !stages[i].assignedTo || !stages[i].name) {
            retData.stageDetail = {
              isValid: false,
              message: "Stage Detail is required"
            };
            isValid = false;
          }
        }
      }
    }
    retData.isValid = isValid;
    return retData;
  }

  submitWorkflow = () => {
    const { usecase, stages } = this.state;
    this.setState({ isSubmitted: true })
    const errorData = this.validateForm(true);
    if (errorData.isValid) {
      let sendData = {
        ...usecase,
        stages,
        id: this.id
      }
      if (this.id && this.id !== '') {
        // this.props.dispatch(WorkflowAction.editWorkflow(sendData));
      } else {
        // this.props.dispatch(WorkflowAction.createNewWorkflow(sendData));
      }
    }
  }

  addMoreworkflowStage = () => {
    let { stages } = this.state;
    this.setState({ stages: [...stages, { 'name': '', 'description': '', 'assignedTo': '' }] });

  }
  handleSubStageName = (index: any, e: any) => {
    const { value } = e.target;
    this.setState({ subStageName: value });
  }
  addSubStage = () => {
    const { subStageName, activeIndex, stages } = this.state

    if (subStageName) {

      if (stages[activeIndex].details.length > 0) {
        let existName = -1;
        for (let i = 0; i < stages[activeIndex].details.length; i++) {
          if (stages[activeIndex].details[i].name === subStageName) {
            existName = 1;
          }
        }
        if (existName === -1) {
          let obj = { name: subStageName, ...JSON.parse(JSON.stringify(this.state.subStageDetails)) }
          stages[activeIndex].details.push(obj)
        }
      }
      else {
        let obj = { name: subStageName, ...JSON.parse(JSON.stringify(this.state.subStageDetails)) }
        stages[activeIndex].details.push(obj)
      }
    }

    this.setState({ stages, subStageName: '' })
  }
  removeSubString = (stageIndex: any, subStringIndex: any) => {
    const { stages } = this.state;
    this.state.stages[stageIndex].details.splice(subStringIndex, 1)
    this.setState({ stages })
  }
  handleSubStageData = (e: any, i: any, index: any) => {
    const { name, value } = e.target
    const { stages } = this.state;
    let details = stages[i].details[index];
    details[name] = value
    this.setState({ stages })

  }
  render() {
    const errorData = this.validateForm(this.state.isSubmitted)
    const { stages, subStageName } = this.state
    return (
      <div className="dashboard-content">
        {/* <div className="basic-details">
          <h5>Basic Details</h5>
          <div className="input-group">
            <label>Usecase Name</label>
            <input className="form-control" type="text" name="name" placeholder="name of usecase" value={usecase.name} onChange={(e: any) => this.handleStateChange(e)} />
          </div>
          {errorData && errorData.name && <span>{errorData.name.message}</span>}
          <div className="input-group">
            <label>Usecase Description</label>
            <textarea className="form-control" rows={3} name="description" placeholder="name of usecase" value={usecase.description} onChange={(e: any) => this.handleStateChange(e)} />
          </div>
          {errorData && errorData.description && <span>{errorData.description.message}</span>}
          <div className="input-group">
            <label>Assign To</label>
            <select name="assignTo" className="assign" onChange={(e: any) => this.handleStateChange(e)}>
              <option value="">--select--</option>
              <option value="1">abc</option>.
              <option value="2">def</option>
              <option value="2">xyz</option>
            </select>
          </div>
          {errorData && errorData.assignTo && <span>{errorData.assignTo.message}</span>}
        </div> */}
        <div className="workflow-detail">
          <h5>Workflow Stage Detail</h5>
        </div>
        {errorData && errorData.stageDetail && <span className='error'>{errorData.stageDetail.message}</span>}
        {stages && stages.length > 0 &&
          stages.map((val: any, i: any) => {
            return (
              <div className="add-workflow-list">
                <span>{i + 1}</span>
                <div className="workflow-type">
                  <input className="form-control" type="text" name="name" placeholder="Enter your workflow type" value={val.name} onChange={(e) => this.handleStageDetail(e, i)} />
                </div>
                <div className="description">
                  <label>Description</label>
                  <textarea className="form-control" rows={3} name="description" placeholder="describe task and checklist to be followed at this stage" value={val.description} onChange={(e) => this.handleStageDetail(e, i)} />
                </div>
                <div className="description">
                  <label>Assign To</label>
                  <select name="assignedTo" className="assign" value={val.assignedTo} onChange={(e) => this.handleStageDetail(e, i)}>
                    <option value="">--select--</option>
                    <option value="1">abc</option>
                    <option value="2">def</option>
                    <option value="3">xyz</option>
                  </select>
                </div>
                <a onClick={(e) => this.addDetails(i)}>Add New Substage </a>
                {this.state.activeIndex === i &&
                  <div>
                    <input type='text' name="subStageName" value={subStageName} onChange={(e) => this.handleSubStageName(i, e)} />
                    <div onClick={this.addSubStage}>+</div>
                  </div>}
                <div>
                  {val.details && val.details.length > 0 &&
                    <div>
                      <table>
                        <thead>
                          <tr>
                            <th></th>
                            <th>Assign to</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Comments</th>
                          </tr>
                        </thead>
                        <tbody>
                          {val.details.map(({ name, assignto, startDate, endDate, comments }: any, index: any) => (
                            <tr>
                              <td>{name}</td>
                              <td><select name="assignto" id="assignto" onChange={(e) => this.handleSubStageData(e, i, index)}>
                                <option value="">--select--</option>
                                <option value="1">abc</option>
                                <option value="2">def</option>
                                <option value="3">xyz</option>
                              </select></td>
                              <td><input type='date' name="startDate" value={startDate} placeholder='Select' onChange={(e) => this.handleSubStageData(e, i, index)} /></td>
                              <td><input type='date' name="endDate" placeholder='Select' onChange={(e) => this.handleSubStageData(e, i, index)} value={endDate} /></td>
                              <td><input type='comments' name="comments" placeholder='Select' onChange={(e) => this.handleSubStageData(e, i, index)} value={comments} /></td>
                              <td onClick={() => { this.removeSubString(i, index) }}>Remove Substage</td>
                            </tr>
                          )
                          )}
                        </tbody>
                      </table>
                    </div>}
                </div>
              </div>
            )
          })
        }
        {/* <div className="workflow-detail">
          <button className="btn btn-primary add-workflow-btn" onClick={this.addMoreworkflowStage}><span>add More Workflow Stage</span></button>
        </div> */}

        {stages && stages.length > 0 &&
          <div className="basic-details-btn">
            <button className="btn btn-primary" onClick={this.submitWorkflow}>Save</button>
          </div>
        }
      </div>
    )
  }
}
