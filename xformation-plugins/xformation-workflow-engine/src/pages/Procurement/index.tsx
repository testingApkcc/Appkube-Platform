import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { AssetView } from './assetView';
import { OverView } from './overView';
import WorkFlowView from './workFlowView';
import headerIcon from '../../img/header-icon.png';
import 'react-circular-progressbar/dist/styles.css';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';
import { AwsHelper } from '../AwsHelpers';
export class ProcurementDetail extends React.Component<any, any> {
  breadCrumbs: any;
  stepper: any;
  awsHelper: any;
  overViewRef: any;
  workFlowRef: any;
  assetViewRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      activeTab: 0,
      useCaseName: this.props.match.params.id,
      useCase: {}
    };
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Kubernetes | Overview',
        isCurrentPage: true,
      },
    ];
    this.awsHelper = new AwsHelper({ meta: props.meta });
    this.overViewRef = React.createRef();
    this.workFlowRef = React.createRef();
    this.assetViewRef = React.createRef();
    this.stepper = [
      { title: "Over View", key: 0, component: <OverView meta={props.meta} id={this.state.useCaseName} key={1} ref={this.overViewRef} /> },
      { title: "Workflow View", key: 1, component: <WorkFlowView id={this.state.useCaseName} key={2} ref={this.workFlowRef} /> },
      { title: "Asset View", key: 2, component: <AssetView id={this.state.useCaseName} key={3} ref={this.assetViewRef} /> }
    ]
  }

  async componentDidMount() {
    const { useCaseName } = this.state;
    this.awsHelper.getUsecaseInputData(useCaseName, (useCases: any) => {
      if (useCases) {
        this.setState({ useCase: useCases })
      }
    }, (err: any) => { if (err) { console.log(err) } })
  }

  componentDidUpdate() {
    const { useCase } = this.state;
    if (useCase) {
      if (this.overViewRef.current) {
        this.overViewRef.current.setUseCaseData(useCase);
      }
      if (this.workFlowRef.current) {
        this.workFlowRef.current.setUseCaseData(useCase);
      }
      if (this.assetViewRef.current) {
        this.assetViewRef.current.setUseCaseData(useCase);
      }
    }
  }
  activeTab = (key: any) => {
    this.setState({ activeTab: key });
  }

  render() {
    const { activeTab, useCase, useCaseName} = this.state;
    return (
      <div className="owrkflow-procument-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="Usecase 1" />
        <div className="procument-page-container">
          <div className="project-wise-page-heading">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div className="heading-content-left">
                  <div className="heading-icon"><img src={headerIcon} alt="" /></div>
                  <div className="heading-content">
                    <h3>Xformation Platform</h3>
                    <span>Last updated by Siddhesh D 24 min ago</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div className="heading-content-right">
                  <Link to={`/a/xformation-workflow-engine/project-overview/${useCaseName}`} className="btn-primary pro-overview-btn">Project Overview</Link>
                  <Link to="/a/xformation-workflow-engine/project-wise" className="btn-primary pro-overview-btn"><i className="fas fa-chevron-left"></i> Back</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="procurement-details">
            <ul>
              {useCase && Object.keys(useCase).length > 0 &&
                this.stepper.map(({ title, key }: any, index: any) => {
                  return (
                    <li key={index} onClick={() => this.activeTab(key)} className={key === activeTab ? "active col-4 " : 'col-4'}>{title}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="tebs-inner-content">
            {useCase && Object.keys(useCase).length > 0 &&
              this.stepper.map(({ key, component }: any, index: any) => {
                return (
                  <div key={index}>
                    {activeTab === key ?
                      <>{component}</>
                      : <></>}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
