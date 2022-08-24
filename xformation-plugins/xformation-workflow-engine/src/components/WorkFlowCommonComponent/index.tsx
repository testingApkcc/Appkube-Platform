import React from 'react';
import LinkData from '../CommonLinksData'
import CommanCheckList from '../CommonCheckList';
import CommanPlanningTable from '../CommonScrumPlanningTable'
import actorsImg from '../../img/actors-img.png'
import screenshotImgOne from '../../img/screenshot-img1.png'
import screenshotImgTwo from '../../img/screenshot-img2.png'

class WorkFlow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      usecaseData: {},
      activeStage: 0,
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
      activeUseCaseIndex: 0,
      editformData: '',
      createUsecase: false,
      uploadScreenshot: false
    };
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.usecaseData !== prevProps.usecaseData) {
      this.setState({
        usecaseData: this.props.usecaseData,
        // activeUseCaseIndex: this.props.activeUseCaseIndex||0,
        activeStage: this.props.activeStage,
        editformData: this.props.editFormData
      })
    }
  }
  getUsecaseStageData = (data: any, index: any) => {
    // let { activeStage } = this.state;
    // activeStage = index
    this.setState({
      activeStage: index
    });
  };

  displayWorkflowStage = () => {
    const { activeStage, usecaseData } = this.state;

    let retData = [];
    if (usecaseData && usecaseData.stepInput && usecaseData.stepInput.S && usecaseData.stepInput.S.stages && usecaseData.stepInput.S.stages.length > 0) {
      for (let i = 0; i < usecaseData.stepInput.S.stages.length; i++) {
        let row = usecaseData.stepInput.S.stages[i];
        let status = (row: any) => {
          if (row.status) {
            return row.status
          }
          else if (row.workflowCheckList.length > 0 && !row.status) {
            let status = 0;
            let workflowCheckList = row.workflowCheckList
            for (let value of workflowCheckList) {
              if (value.checked) {
                status++
              }
            }
            if (status === row.workflowCheckList.length) {
              return "completed"
            }
            else {
              return "inprogress"
            }
          }
          return "inprogress"
        }
        retData.push(
          <li
            onClick={() => this.getUsecaseStageData(row, i)}
            className={
              status(row)
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

    return retData;
  };

  handleStageChange = (e: any, index: any) => {
    const { editFormData } = this.props
    if (!editFormData) {
      const { usecaseData } = this.state;
      const { name, value } = e.target;
      let stages: any = usecaseData.stages;
      if (usecaseData.stages) {
        stages[index][name] = value;
      }
    }
  };

  handleStateChange = (event: any, index: any) => {
    const { editFormData } = this.props
    if (!editFormData) {
      const { usecaseData, activeStage } = this.state;
      const { name, value } = event.target;
      const workflowDetail: any = usecaseData.stepInput.S.stages[activeStage];
      if (workflowDetail.details) {
        workflowDetail.details[index].data[0][name] = value;
      }
      this.setState({
        usecaseData: usecaseData
      });
    }
  };

  handleStateChangeCheckList = (e: any, index: any) => {
    const { editFormData } = this.props
    if (!editFormData) {
      const { checked } = e.target;
      const { usecaseData, activeStage } = this.state;
      let count = 0;
      const workflowDetail: any = usecaseData.stepInput.S.stages[activeStage];
      if (workflowDetail.workflowCheckList) {
        workflowDetail.workflowCheckList[index]['checked'] = checked;
        for (let i = 0; i < workflowDetail.workflowCheckList.length; i++) {
          if (workflowDetail.workflowCheckList[i].checked) {
            count++;
          }
        }
      }
      if (count == workflowDetail.workflowCheckList.length) {
        usecaseData.stepInput.S.stages[activeStage]['status'] = 'completed';
      } else if (count < workflowDetail.workflowCheckList.length) {
        usecaseData.stepInput.S.stages[activeStage]['status'] = 'inprogress';
      } else if (count == 0) {
        usecaseData.stepInput.S.stages[activeStage]['status'] = '';
      }
      this.setState({
        usecaseData
      });
      this.updateForm(usecaseData)
    }
  };

  updateForm = (data: any) => {

    this.props.updateStep(data)
  }

  moveToNextPage = (type: any) => {
    const { usecaseData, activeStage } = this.state;
    if (type == 'next') {
      if (usecaseData && usecaseData?.stepInput?.S?.stages[activeStage]?.workflowCheckList?.length > 0 && usecaseData?.stepInput?.S?.stages[activeStage]?.workflowCheckList?.length! > activeStage
      ) {
        this.setState({
          activeStage: activeStage + 1
        });
      }
    } else {
      if (usecaseData && usecaseData?.stepInput?.S?.stages[activeStage]?.workflowCheckList?.length > 0) {
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
      data = data.stepInput.S;
      this.setState({ usecaseData: data.stages })
    }
    this.setState({ activeUseCaseIndex: index })

  }
  createUsecase = () => {
    this.setState({
			createUsecase: true 
		});
  }
  createUsecaseClose = () => {
    this.setState({
			createUsecase: false 
		});
  }
  uploadScreenshot = () => {
    this.setState({
			uploadScreenshot: true
		});
  }
  uploadScreenshotClose = () => {
    this.setState({
			uploadScreenshot: false
		});
  }

  render() {
    const { activeStage, usecaseData, userList, editformData, createUsecase, uploadScreenshot } = this.state;
    return (<>
      <div className="project-over-view-right-content">
        <div className="workflow-stage">
          {usecaseData && usecaseData.stepInput && usecaseData.stepInput.S && usecaseData.stepInput.S.stages && usecaseData.stepInput.S.stages.length > 0 && <ul>{this.displayWorkflowStage()}</ul>}
        </div>
        {createUsecase === true ? 
          <div className="usecase-form">
            <div className="heading">
              <span>Requirement Sub-Stage details</span>
              <button className="btn btn-close" onClick={() => this.createUsecaseClose()}>
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="form">
              <div className="form-group row">
                  <label className="col-lg-2 col-sm-12 col-form-label">Usecase Name</label>
                <div className="col-lg-10 col-sm-12">
                  <input className="form-control" type="text" placeholder="" />
                </div>
              </div>
              <div className="form-group row">
              <label className="col-lg-2 col-sm-12 col-form-label">Select Actors</label>
                <div className="col-lg-10 col-sm-12">
                  <div className='row'>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Super Admin</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Admin</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Project Manager</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Team Mamber</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Vendor</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Supplier</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Team Mamber</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="select-actors">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                        <div className="image">
                          <img src={actorsImg} alt='' />
                        </div>
                        <div className="name">Stakeholder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-sm-12 col-form-label">Usecase Description</label>
                <div className="col-lg-10 col-sm-12">
                  <textarea className="form-control" placeholder="" rows={2} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-sm-12 col-form-label">Tigger</label>
                <div className="col-lg-10 col-sm-12">
                  <input className="form-control" type="text" placeholder="" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-sm-12 col-form-label">Pre-conditions</label>
                <div className="col-lg-10 col-sm-12">
                  <input className="form-control" type="text" placeholder="" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-sm-12 col-form-label">Post-conditions</label>
                <div className="col-lg-10 col-sm-12">
                  <textarea className="form-control" placeholder="" rows={2} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-sm-12 col-form-label">Usecase Flow</label>
                <div className="col-lg-10 col-sm-12">
                  <textarea className="form-control" placeholder="" rows={4} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 text-right">
                  <button className="btn btn-primary save-btn">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          : ""
        }
        {uploadScreenshot ?
          <div className="usecase-form">
            <div className="heading">
              <span>Requirement Sub-Stage details</span>
              <button className="btn btn-close" onClick={() => this.uploadScreenshotClose()}>
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="form">
              <div className="form-group row">
                  <label className="col-lg-3 col-sm-12 col-form-label">Usecase Design Prototype Link</label>
                <div className="col-lg-9 col-sm-12">
                  <input className="form-control" type="text" placeholder="" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-12 col-form-label">Usecase Design Screenshots</label>
                <div className="col-sm-12">
                  <div className="upload-screenshots">
                    <input type="file" id="file" className="form-control-file" />
                    <button className="btn btn-primary btn-upload" type="button">
                      <i className="fa fa-plus"></i> Add more Screenshots
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-md-2 col-sm-4">
                      <div className="screenshot">
                        <img src={screenshotImgOne} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                      <div className="screenshot">
                        <img src={screenshotImgTwo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : ""
        }
        {createUsecase === false && uploadScreenshot === false ?
          <>
            <div className="workflow-data">
              <div className="api-code">
                <div className="heading">
                  <h5>{'Usecase Development'}</h5>
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div className="api-content">
                  <button className="btn btn-primary usecase-btn" onClick={() => this.createUsecase()}>
                    Create Usecase
                  </button>
                  <button className="btn btn-primary usecase-btn">
                    View Details
                  </button>
                </div>
              </div>
              <div className="api-code">
                <div className="heading">
                  <h5>{'Design Specs'}</h5>
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div className="api-content">
                  <button className="btn btn-primary usecase-btn" onClick={() => this.uploadScreenshot()}>
                    Upload
                  </button>
                  <button className="btn btn-primary usecase-btn">
                    View Details
                  </button>
                </div>
              </div>
              {editformData !== "" && <LinkData disabledEditForm={editformData} handleStateChange={this.handleStateChange} updateStep={this.updateForm} usecaseData={usecaseData} activeStage={activeStage} />}
            </div>
            {activeStage === 0 ? <div className="workflow-view-table-section">
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
                  {usecaseData && usecaseData?.stepInput?.S?.stages[activeStage]?.workflowCheckList?.length > 0 ?
                    <tbody><CommanPlanningTable props={{ handleStateChange: this.handleStateChange, usecaseData, disabledEditForm: editformData, userList: userList, activeStage, ...this.props }} />
                    </tbody> : <React.Fragment></React.Fragment>}
                </table>
              </div>
            </div> : <React.Fragment></React.Fragment>}
            <div className="workflow-requirement">
              <div className="heading">
                <h5>Checklist for Requirements</h5>
              </div>
              {editformData !== "" && usecaseData?.stepInput?.S?.stages[activeStage]?.workflowCheckList?.length > 0 ? <React.Fragment>
                <CommanCheckList usecaseData={usecaseData}
                  activeStage={activeStage} handleStateChangeCheckList={this.handleStateChangeCheckList}
                  disabledEditForm={editformData} />
              </React.Fragment> : <React.Fragment></React.Fragment>}
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
                  disabled={usecaseData?.stepInput?.S?.stages.length - 1 === activeStage}
                  className="btn btn-primary previous-btn next-btn"
                  onClick={() => this.moveToNextPage('next')}
                >
                  Next
                </button>
              )}
            </div>
          </>
          : ""
        }

      </div>
    </>)
  }
}
export default WorkFlow;