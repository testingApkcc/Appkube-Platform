import React from 'react';
class DevCenteral extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: [
        {
          id: 14,
          category: 'Generator',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 13,
          category: 'Delivery Central',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 12,
          category: 'Quality Central',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 11,
          category: 'Test Central',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 10,
          category: 'Raid Tools for Micrservices',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 19,
          category: 'workflow Editor',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 20,
          category: 'wf Engie',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 21,
          category: 'Static Site Editor',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 22,
          category: 'SDK/Libraries',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 23,
          category: 'App/Catalouge',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 24,
          category: 'GitOps',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 25,
          category: 'CI/CD',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 26,
          category: 'Continues Test',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 27,
          category: 'Container Management',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 28,
          category: 'Kubernetes Operators',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 29,
          category: 'Code Quality',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 30,
          category: 'Vulerability',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 31,
          category: 'Enviornments Management',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
        {
          id: 32,
          category: 'Serverless',
          info: 'sampleText',
          icon: '/public/img/ops-central/performance_availability.svg',
        },
      ],
      duplicateTabledata: [],
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
          <h2 className="heading">Dev Centeral</h2>
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
              <>...loading</>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default DevCenteral;
