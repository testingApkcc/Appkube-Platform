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
        label: 'Log Managment',
        isCurrentPage: true,
      },
    ];
    
  }

  render() {
    return (
      <div className="logmanager-dashboard-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="LOG MANAGMENT" />
        <div className="logmanager-page-container">
        </div>
      </div>
    );
  }
}
