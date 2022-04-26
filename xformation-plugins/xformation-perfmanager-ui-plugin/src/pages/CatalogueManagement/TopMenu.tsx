import * as React from 'react';
import { Link } from 'react-router-dom';
import { PLUGIN_BASE_URL } from '../../constants';
import { UnimplementedFeaturePopup } from '../../components/UnimplementedFeaturePopup';

export class TopMenu extends React.Component<any, any> {
  unimplementedFeatureModalRef: any;
  constructor(props: any) {
    super(props);
    this.state = {};
    this.unimplementedFeatureModalRef = React.createRef();
  }
  onClickUnImplementedFeature = (link: any) => {
    this.unimplementedFeatureModalRef.current.setLink(link);
    this.unimplementedFeatureModalRef.current.toggle();
  };

  render() {
    return (
      <>
        <div className="float-right common-right-btn">
          <Link to={`${PLUGIN_BASE_URL}/managedashboard`} className="white-button m-r-0">
            <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back
          </Link>
        </div>
        <UnimplementedFeaturePopup ref={this.unimplementedFeatureModalRef} />
      </>
    );
  }
}
