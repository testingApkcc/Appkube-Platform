import React from 'react';
class SecCenteral extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: [
        { id: 14, category: 'RBAC/Multitenancy', info: 'sampleText' },
        { id: 13, category: 'Cloud Env Security', info: 'sampleText' },
        { id: 12, category: 'Infra Security', info: 'sampleText' },
        { id: 11, category: 'Container Security', info: 'sampleText' },
        { id: 10, category: 'Kubernetes Security', info: 'sampleText' },
        { id: 19, category: 'Code Security - SAST/DAST', info: 'sampleText' },
        { id: 224, category: 'Secrets Vaults', info: 'sampleText' },
        { id: 224, category: 'App Security', info: 'sampleText' },
        { id: 224, category: 'Data Security', info: 'sampleText' },
        { id: 224, category: 'cloud Compiance', info: 'sampleText' },
      ],
    };
  }
  render() {
    const { tableData } = this.state;
    return (
      <div className="ops-central-container">
        <div className="ops-central-header">
          <h2 className="heading">SEC CENTERAL</h2>
          <div className="central-header-content">
            <div className="recent-text">Recent</div>
            <div className="recent-text">Sort</div>
            <div className="search-bar">
              <span>icon</span>
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
export default SecCenteral;
