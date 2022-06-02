import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import AssetView from './assetView';
import { OverView } from './overView';
import WorkFlowView from './workFlowView';
import headerIcon from '../../img/header-icon.png';
import 'react-circular-progressbar/dist/styles.css';
import 'simplebar/dist/simplebar.min.css';

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
      { title: "Over View", key: 0, component: <OverView /> },
      { title: "Workflow View", key: 1, component: <WorkFlowView /> },
      { title: "Asset View", key: 2, component: <AssetView /> }]
  }
  activeTab = (key: any) => {
    this.setState({ activeTab: key });
  }
  render() {
    const { activeTab } = this.state;
    return (
      <div className="owrkflow-project-wise-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="Usecase 1" />
        <div className="project-wise-page-container">
          <div className="project-wise-page-headin">
            <div className="row">
              <div className="col-lg-10">
                <div className="heading-content-left">
                  <div className="heading-icon"><img src={headerIcon} alt="" /></div>
                  <div className="heading-content">
                    <h3>Xformation Platform</h3>
                    <span>Last updated by Siddhesh D 24 min ago</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="heading-content-right">
                  <button >Project Overview</button>
                </div>
              </div>
            </div>
          </div>
          <div >
            <ul className="row">
              {
                this.stepper.map(({ title, key }: any, index: any) => {
                  return (
                    <li key={index} onClick={() => this.activeTab(key)} className={key === activeTab ? "active col-4 " : 'col-4'}>{title}</li>
                  )
                })
              }
            </ul>
          </div>
          <div>
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
            }</div>
        </div>
      </div>
    );
  }
}
