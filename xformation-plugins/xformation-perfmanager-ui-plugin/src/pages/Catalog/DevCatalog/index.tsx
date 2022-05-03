import React from 'react';
export class DevCatalog extends React.Component<any, any>{
    config: any;
    previewDashboardPopupRef: any;
    constructor(props: any) {
        super(props)
        this.state = {
            catalogueManagement: {
                Dev: {},
                Sec: {},
                Ops: {}
            },
        }
    }

    async componentDidMount() {
    }

    render() {
        const { catalogData, navHandle, handleLowerMenu } = this.props;
        return (
            <>
                {catalogData && navHandle &&
                    <ul>
                        {Object.keys(catalogData[navHandle.topKey]).map((cat: any, inx: any) => <li key={inx}
                            className={navHandle.lowerKey === inx ? 'active' : ''}
                            onClick={(e) => handleLowerMenu(inx)}>{cat}</li>)}
                    </ul>
                }
            </>
        )
    }
}