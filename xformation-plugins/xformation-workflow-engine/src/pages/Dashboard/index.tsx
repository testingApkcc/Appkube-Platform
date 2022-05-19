import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

export class Dashboard extends React.Component<any, any> {
  breadCrumbs: any;
  createStreamRef: any;
  newStreamRef: any;
  manageOutputRef: any;
  allEventRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      tcpInputs: [],
      openCreateMenu: false,
      streamTableData: [],
      indexSets: [],
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
    
  }

  render() {
    return (
      <div className="owrkflow-dashboard-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="WORKFLOW MANAGEMENT" />
        <div className="owrkflow-page-container">
        </div>
      </div>
    );
  }
}
