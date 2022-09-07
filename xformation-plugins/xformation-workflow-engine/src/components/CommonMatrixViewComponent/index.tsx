import * as React from 'react';
import designSpecsImg from '../../img/design-specs-img.png';
import { Button } from '@material-ui/core';

class CommonMatrixViewComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: "",
            activeMatrixData
                : {},
            usecasename: ''
        };
    }
    componentDidMount(): void {
        if (this.props.activeMatrixData
        ) {
            const { activeMatrixData
                , activeModelName, usecasename } = this.props
            this.setState({
                activeTab: activeModelName,
                activeMatrixData
                    : activeMatrixData
                        ? activeMatrixData
                        : {},
                usecasename: usecasename
            })
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.activeMatrixData
            !== prevProps.activeMatrixData

            || this.props.activeModelName !== prevProps.activeModelName ||
            this.props.usecasename !== prevProps.usecasename) {
            const { activeMatrixData
                , activeModelName, usecasename } = this.props
            this.setState({
                activeTab: activeModelName,
                activeMatrixData
                    : activeMatrixData
                        ? activeMatrixData
                        : {},
                usecasename: usecasename
            })
        }
    }
    setActiveTab = (val: any) => {
        this.setState({
            activeTab: val,
        })
    }
    handleActorTag = (actorsData: any) => {
        let validate = false
        for (let actor of actorsData) {
            if (actor.isChecked) {
                return true
            }
            else { validate = false }
        }
        return validate
    }
    render() {
        const { activeTab, usecasename, activeMatrixData
        } = this.state;
        return (
            <div className="matrix-view-container">
                <div className="matrix-view-section">
                    <div className="matrix-view-content">
                        <div className="matrix-view-head">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-xl-5 col-lg-6 col-md-7 col-sm-12 col-xs-12">
                                    <div className="head-right">
                                        
                                        <Button onClick={() => this.props.handleDisplayMatrixView('')} className="btn-primary pro-overview-btn"><i className="fa fa-close"></i> </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tabs">
                            <div className="tabs-content">
                                {activeTab === "usecaseDevelopment" &&
                                    <div className="tabs-inner-content">
                                        <h5>Use Case Name &#8758; <span>{usecasename}</span></h5>
                                        {
                                            activeMatrixData
                                                ?.selectActors?.length && activeMatrixData
                                                    .selectActors.length > 0 && this.handleActorTag(activeMatrixData.selectActors) && <div className="requirements-content">
                                                <h6>Actors:</h6>
                                                <ul>
                                                    {activeMatrixData.selectActors.map((actorsData: any, index: any) => actorsData.isChecked && (<li key={`${index}_actors_data`}> {actorsData.name}</li>))}
                                                </ul>
                                            </div>}
                                        {activeMatrixData.description && <div className="requirements-content">
                                            <h6>Use Case Description:</h6>
                                            <p>{activeMatrixData.description}</p>
                                        </div>}
                                        {activeMatrixData.tigger && <div className="requirements-content">
                                            <h6>Triggers:</h6>
                                            <ul>
                                                <li>{activeMatrixData.tigger}</li>
                                            </ul>
                                        </div>}
                                        {activeMatrixData.preConditions && <div className="requirements-content">
                                            <h6>Preconditions::</h6>
                                            <p>{activeMatrixData.preConditions}</p>
                                        </div>}
                                        {activeMatrixData.postConditions && <div className="requirements-content">
                                            <h6>Post condition:</h6>
                                            <p>{activeMatrixData.postConditions}</p>
                                        </div>}
                                        {activeMatrixData.normalFlow && <div className="requirements-content">
                                            <h6>Normal Flow:</h6>
                                            <ol>
                                                <li>Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                            </ol>
                                        </div>}
                                        {activeMatrixData.alternateFlow && <div className="requirements-content">
                                            <h6>Alternate Flow:</h6>
                                            <p>9A1: Teacher wrongly marks student as absent or student come tale to school.</p>
                                            <ol>
                                                <li>Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                                <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                            </ol>
                                        </div>}
                                    </div>
                                }
                                {activeTab === "designSpecs" &&
                                    <div className="tabs-inner-content">
                                        {activeMatrixData?.prototypeLink && <p><strong>Prototype Link:</strong> <a href={activeMatrixData.prototypeLink} target="_blank" >https://xd.adobe.com/view/a29133fd-8214-4aff-7293-b9a01174de5-d4a0/?fullscreen</a></p>}
                                        {activeMatrixData?.specs?.length > 0 && <div className="design-specs-img"><img src={designSpecsImg} alt="" /></div>}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommonMatrixViewComponent