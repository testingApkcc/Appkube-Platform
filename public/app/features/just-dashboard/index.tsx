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
    const topNavBar: any = document.getElementsByClassName('top-nav-bar');
    if (topNavBar && topNavBar.length > 0) {
      topNavBar[0].style.display = 'none';
    }
    const mainBody: any = document.getElementsByClassName('monitor-main-body');
    if (mainBody && mainBody.length > 0) {
      mainBody[0].style.marginLeft = '0px';
      mainBody[0].style.marginTop = '0px';
      mainBody[0].style.width = '100%';
    }

    setTimeout(() => {
      const pageToolbar: any = document.getElementsByClassName('page-toolbar');
      if (pageToolbar && pageToolbar.length > 0) {
        pageToolbar[0].style.display = 'none';
      }
    }, 1000);

    const uid = this.getParameterByName('uid', window.location.href);
    const slug = this.getParameterByName('slug', window.location.href);
    this.setState({
      uid,
      slug,
    });
  }

  getParameterByName = (name: string, url: string) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  render() {
    const { uid, slug } = this.state;
    return (
      <div>
        {uid ? (
          <CustomDashboardLoader
            $scope={this.props.$scope}
            $injector={this.props.$injector}
            urlUid={uid}
            urlSlug={slug}
          />
        ) : (
          <div>Dashboard is loading...</div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state: any) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(JustDashboard);
