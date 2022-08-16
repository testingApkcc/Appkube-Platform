import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

class AssetOverViewReusableComp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {}
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
    displayUsecaseList = (usecaseList: any) => {

        let retData = [];
        if (usecaseList && usecaseList.length > 0) {
            for (let i = 0; i < usecaseList.length; i++) {
                let row = usecaseList[i];
                retData.push(
                    <div className="col-md-4 col-12">
                        <div
                            className={
                                `receive-rfq-box ${this.checkValuesValidation(row.workflowCheckList)}`
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
                    <Link to="/a/xformation-workflow-engine/matrixView">
                        <li className={step[i].link !== '' ? 'active' : ''}>{step[i].subStageName}</li>
                    </Link>
                );
            }
        }
        return retStepData;
    };

    render() {
        const { usecaseList } = this.props;
        return (
            <React.Fragment>
                {this.displayUsecaseList(usecaseList)}
            </React.Fragment>
        )
    }
}

export default AssetOverViewReusableComp;