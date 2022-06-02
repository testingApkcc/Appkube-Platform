import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { AssetView } from './assetView';
import { OverView } from './overView';
import { WorkFlowView } from './workFlowView';
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
    this.stepper = [{ title: "Over View", key: 0, component: <OverView /> },
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
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="WORKFLOW MANAGEMENT" />
        <div className="project-wise-page-container row">
          <div className='col-12'>
                  <ul className="row">
          {
            this.stepper.map(({ title, key}: any, index: any) => {
              return (
          
                    <li key={index} onClick={() => this.activeTab(key)} className={key === activeTab ? "active col-4" : 'col-4'}>{title}</li>
                
              )
            })
          }
            </ul>
          </div>
          <div className='col-12'>
          {
            this.stepper.map(({  key, component }: any, index: any) => {
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
