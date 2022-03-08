// Libraries
import React from 'react';
import { connect } from 'react-redux';
import CustomDashboardLoader from '../custom-dashboard-loader';

// Services & Utils
export interface Props {
  $scope: any;
  $injector: any;
  location: any;
}
export interface State {
  uid: any;
  slug: any;
}

class JustDashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      uid: '',
      slug: '',
    };
  }

  componentDidMount() {
    const mainView: any = document.getElementsByClassName('main-view');
    if (mainView && mainView.length > 0) {
      mainView[0].style.overflow = 'hidden';
    }
    const sideMenu: any = document.getElementsByClassName('sidemenu');
    if (sideMenu && sideMenu.length > 0) {
      sideMenu[0].style.display = 'none';
    }
  }

  render() {
    // const { uid, slug } = this.state;
    return (
      <div>
        <CustomDashboardLoader
          $scope={this.props.$scope}
          $injector={this.props.$injector}
          urlUid={this.props.location.query.uid}
          urlSlug={this.props.location.query.slug}
        />
      </div>
    );
  }
}

export const mapStateToProps = (state: any) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(JustDashboard);
