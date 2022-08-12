import * as React from 'react';
import { Link } from 'react-router-dom';
import downloadIcon from '../../img/projectoverview/download-icon.png';
import WorkFlow from '../../components/WorkFlowCommonComponent'

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
          
          </div>
        </div>
      </div>
    );
  }
}