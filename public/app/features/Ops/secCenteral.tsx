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
      <div>
        <div>
          <h1>SEC CENTERAL</h1>
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
export default SecCenteral;
