import React from 'react';

export class LinkData extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
        
    }
    render() {
        const { props} = this.props
        const workflowDetail = props.usecaseData?.stepInput?.S?.stages[props.activeStage];
        console.log( props)
        return (
            <React.Fragment>
                {workflowDetail?.details.length > 0 ?
                    workflowDetail.details.map((val: any, indx: any) => {
                        return (
                            <React.Fragment>
                                <div key={`usecase-${indx}-${props.activeStage}`} className="api-code">
                                    <div className="heading">
                                        <h5>{val.subStageName}</h5>
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                    {val?.data?.length > 0 && val.data.map((link: any, index: any) => {
                                        return (
                                            <div className="api-content">
                                                <label>{link.label}:</label>
                                                <input
                                                    type="text"
                                                    name="link"
                                                    readOnly={props.disabledEditForm}
                                                    value={link.link}
                                                    onChange={(e) => props.handleStateChange(e, indx, index)}
                                                />
                                                <button
                                                    onClick={()=>props.updateStep(props.usecaseData)}
                                                    className="btn btn-primary code-update-btn"
                                                    disabled={props.disabledEditForm}
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        )

                    }) :
                    (<React.Fragment></React.Fragment>)
                }
            </React.Fragment>
        );
    }
}

export default LinkData;
