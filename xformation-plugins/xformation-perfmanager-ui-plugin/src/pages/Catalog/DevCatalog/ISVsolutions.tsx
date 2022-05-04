import React from 'react';
import previewDashboardIcon from '../../../img/preview-dashboard-icon.png';
import libraryIcon from '../../../img/library-icon.png';
import awsIcon from '../../../img/aws.png';
import previewDashboard from '../../../img/preview-dashboard.png';


export class ISVSolutions extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
        }
    }


    handleCard = (cardData: any) => {
      const {handlePreviewDashboard, showPreview }=this.props;
      let retData = []
      if (cardData && cardData.length > 0) {
        retData = [];
        for (let i = 0; i < cardData.length; i++) {
          const { id, name, description } = cardData[i]
          retData.push(
            <>
              <div className={`blog-list-item box 
              ${showPreview === true ? "hide" : ""}`
              } key={id}>
                <div className="module-card-content">
                  <div className="row">
                    <div className="col-md-1 col-sm-12 p-r-0">
                      <img src={previewDashboard} alt={name} />
                    </div>
                    <div className="col-md-11 col-sm-12">
                      <h3 className="title is-block">{name}</h3>
                      <p className="subtitle is-block">{description}</p>
                    </div>
                  </div>
                </div>
                <div className="module-card-footer">
                  <div className="module-card-footer-details">
                    <a>
                      <img src={libraryIcon} alt="" />
                      {`Add Catalog To library`}
                    </a>
                  </div>
                  <div className="module-card-footer-provider">
                    <a onClick={() => handlePreviewDashboard('')}>
                      <img src={previewDashboardIcon} alt="" />
                      {`Preview Dashboard`}
                    </a>
                  </div>
                </div>
              </div>
            </>
          )
        }
      }
      else {
        retData = [];
        retData.push(<div>No Data Found</div>)
      }
      return retData
    }
    render() {
        const { cardData} = this.props;
        console.log(this.props)
        return (
            <div className="catalogue-inner-tabs-container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                        {/* <div className="catalogue-filters">
                            <div className="filter-search">
                                <strong>Filters</strong>
                                <div className="filter-input">
                                    <input type="text" placeholder="Search" value={searchString} onChange={this.searchFilter} />
                                    <button className="" onClick={this.handleClearFilter}><i className="fa fa-close"></i> Clear filter</button>
                                </div>
                            </div>
                            <div className="catalogue-category">
                                <strong>Tier</strong>
                                <ul>
                                    <li>
                                        <input type="checkbox" id="1" name="Filter1" value="filter1" />
                                        <label>Filter 1</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="2" name="Filter2" value="filter2" />
                                        <label>Filter 2</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="3" name="Filter3" value="filter3" />
                                        <label>Filter 3</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="4" name="Filter4" value="filter4" />
                                        <label>Filter 4</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="catalogue-category">
                                <strong>Category</strong>
                                <ul>
                                    {filterData && filterData.length > 0 &&
                                        this.handleFilterList(filterData)
                                    }
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-l-p">
                        <div className="catalogue-right-container">
                            <div className="heading">
                                <div className="row">
                                    <div className="col-md-9 col-sm-12">
                                        <h3>Catalogue</h3>
                                        <p>A catalogue is collection of dashboards</p>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <button className="create-btn">Add Catalogue</button>
                                    </div>
                                </div>
                            </div>
                            {cardData ?
                                <div className="catalogue-boxes">
                                    {this.handleCard(cardData)}
                                </div>
                                : cardData && cardData.length > 0 && <div className="loading-text">...loading</div>
                            }
                        </div>
                        <div className="catalogue-right-container">
                      <div>
                        Select a template to start with. You can use filters or the seach box the scope.
                      </div>
                      <div className="templated-search">
                        <div className="row">
                          <div className="col-sm-10">
                            <div className="search-box">
                              <button className="search-button"><i className="fa fa-search"></i></button>
                              <input type="text" placeholder="Search Template here" className="input" />
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="btnContainer">
                              <button className="btn btn-grid btn-active"><i className="fa fa-th-large"></i></button>
                              <button className="btn btn-list"><i className="fa fa-list"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="templated-boxs">
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="template-box">
                              <div className="heading">
                                <img src={awsIcon} alt='' />
                                Landing Zone
                              </div>
                              <div className="sub-text">
                                Create Landing Zone with DevSecOps best practice in AWS
                              </div>
                              <div className="text">
                                Description text related to creating LAmding zone on AWS will be displayed here
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="template-box">
                              <div className="heading">
                                <img src={awsIcon} alt='' />
                                Landing Zone
                              </div>
                              <div className="sub-text">
                                Create Landing Zone with DevSecOps best practice in AWS
                              </div>
                              <div className="text">
                                Description text related to creating LAmding zone on AWS will be displayed here
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="template-box">
                              <div className="heading">
                                <img src={awsIcon} alt='' />
                                Landing Zone
                              </div>
                              <div className="sub-text">
                                Create Landing Zone with DevSecOps best practice in AWS
                              </div>
                              <div className="text">
                                Description text related to creating LAmding zone on AWS will be displayed here
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="template-box">
                              <div className="heading">
                                <img src={awsIcon} alt='' />
                                Landing Zone
                              </div>
                              <div className="sub-text">
                                Create Landing Zone with DevSecOps best practice in AWS
                              </div>
                              <div className="text">
                                Description text related to creating LAmding zone on AWS will be displayed here
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="template-box">
                              <div className="heading">
                                <img src={awsIcon} alt='' />
                                Landing Zone
                              </div>
                              <div className="sub-text">
                                Create Landing Zone with DevSecOps best practice in AWS
                              </div>
                              <div className="text">
                                Description text related to creating LAmding zone on AWS will be displayed here
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}