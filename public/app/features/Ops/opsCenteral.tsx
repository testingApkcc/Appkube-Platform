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
      <div>
        <div>
          <h1>OPS CENTERAL</h1>
          <div>
            <div>Recent</div>
            <div>Sort</div>
            <div>
              <span>icon</span>
              <input type="text" placeholder="search" />
            </div>
          </div>
        </div>
        <div>
          {tableData && tableData.length > 0 ? (
            tableData.map((value: any) => {
              return (
                <div key={value.id}>
                  <div>
                    <img src="" alt="image" />
                  </div>
                  <div> {value.category} </div>
                  <div> {value.info} </div>
                  <div>
                    <a href="#">Explore &#x25BA;</a>
                  </div>
                </div>
              );
            })
          ) : (
            <>...loading</>
          )}
        </div>
      </div>
    );
  }
}
export default OpsCenteral;
