import React from "react";

export class CatalogueManagement extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            catalogueManagement: [
                {
                    catalogue: "Dev Catalouge",
                    id: 1,
                    isSelect: false,
                    category: [
                        { name: "App Blocks", id: 1, isSelect: false },
                        { name: "Library/SDKs", id: 2, isSelect: false },
                        { name: "Build/ Deployment Templets", id: 3, isSelect: false },
                        { name: "ISV Solutions", id: 4, isSelect: false },
                        { name: "Data Flow", id: 5, isSelect: false },
                    ],
                },
                {
                    catalogue: "Sec Catalouge", id: 2, isSelect: false,
                    category: [
                        { name: "Compliance Rules", id: 1, isSelect: false },
                        { name: "Compliance Policies", id: 2, isSelect: false },
                        { name: "Compliance Auditors", id: 3, isSelect: false },
                        { name: "Code Security Templates", id: 4, isSelect: false },
                        { name: "Container Security Templates", id: 5, isSelect: false },
                        { name: "Data Security Templates", id: 6, isSelect: false },
                    ],
                },
                {
                    catalogue: "Ops Catalogue", id: 3, isSelect: false,
                    category: [
                        { name: "Cloud Dashboards", id: 1, isSelect: false },
                        { name: "Provisioning Templates", id: 2, isSelect: false },
                        { name: "Alert rules", id: 3, isSelect: false },
                        { name: "Work Flows", id: 4, isSelect: false },
                        { name: "Collectos Bots", id: 5, isSelect: false },
                        { name: "Diagnostics", id: 6, isSelect: false },
                    ],
                }
            ],
            index: 0
        }
    }
    handleUpperMenu = (index: any) => {
        let { catalogueManagement } = this.state
        for (let i = 0; i < catalogueManagement.length; i++) {
            if (i === index) {
                catalogueManagement[i].isSelect = !catalogueManagement[i].isSelect;
            } else {
                catalogueManagement[i].isSelect = false
            }
        }
        this.setState({ index: index, catalogueManagement: catalogueManagement })
    }
    handleLowerMenu = (e: any, inx: any) => {

        let { catalogueManagement, index } = this.state
        for (let i = 0; i < catalogueManagement[index].category.length; i++) {
            if (i === inx) {
                catalogueManagement[index].category[i].isSelect = !catalogueManagement[index].category[i].isSelect;
            } else {
                catalogueManagement[index].category[i].isSelect = false
            }
        }
        this.setState({ catalogueManagement: catalogueManagement })
    }
    render() {
        const { catalogueManagement, index } = this.state;

        return (
            <div>
                <div>
                    {catalogueManagement &&
                        <div>
                            <ul>
                                {catalogueManagement.map((cat: any, inx: any) => <li key={cat.id} onClick={() => this.handleUpperMenu(inx)}>{cat.catalogue}</li>)}
                            </ul>
                        </div>}
                    <div><p><i /> Back</p></div>
                </div>
                <div>
                    {catalogueManagement && <div>
                        <ul>
                            {catalogueManagement[index].category.map((cat: any, inx: any) => <a onClick={(e) => this.handleLowerMenu(e, inx)}><li key={cat.id} >{cat.name}</li></a>)}
                        </ul>
                    </div>}
                    <div>
                        <div><label><strong>Filters</strong></label>
                            <div>
                                <input type={"search"} placeholder="Search" /> <input type={"text"} value={"x Clear filter"} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label><strong>Tier</strong></label>
                                <div>
                                    <ul>
                                        <li><span> <input type="checkbox" id="1" name="Filter1" value="filter1" /> <label>Filter 1</label></span></li>
                                        <li> <span> <input type="checkbox" id="2" name="Filter2" value="filter2" /> <label>Filter 2</label></span></li>
                                        <li> <span> <input type="checkbox" id="3" name="Filter3" value="filter3" /> <label>Filter 3</label></span></li>
                                        <li> <span> <input type="checkbox" id="4" name="Filter4" value="filter4" /> <label>Filter 4</label></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <label><strong>Category</strong></label>
                                <div>
                                    <ul>
                                        <li><span> <input type="checkbox" id="1" name="Filter1" value="filter1" /> <label>Filter 1</label></span></li>
                                        <li> <span> <input type="checkbox" id="2" name="Filter2" value="filter2" /> <label>Filter 2</label></span></li>
                                        <li> <span> <input type="checkbox" id="3" name="Filter3" value="filter3" /> <label>Filter 3</label></span></li>
                                        <li> <span> <input type="checkbox" id="4" name="Filter4" value="filter4" /> <label>Filter 4</label></span></li>
                                        <li> <span> <input type="checkbox" id="1" name="Filter1" value="filter1" /> <label>Filter 1</label></span></li>
                                        <li> <span> <input type="checkbox" id="2" name="Filter2" value="filter2" /> <label>Filter 2</label></span></li>
                                        <li> <span> <input type="checkbox" id="3" name="Filter3" value="filter3" /> <label>Filter 3</label></span></li>
                                        <li> <span> <input type="checkbox" id="4" name="Filter4" value="filter4" /> <label>Filter 4</label></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}