import React from 'react';
class SecCenteral extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: [
        {
          id: 14,
          category: 'RBAC/Multitenancy',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 13,
          category: 'Cloud Env Security',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 12,
          category: 'Infra Security',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 11,
          category: 'Container Security',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 10,
          category: 'Kubernetes Security',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 19,
          category: 'Code Security - SAST/DAST',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 224,
          category: 'Secrets Vaults',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 224,
          category: 'App Security',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 224,
          category: 'Data Security',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 224,
          category: 'cloud Compiance',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
      ],
    };
  }
  render() {
    const { tableData } = this.state;
    return (
      <div className="ops-central-container">
        <div className="ops-central-header">
          <h2 className="heading">Sec Centeral</h2>
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
export default SecCenteral;
