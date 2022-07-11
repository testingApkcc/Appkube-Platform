import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { AssetView } from './assetView';
import { OverView } from './overView';
import WorkFlowView from './workFlowView';
import headerIcon from '../../img/header-icon.png';
import 'react-circular-progressbar/dist/styles.css';
import 'simplebar/dist/simplebar.min.css';
import { Link } from 'react-router-dom';

export class ProcurementDetail extends React.Component<any, any> {
  breadCrumbs: any;
  stepper: any;
  constructor(props: any) {
    super(props);
    this.state = {
      activeTab: 0,
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
    this.stepper = [
      { title: "Over View", key: 0, component: <OverView id={this.props.match.params.id} /> },
      { title: "Workflow View", key: 1, component: <WorkFlowView id={this.props.match.params.id} /> },
      { title: "Asset View", key: 2, component: <AssetView id={this.props.match.params.id} /> }
    ]
  }
  activeTab = (key: any) => {
    this.setState({ activeTab: key });
  }
  render() {
    const { activeTab } = this.state;
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
                  <Link to="/a/xformation-workflow-engine/project-overview" className="btn-primary pro-overview-btn">Project Overview</Link>
                  <Link to="/a/xformation-workflow-engine/project-wise" className="btn-primary pro-overview-btn"><i className="fas fa-chevron-left"></i> Back</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="procurement-details">
            <ul>
              {
                this.stepper.map(({ title, key }: any, index: any) => {
                  return (
                    <li key={index} onClick={() => this.activeTab(key)} className={key === activeTab ? "active col-4 " : 'col-4'}>{title}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="tebs-inner-content">
            {
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
