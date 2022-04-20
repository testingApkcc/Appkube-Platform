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
          <h1>DEV CENTERAL</h1>
          <div className="">
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
export default DevCenteral;
