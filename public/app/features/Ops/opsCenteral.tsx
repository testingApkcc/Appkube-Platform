import React from 'react';
class OpsCenteral extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: [
        { id: 14, category: 'Performance & Availability', info: 'sampleText' },
        { id: 13, category: 'Logs', info: 'sampleText' },
        { id: 12, category: 'Compliance', info: 'sampleText' },
        { id: 11, category: 'Service Desk', info: 'sampleText' },
        { id: 10, category: 'Automation', info: 'sampleText' },
        { id: 19, category: 'Infra As Code', info: 'sampleText' },
        { id: 224, category: 'Kubernetes Management', info: 'sampleText' },
        { id: 224, category: 'Performance Monitoring', info: 'sampleText' },
        { id: 224, category: 'Log Monitoring', info: 'sampleText' },
        { id: 224, category: 'tracing', info: 'sampleText' },
        { id: 224, category: 'Toolcahain/Workflows', info: 'sampleText' },
        { id: 224, category: 'ChatOps', info: 'sampleText' },
        { id: 224, category: 'AI-ops', info: 'sampleText' },
        { id: 224, category: 'Cloud Analytics', info: 'sampleText' },
        { id: 224, category: 'cloud optimizer', info: 'sampleText' },
        { id: 224, category: 'Self service Provisioning', info: 'sampleText' },
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
export default OpsCenteral;
