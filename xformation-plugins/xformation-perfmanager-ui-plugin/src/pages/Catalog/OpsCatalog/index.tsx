import React from 'react';
export class OpsCatalog extends React.Component<any, any>{
    config: any;
    previewDashboardPopupRef: any;
    constructor(props: any) {
        super(props)
        this.state = {
        }
    }
    
    handleLowerMenu = (inx: any) => {
        let { navHandle } = this.state
        navHandle.lowerKey = inx;
        this.setState({ navHandle })
    }

   
    render() {
        const { catalogData, navHandle, handleLowerMenu} = this.props;
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