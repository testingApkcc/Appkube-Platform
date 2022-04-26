import React from 'react';

class OpsCenteral extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: [
        {
          id: 14,
          category: 'Performance & Availability',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 13,
          category: 'Logs',
          info: 'sampleText',
          icon: '/public/img/ops-central/logs.svg',
          colorIcon: '/public/img/ops-central/logs_color.svg',
        },
        {
          id: 12,
          category: 'Compliance',
          info: 'sampleText',
          icon: '/public/img/ops-central/compliance.svg',
          colorIcon: '/public/img/ops-central/compliance_color.svg',
        },
        {
          id: 11,
          category: 'Service Desk',
          info: 'sampleText',
          icon: '/public/img/ops-central/service_desk.svg',
          colorIcon: '/public/img/ops-central/service_desk_color.svg',
        },
        {
          id: 10,
          category: 'Automation',
          info: 'sampleText',
          icon: '/public/img/ops-central/automation.svg',
          colorIcon: '/public/img/ops-central/automation_color.svg',
        },
        {
          id: 19,
          category: 'Infra As Code',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'Kubernetes Management',
          info: 'sampleText',
          icon: '/public/img/ops-central/kubernetes_management.svg',
          colorIcon: '/public/img/ops-central/kubernetes_management_color.svg',
        },
        {
          id: 224,
          category: 'Performance Monitoring',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_monitoring.svg',
          colorIcon: '/public/img/ops-central/performance_monitoring_color.svg',
        },
        {
          id: 224,
          category: 'Log Monitoring',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'tracing',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'Toolcahain/Workflows',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'ChatOps',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'AI-ops',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'Cloud Analytics',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'cloud optimizer',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
        {
          id: 224,
          category: 'Self service Provisioning',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance _availability.svg',
          colorIcon: '/public/img/ops-central/performance_availability_color.svg',
        },
      ],
    };
  }
  render() {
    const { tableData } = this.state;
    return (
      <div className="ops-central-container">
        <div className="ops-central-header">
          <h2 className="heading">OPS CENTERAL</h2>
          <div className="central-header-content">
            <div className="recent-text">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <p>Recent</p>
            </div>
            <div className="recent-text">
              <i className="fa fa-retweet" aria-hidden="true"></i>
              <p>Sort</p>
            </div>
            <div className="search-bar">
              <input type="text" className="control-form" placeholder="search" />
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="ops-container">
          <div className="row">
            {tableData && tableData.length > 0 ? (
              tableData.map((value: any) => {
                return (
                  <div className="col-lg-3 col-md-3 col-sm-6" key={value.id}>
                    <div className="ops-box">
                      <div className="ops-box-inner">
                        <div className="ops-image">
                          <img src={value.icon} alt="image" className="icon" />
                          <img src={value.colorIcon} alt="image" className="color-icon" />
                        </div>
                        <div className="ops-content">
                          <div className="ops-tittle"> {value.category} </div>
                          <div className="ops-text"> {value.info} </div>
                        </div>
                      </div>
                      <div className="explore-content">
                        <span>
                          <img src="/public/img/Explore-icon.png" alt="image" />
                        </span>
                        <a href="#">
                          Explore <i className="fa fa-caret-right" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <>...loading</>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default OpsCenteral;
