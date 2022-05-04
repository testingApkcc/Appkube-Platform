import React from 'react';
import awsIcon from '../../../img/aws.png';

export class ProvisioningTemplates extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            comp: 1
        }
    }

    formFields = () => {
        const { comp } = this.state;
        if (comp === 1) {
            return (
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
                            <div className="col-md-6 col-sm-12" onClick={() => this.setState({ comp: comp + 1 })}>
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
            )
        }
        else if (comp === 2) {
            return (
                <div className="catalogue-right-container">
                    <div className="contents">
                        <strong>create an Account with DevSecOps best practice in AWS</strong>
                        <h3>Welcome</h3>
                        <p>This is demo text to get look and feel of the page, it will be replaced by proper content related to account creation,</p>
                        <h3>Prerequisites</h3>
                        <p>Prerequisites of Account creation will be mentioned here.</p>
                        <h3>Description</h3>
                        <p>Use DevSecOps practices to support continuous deployment of your application, including evidence collection, GitOps flow, change management, and compliance scans.</p>
                        <ul>
                            <li><a href='#'>View docs</a></li>
                            <li><a href='#'>Read tutorial</a></li>
                            <li><a href='#'>Template repo</a></li>
                        </ul>
                        <h3>Important</h3>
                        <ol>
                            <li>This template uses a guided experience You be asked, step by step, what tools should be inclu ded in your toolchain.</li>
                            <li>You must configure some prerequisites in other IBM or external services. Refer to the toolchain prerequisites setup steps in the documentation for creting this toolchain. You will need to enter the details from those instances in the relevant template steps.</li>
                            <li>The toolchain created from this template consumes artifacts and evidence produced by an associated continuous integration (CI) toolchain. To create one see CI-Develop a secure app with DevSecOps practices.</li>
                            <li>In most steps you will be asked to name each tool they will appear in your toolchain.</li>
                            <li>Some steps are mandatory. To skip to the next mandatory step click Create toolchain'</li>
                        </ol>
                        <div className="d-block text-right">
                            <button className="next-btn" onClick={() => this.setState({ comp: comp - 1 })}>Back</button>
                            <button className="next-btn" onClick={() => this.setState({ comp: comp + 1 })}>Next</button>
                        </div>
                    </div>
                </div>
            )
        }
        else if (comp === 3) {
            return (
                <div className="catalogue-right-container">
                    <div className="contents">
                        <strong>create an Account with DevSecOps best practice in AWS</strong>
                        <h3>Account Creation</h3>
                        <p>This is demo text to get look and feel of the page, it will be replaced by proper content related to account creation,</p>
                        <div className="form-detail-group">
                            <strong>Account Details</strong>
                            <div className="form-group">
                                <label>Account Name</label>
                                <input type="text" className="form-control" placeholder="AWS Config" />
                            </div>
                            <div className="form-group">
                                <label>Account Email</label>
                                <input type="email" className="form-control" placeholder="AWS Config" />
                            </div>
                        </div>
                        <div className="form-detail-group">
                            <strong>Organisatoin Selection</strong>
                            <div className="form-group">
                                <label>Managed Organisational Unit</label>
                                <select className="form-control">
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-detail-group">
                            <strong>Sign In Information</strong>
                            <div className="form-group">
                                <label>SSO User Email</label>
                                <input type="email" className="form-control" placeholder="user@domain.com" />
                            </div>
                            <div className="form-group">
                                <label>SSO User First Name</label>
                                <input type="text" className="form-control" placeholder="eg. Sandbox" />
                            </div>
                            <div className="form-group">
                                <label>SSO User Last Name</label>
                                <input type="text" className="form-control" placeholder="eg. AFT" />
                            </div>
                        </div>
                        <div className="form-detail-group">
                            <strong>Tagging</strong>
                            <div className="form-group">
                                <button className="add-tags-btn"><i className="fa fa-plus"></i></button><label>Add Tags</label>
                            </div>
                        </div>
                        <div className="form-detail-group">
                            <strong>Request Reason</strong>
                            <div className="form-group">
                                <label>Requestor</label>
                                <input type="email" className="form-control" placeholder="user@domain.com" />
                            </div>
                            <div className="form-group">
                                <label>Request Reason</label>
                                <input type="text" className="form-control" placeholder="eg. Sandbox" />
                            </div>
                        </div>
                        <div className="form-detail-group">
                            <strong>Account Customization</strong>
                            <div className="form-group">
                                <label>Name</label>
                                <select className="form-control">
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-block text-right">
                            <button className="next-btn" onClick={() => this.setState({ comp: comp - 1 })}>Back</button>
                            <button className="next-btn" >Create</button>
                        </div>
                    </div>
                </div>)
        }
        else {return<></>}
    }
    render() {
        const {comp}=this.state;
        return (
            <div className="catalogue-inner-tabs-container templates-container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-r-p">
                        <div className="templates-filters">
                            <div className="filter-search">
                                <strong>Filters</strong>
                                <div className="filter-input">
                                    <button className="search-icon"><i className="fa fa-search"></i></button>
                                    <input type="text" placeholder="Search" value={''} />
                                </div>
                            </div>
                            <div className="templates-category">
                                <ul>
                                    <li className={comp===2?'active':''} onClick={() => this.setState({ comp:2 })}><label >Welcome</label></li>
                                    <li className={comp===3?'active':''} onClick={() => this.setState({ comp:3 })} ><label >Account Creation</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-l-p">
                        {
                            this.formFields()
                        }
                    </div>
                </div>

            </div>
        )
    }
}