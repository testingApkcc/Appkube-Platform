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
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 13,
          category: 'Logs',
          info: 'sampleText',
          icon: '/public/img/ops-central/logs.svg',
        },
        {
          id: 12,
          category: 'Compliance',
          info: 'sampleText',
          icon: '/public/img/ops-central/compliance.svg',
        },
        {
          id: 11,
          category: 'Service Desk',
          info: 'sampleText',
          icon: '/public/img/ops-central/service_desk.svg',
        },
        {
          id: 10,
          category: 'Automation',
          info: 'sampleText',
          icon: '/public/img/ops-central/automation.svg',
        },
        {
          id: 19,
          category: 'Infra As Code',
          info: 'sampleText',
          icon: '/public/img/ops-central/laas.svg',
        },
        {
          id: 20,
          category: 'Kubernetes Management',
          info: 'sampleText',
          icon: '/public/img/ops-central/kubernetes_management.svg',
        },
        {
          id: 21,
          category: 'Performance Monitoring',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_monitoring.svg',
        },
        {
          id: 22,
          category: 'Log Monitoring',
          info: 'sampleText',
          icon: '/public/img/ops-central/log_monitoring.svg',
        },
        {
          id: 23,
          category: 'tracing',
          info: 'sampleText',
          icon: '/public/img/ops-central/tracing.svg',
        },
        {
          id: 24,
          category: 'Toolcahain/Workflows',
          info: 'sampleText',
          icon: '/public/img/ops-central/toolchain_workflows.svg',
        },
        {
          id: 25,
          category: 'ChatOps',
          info: 'sampleText',
          icon: '/public/img/ops-central/chat_ops.svg',
        },
        {
          id: 26,
          category: 'AI-ops',
          info: 'sampleText',
          icon: '/public/img/ops-central/ai_ops.svg',
        },
        {
          id: 28,
          category: 'Cloud Analytics',
          info: 'sampleText',
          icon: '/public/img/ops-central/cloud_analytics.svg',
        },
        {
          id: 224,
          category: 'cloud optimizer',
          info: 'sampleText',
          icon: '/public/img/ops-central/cloud_optimizer.svg',
        },
        {
          id: 29,
          category: 'Self service Provisioning',
          info: 'sampleText',
          icon: '/public/img/ops-central/self_service_provisioning.svg',
        },
      ],
      duplicateTableData: [],
    };
  }

  componentDidMount() {
    const { tableData } = this.state;
    this.setState({ duplicateTableData: tableData });
  }

  handelFilter = (e: any) => {
    const { value } = e.target;
    const { tableData, duplicateTableData } = this.state;
    if (value.length >= 0) {
      let data = [];
      for (let i = 0; i < duplicateTableData.length; i++) {
        if (duplicateTableData[i].category.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          data.push(duplicateTableData[i]);
        }
      }
      this.setState({ tableData: data });
    } else {
      this.setState({ tableData: tableData });
    }
  };
  render() {
    const { tableData } = this.state;
    return (
      <div className="ops-central-container">
        <div className="ops-central-header">
          <h2 className="heading">Ops Centeral</h2>
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
              <input type="text" className="control-form" placeholder="search" onChange={(e) => this.handelFilter(e)} />
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
              <>No Data Avalable</>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default OpsCenteral;
