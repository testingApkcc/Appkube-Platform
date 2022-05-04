import React from 'react';
import { AppBlocks } from './AppBlocks';
import { LibrarySdk } from './LibraryAndSDKs';
import { DeploymentTemplate } from './BuildDeployTemp';
import { ISVSolutions } from './ISVsolutions';
import { DataFlow } from './Dataflows';

export class DevCatalogue extends React.Component<any, any>{
    config: any;
    tabMapping: any = [
        {
            name: "App Block",
            dataKey: 'appblock',
            component: AppBlocks
        },
        {
            name: "Library/ SDKs",
            dataKey: 'library',
            component: LibrarySdk
        },
        {
            name: "Build/Deployment Template",
            dataKey: 'deploymentTemplate',
            component: DeploymentTemplate
        },
        {
            name: "ISV Solutions",
            dataKey: 'isvSolutions',
            component: ISVSolutions
        },
        {
            name: "Data Flow",
            dataKey: 'dataflow',
            component: DataFlow
        }
    ];
    previewDashboardPopupRef: any;
    constructor(props: any) {
        super(props)
        this.state = {
            catalogData: this.props.data || {},
            activeTab: 0
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
            this.setState({
                catalogData: this.props.data
            });
        }
    }

    setActiveTab = (activeTab: any) => {
        this.setState({
            activeTab
        });
    };

    render() {
        const { catalogData, activeTab } = this.state;
        return (
            <>
                <div className="catalogue-inner-tabs">
                    <ul>
                        {
                            this.tabMapping.map((tabData: any, index: any) => {
                                return (
                                    <li key={`ops-tab-${index}`}
                                        className={index === activeTab ? 'active' : ''}
                                        onClick={(e) => this.setActiveTab(index)}>
                                        {tabData.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {
                    this.tabMapping.map((tabData: any, index: any) => {
                        if (index === activeTab) {
                            return <tabData.component data={catalogData[tabData.dataKey]} />
                        } else {
                            return <></>;
                        }

                    })
                }
            </>
        )
    }
}