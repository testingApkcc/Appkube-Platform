import * as React from 'react';
import { Link } from 'react-router-dom';
import downloadIcon from '../../img/projectoverview/download-icon.png';
import WorkFlow from '../../components/WorkFlowCommonComponent'
// import overviewMenu1 from '../../img/projectoverview/overview-menu1.png';
// import overviewMenu2 from '../../img/projectoverview/overview-menu2.png';
// import overviewMenu3 from '../../img/projectoverview/overview-menu3.png';
// import overviewMenu4 from '../../img/projectoverview/overview-menu4.png';
// import overviewMenu5 from '../../img/projectoverview/overview-menu5.png';
// import overviewMenu6 from '../../img/projectoverview/overview-menu6.png';
// import overviewMenu7 from '../../img/projectoverview/overview-menu7.png';
import { AwsHelper } from '../AwsHelpers';
export class ProjectOverView extends React.Component<any, any> {
  awsHelper: any
  constructor(props: any) {
    super(props);
    this.state = {
      usecaseData: {},
      activeStage: 0,
      stageList: [],
      activeUseCaseIndex: 0,
      useCaseList: [],
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
    this.awsHelper = new AwsHelper({ meta: props.meta });
  }
  componentDidMount() {
    this.setState({ useCaseName: this.props.match.params.id })
    this.awsHelper.getUsecaseList((useCaseList: any) => {
      useCaseList.forEach((useCase: any) => {
        if (useCase && useCase.stepInput && useCase.stepInput.S && useCase.stepInput.S.indexOf("stages") !== -1) {
          useCase.stepInput.S = JSON.parse(useCase.stepInput.S);
          this.awsHelper.getExecutionHistory(
            "arn:aws:states:us-east-1:657907747545:execution:send-to-pre-state:9bc49c92-4016-47a5-8a22-88d353e912ab",
            (items: any) => {
              const useCases = this.state.useCaseList;
              useCases.push({
                ...useCase,
                steps: items,
                executionArn: { S: "arn:aws:states:us-east-1:657907747545:execution:send-to-pre-state:9bc49c92-4016-47a5-8a22-88d353e912ab" }
              });
              this.setState({
                useCaseList: useCases,

                usecaseData: useCases[this.state.activeUseCaseIndex]

              });
            },
            (err: any) => { console.log(err) }
          );
        }
      });
    }, () => { });
    this.awsHelper.gettingMachineDef(
      this.state.machineArn,
      (states: any) => {
        // console.log(states);
      },
      (err: any) => {
        console.log(err);
      }
    );

  }

  getUsecaseStageData = (data: any, index: any) => {
    this.setState({
      activeStage: index
    });
  };

  displayWorkflowStage = () => {
    const { useCaseList, activeStage, activeUseCaseIndex } = this.state;
    let retData = [];
    if (useCaseList && useCaseList[activeUseCaseIndex] && useCaseList[activeUseCaseIndex].stepInput) {
      let usecaseData = useCaseList[activeUseCaseIndex].stepInput.S
      usecaseData = usecaseData
      if (usecaseData && usecaseData.stages && usecaseData.stages.length > 0) {
        for (let i = 0; i < usecaseData.stages.length; i++) {
          let row = usecaseData.stages[i];
          retData.push(
            <li
              onClick={() => this.getUsecaseStageData(row, i)}
              className={
                row.status == 'completed' ? 'completed' : row.status == 'inprogress' ? 'inprosseg' : ''
              }
            >
              <span>{i + 1}</span>
              <div className={i == activeStage ? 'active form-control' : 'form-control'}>
                <input
                  type="text"
                  value={row.name}
                  name="name"
                  onChange={(e) => this.handleStageChange(e, i)}
                  readOnly
                />
              </div>
            </li>
          );
        }
      }
    }
    return retData;
  };

  handleStageChange = (e: any, index: any) => {
    const { usecaseData } = this.state;
    const { name, value } = e.target;
    let stages: any = usecaseData.stages;
    if (usecaseData.stages) {
      stages[index][name] = value;
    }
  };

  handleStateChange = (event: any, index: any) => {
    const { usecaseData, activeStage } = this.state;
    const { name, value } = event.target;
    const workflowDetail: any = usecaseData.stages[activeStage];
    if (workflowDetail.steps) {
      workflowDetail.steps[index][name] = value;
    }
    this.setState({
      usecaseData: usecaseData
    });
  };

  handleStateChangeCheckList = (e: any, index: any) => {
    const { checked } = e.target;
    const { usecaseData, activeStage } = this.state;
    let count = 0;
    const workflowDetail: any = usecaseData.stages[activeStage];
    if (workflowDetail.checkList) {
      workflowDetail.checkList[index]['isChecked'] = checked;
      for (let i = 0; i < workflowDetail.checkList.length; i++) {
        if (workflowDetail.checkList[i].isChecked) {
          count++;
        }
      }
    }
    if (count == workflowDetail.checkList.length) {
      usecaseData.stages[activeStage]['status'] = 'completed';
    } else if (count < workflowDetail.checkList.length) {
      usecaseData.stages[activeStage]['status'] = 'inprogress';
    } else if (count == 0) {
      usecaseData.stages[activeStage]['status'] = '';
    }
    this.setState({
      usecaseData
    });
  };

  

  moveToNextPage = (type: any) => {
    const { usecaseData, activeStage } = this.state;
    if (type == 'next') {
      if (usecaseData && usecaseData.length > 0) {
        this.setState({
          activeStage: activeStage + 1
        });
      }
    } else {
      if (usecaseData && usecaseData.length > 0) {
        let index = activeStage - 1;
        this.setState({
          activeStage: index
        });
      }
    }
  };

  displayUseCaseList = () => {
    const { useCaseList, activeUseCaseIndex } = this.state;
    let retData = [];
    if (useCaseList && useCaseList.length > 0) {
      for (let i = 0; i < useCaseList.length; i++) {
        retData.push(
          <li className={i == activeUseCaseIndex ? "active" : ''} onClick={() => this.setUseCaseData(i)}>
            {/* <Link to="/"> */}
            <span>{useCaseList[i].usecaseName.S}</span>
            {/* </Link> */}
          </li>
        )
      }
    }
    return retData;
  }
  setUseCaseData = (index: any) => {
    const { useCaseList } = this.state

    let data = useCaseList[index]
    if (data && data.stepInput && data.stepInput.S) {
      this.setState({ usecaseData: data })
    }
    this.setState({ activeUseCaseIndex: index, activeStage: 0 })

  }
  render() {
    // const { usecaseData, activeStage, userList } = this.state;
    return (
      <div className="project-over-view-container">
        <div className="project-over-view-section">
          <div className="fliter-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="heading">Procurement Workflow management</div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div className="fliter-right-content">
                  <div className="plus-icon col-12">
                    <Link to="/a/xformation-workflow-engine/create-new-usecase">
                      <i className="fa fa-plus" />
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/a/xformation-workflow-engine/asset-overview">
                      <img src={downloadIcon} alt="" />
                    </Link>
                  </div>
                  <div className="fliter-search">
                    <div className="fliter-box">
                      <select>
                        <option>Fliter by</option>
                        <option>Fliter by 1</option>
                        <option>Fliter by 2</option>
                        <option>Fliter by 3</option>
                      </select>
                    </div>
                    <div className="fliter-search-box">
                      <input
                        type={'Search for...'}
                        className="input-group-text"
                        placeholder={'Search for...'}
                      />
                    </div>
                  </div>
                  <Link to={`/a/xformation-workflow-engine/project-wise`} className="btn-primary pro-overview-btn"><i className="fas fa-chevron-left"></i> Back</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project-over-view-inner-content">
            <div className="project-over-view-left-content">
              <div className="sidebar">
                <ul>
                  {this.displayUseCaseList()}
                </ul>
              </div>
            </div>
            {
              <WorkFlow usecaseData={this.state.usecaseData} activeUseCaseIndex={this.state.activeUseCaseIndex} editFormData ={true}/>
            }
            {/* <div className="project-over-view-right-content">
              <div className="workflow-stage">
                <ul>{this.displayWorkflowStage()}</ul>
              </div>
              <div className="workflow-data">
                <LinkData props={{ handleStateChange: this.handleStateChange, usecaseData, updateStep: this.updateStep, editLink: true, activeStage, ...this.props }} />
              </div>

              <div className="workflow-view-table-section">
                <div className='heading'>
                  <h5>SCRUM Planning</h5>
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div className="workflow-view-table">
                  <table className="table">
                    <thead >
                      <tr>
                        <th>Stages</th>
                        <th>Assigned to</th>
                        <th>Start Date</th>
                        <th>Deviation</th>
                        <th>End Date</th>
                        <th>Deviation</th>
                      </tr>
                    </thead>
                    {usecaseData && usecaseData.length > 0 && activeStage === 0 ? <tbody><CommanPlanningTable usecaseData={usecaseData} userList={userList} /></tbody> : <React.Fragment></React.Fragment>}
                  </table>
                </div>
              </div>
              <div className="workflow-requirement">
                <div className="heading">
                  <h5>Checklist for Requirements</h5>
                </div>
                <React.Fragment>
                  <CommanCheckList usecaseData={usecaseData} activeStage={activeStage} handleStateChangeCheckList={this.handleStateChangeCheckList} disabledEditForm={true} />
                </React.Fragment>
              </div>
              <div className="workflow-buttons">
                <button
                  type="button"
                  disabled={activeStage == 0}
                  className="btn btn-primary previous-btn"
                  onClick={() => this.moveToNextPage('previous')}
                >
                  Previous
                </button>
                {usecaseData && (
                  <button
                    type="button"
                    disabled={activeStage == usecaseData.length - 1}
                    className="btn btn-primary previous-btn next-btn"
                    onClick={() => this.moveToNextPage('next')}
                  >
                    Next
                  </button>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}