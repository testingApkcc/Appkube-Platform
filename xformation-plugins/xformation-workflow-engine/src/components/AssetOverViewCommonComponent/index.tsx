import React from 'react';
import SimpleBar from 'simplebar-react';
import CommonMatrixViewComponent from 'components/CommonMatrixViewComponent';

class AssetOverViewReusableComp extends React.Component<any, any>{
    matrixDataName: any;
    constructor(props: any) {
        super(props)
        this.state = {
            toggleMatrix: false,
            activeModelName: '',
        }
        this.matrixDataName = [
            "Create Usecase Document",
            "Create Screen Design"
        ]
    }

    handleDisplayMatrixView = (modelName: any | "") => {
        let { activeModelName, toggleMatrix } = this.state;
        activeModelName = modelName ? modelName : ''
        this.setState({
            toggleMatrix: !toggleMatrix, activeModelName
        })
    }

    checkValuesValidation = (value: any) => {
        let valuesPresent: any = 0
        let retdata: any;
        if (value.length <= 0) {
            retdata = <React.Fragment />
        } else if (value.length > 0) {
            for (let i = 0; i < value.length; i++) {
                let obj = value[i]
                let res: any = 0
                for (const objKey of Object.keys(obj)) {

                    if (obj[objKey]) {
                        res++
                    }

                }
                if (Object.keys(obj).length === res) {
                    valuesPresent++
                }
            }
        }
        if (valuesPresent === value.length) {
            retdata = "completed"
        }
        else if (valuesPresent < value.length) {
            retdata = "inprogress"
        }
        else {
            retdata = ""
        }
        return retdata;
    }
    displayUsecaseList = (stageList: any) => {
        let retData = [];
        if (stageList && stageList.length > 0) {
            for (let i = 0; i < stageList.length; i++) {
                let row = stageList[i];
                retData.push(
                    <div className="col-md-4 col-12" key={`${i}_stage_list`}>
                        <div
                            className={
                                `receive-rfq-box  ${this.checkValuesValidation(row.workflowCheckList)}`
                            }
                        >
                            <div className="receive-number">{i + 1}</div>
                            <div className="heading">
                                <h5>{row.name}</h5>
                            </div>
                            <SimpleBar style={{ maxHeight: 145 }}>
                                <ul>{this.displaySteps(row.details)}</ul>
                            </SimpleBar>
                        </div>
                    </div>
                );
            }
        }
        return retData;
    };

    displaySteps = (step: any) => {
        const retStepData = [];
        if (step && step.length > 0) {
            for (let i = 0; i < step.length; i++) {
                retStepData.push(
                    <React.Fragment key={`${i}_workflow_checklist_step`}>
                        {/* <Link to="/a/xformation-workflow-engine/matrixView"> */}
                        {this.matrixDataName.includes(step[i].subStageName) ? <li
                            onClick={() => { this.handleDisplayMatrixView(step[i].subStageName === "Create Usecase Document" ? "usecaseDevelopment" : "designSpecs") }}
                            className={step[i].link !== '' ? 'active' : ''}>{step[i].subStageName}</li> : <li className={step[i].link !== '' ? 'active' : ''}>{step[i].subStageName}</li>}
                        {/* </Link> */}
                    </React.Fragment>
                );
            }
        }
        return retStepData;
    };

    render() {
        const { usecaseStageList, usecasename } = this.props;
        const { toggleMatrix, activeModelName } = this.state;
        return (
            <React.Fragment>
                {!toggleMatrix ? <React.Fragment>

                    {this.displayUsecaseList(usecaseStageList)}
                </React.Fragment> :
                    <CommonMatrixViewComponent activeModelName={activeModelName} usecasename={usecasename}
                        activeMatrixData={usecaseStageList[0].usecaseDevelopment
                        } handleDisplayMatrixView={this.handleDisplayMatrixView} />
                }

            </React.Fragment>
        )
    }
}

export default AssetOverViewReusableComp;