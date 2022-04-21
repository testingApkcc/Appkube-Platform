import React from 'react';
class DevCenteral extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: [
        { id: 14, category: 'Generator', info: 'sampleText' },
        { id: 13, category: 'Delivery Central', info: 'sampleText' },
        { id: 12, category: 'Quality Central', info: 'sampleText' },
        { id: 11, category: 'Test Central', info: 'sampleText' },
        { id: 10, category: 'Raid Tools for Micrservices', info: 'sampleText' },
        { id: 19, category: 'workflow Editor', info: 'sampleText' },
        { id: 24, category: 'wf Engie', info: 'sampleText' },
        { id: 24, category: 'Static Site Editor', info: 'sampleText' },
        { id: 24, category: 'SDK/Libraries', info: 'sampleText' },
        { id: 24, category: 'App/Catalouge', info: 'sampleText' },
        { id: 24, category: 'GitOps', info: 'sampleText' },
        { id: 24, category: 'CI/CD', info: 'sampleText' },
        { id: 24, category: 'Continues Test', info: 'sampleText' },
        { id: 24, category: 'Container Management', info: 'sampleText' },
        { id: 24, category: 'Kubernetes Operators', info: 'sampleText' },
        { id: 24, category: 'Code Quality', info: 'sampleText' },
        { id: 24, category: 'Vulerability', info: 'sampleText' },
        { id: 24, category: 'Enviornments Management', info: 'sampleText' },
        { id: 24, category: 'Serverless', info: 'sampleText' },
      ],
    };
  }
  render() {
    const { tableData } = this.state;
    return (
      <div className="ops-central-container">
        <div className="ops-central-header">
          <h2 className="heading">DEV CENTERAL</h2>
          <div className="central-header-content">
            <div className="recent-text">
              <i className="fas fa-clock"></i>
              <p>Recent</p>
            </div>
            <div className="recent-text">
              <i className="fas fa-arrow-up"></i>
              <p>Sort</p>
            </div>
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input type="text" className="control-form" placeholder="search" />
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
                          <img src="/public/img/central.png" alt="image" />
                        </div>
                        <div className="ops-content">
                          <div style={{ color: '#0699fb' }}> {value.category} </div>
                          <div style={{ color: '#999999F' }}> {value.info} </div>
                        </div>
                      </div>
                      <div className="explore-content" style={{ color: '#999999F' }}>
                        <a href="#">Explore &#x25BA;</a>
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
