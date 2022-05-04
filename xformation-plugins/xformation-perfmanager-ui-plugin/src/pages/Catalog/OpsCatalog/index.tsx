import React from 'react';
import { CloudDashboards } from './CloudDashboards';
import { DataSources } from './DataSources';
import { ProvisioningTemplates } from './ProvisionTemplate';
import {Collectors} from './Collectors';
import {Diagonostics} from './Diagonostics'
import {KubeOperators} from './KubeOperators'
export class OpsCatalogue extends React.Component<any, any>{
    config: any;
    tabMapping: any = [{
        name: "Cloud Dashboards",
        dataKey: 'cloudDashBoards',
        component: CloudDashboards
    }, {
        name: "Datasources",
        dataKey: 'dataSources',
        component: DataSources
    }, {
        name: "Provisioning Templates",
        dataKey: 'provisioningTemplates',
        component: ProvisioningTemplates
    }, 
    {
        name: "Collectors",
        dataKey: 'collectors',
        component: Collectors
    },
    {
        name: "Diagonostics",
        dataKey: 'diagonostics',
        component: Diagonostics
    },
    {
        name: "Kube Operators",
        dataKey: 'kubeOperators',
        component: KubeOperators
    },
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
                    {
                        this.tabMapping.map((tabData: any, index: any) => {
                            if(index === activeTab){
                                return <tabData.component data={catalogData[tabData.dataKey]} />
                            } else {
                                return <></>;
                            }
                        })
                    }
                </ul>
            </>
        )
    }
}