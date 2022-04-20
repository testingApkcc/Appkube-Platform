import React from 'react';
class ToolsAndDiagnostics extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableData: [
        { id: 14, category: 'Cahnge Manager', info: 'sampleText' },
        { id: 13, category: 'Explorer', info: 'sampleText' },
        { id: 12, category: 'RCA', info: 'sampleText' },
        { id: 11, category: 'Script Manager', info: 'sampleText' },
        { id: 10, category: 'Optimiser', info: 'sampleText' },
        { id: 19, category: 'Migration Management', info: 'sampleText' },
      ],
    };
  }
  render() {
    const { tableData } = this.state;
    return (
      <div>
        <div>
          <h1>TOOLS & DIAGNOSTICS</h1>
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
                    <a href="">Explore &#x25BA;</a>
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
export default ToolsAndDiagnostics;
