// Libraries
import React from 'react';
import { updateLocation } from 'app/core/actions';
// import 'react-circular-progressbar/dist/styles.css';
import Table from './table';
import { InviteUsersPopup } from './inviteUsersPopup/inviteUsersPopup';
import { config } from '../config';
import { OpenImagePopup } from './openImagePopup';
import appEvents from 'app/core/app_events';
import { AppEvents } from '@grafana/data';

// Services & Utils
export interface Props {
  $scope: any;
  $injector: any;
  updateLocation: typeof updateLocation;
  location: any;
}

class Team extends React.Component<any, any> {
  breadCrumbs: any = [
    {
      label: 'Home',
      route: `/`,
    },
    {
      label: 'Assets | Environments',
      isCurrentPage: true,
    },
  ];
  // tableValue: any;
  perPageLimit: any;
  checkboxValue: any;
  openImageRef: any;
  inviteUsersModalRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      pendingList: [],
      usersList: [],
      // data: [],
      // };
      tableValue: {
        columns: [
          {
            label: 'User Name',
            key: 'username',
            renderCallback: (value: any) => {
              return (
                <td>
                  <a href="#">{value}</a>
                </td>
              );
            },
          },
          {
            label: 'Email',
            key: 'email',
            renderCallback: (value: any) => {
              return (
                <td>
                  <a href="#">{value}</a>
                </td>
              );
            },
          },
          {
            label: 'Role',
            key: 'roles',
            renderCallback: (value: any) => {
              return (
                <td>
                  <a href="#">{value}</a>
                </td>
              );
            },
          },
          {
            label: 'Invite Status',
            key: 'inviteStatus',
            renderCallback: (value: any) => {
              return (
                <td>
                  <a href="#">{value}</a>
                </td>
              );
            },
          },
          {
            label: 'MFA Status',
            key: 'isMfaEnable',
            renderCallback: (value: any) => {
              return (
                <td>
                  <a href="#">{value}</a>
                </td>
              );
            },
          },
          {
            label: 'MFA Key',
            key: 'googleMfaKey',
            renderCallback: (value: any) => {
              return (
                <td>
                  <a href="#">{value}</a>
                </td>
              );
            },
          },
          {
            label: 'MFA QR Code',
            key: 'mfaQrCode',
            renderCallback: (value: any) => {
              return (
                <td>
                  <div className="d-block">
                    {/* <span className="d-inline-block">{value}</span> */}
                    <button className="btn btn-link float-left" onClick={() => this.onClickOpenImage(value)}>
                      <i className="fa fa-eye"></i>
                    </button>
                  </div>
                </td>
              );
            },
          },
          {
            label: 'Enable/Disable MFA',
            key: 'changeMfaStatus',
            renderCallback: (value: any) => {
              return (
                <td>
                  <a href="#">{value}</a>
                </td>
              );
            },
          },
          {
            label: 'Update Roles',
            key: 'updateRoles',
            renderCallback: (value: any, roles: any) => {
              return (
                <td>
                  <div className="d-block">
                    <button
                      className="team-blue-button float-left"
                      onClick={() => this.onClickUpdateRoles(value, roles)}
                    >
                      Update Roles
                    </button>
                  </div>
                </td>
              );
            },
          },
        ],
        data: [],
      },
    };
    this.perPageLimit = 4;
    this.checkboxValue = false;
    this.inviteUsersModalRef = React.createRef();
    this.openImageRef = React.createRef();
  }

  async componentDidMount() {
    await this.getTeam();
  }

  refresh = () => {
    console.log('Refreshing team list');
    this.getTeam();
  };

  async getTeam() {
    var myHeaders = new Headers();
    var obj = localStorage.getItem('userInfo');
    var userInfo;
    if (obj) {
      userInfo = JSON.parse(obj);
    } else {
      console.log('User not logged in');
      return;
    }
    await fetch(
      `${config.GET_TEAM}?organization=${userInfo.info.user.organization.name}&userName=${userInfo.info.user.username}`,
      {
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((result: any) => {
        if (result.code !== 417) {
          console.log('Team list : ', result);
          this.setState({
            pendingList: result.object.pendingInviteList,
            usersList: result.object.teamList,
          });
        }
      })
      .catch((error) => console.log('getTeam failed. Error', error));
  }

  isLightTheme() {
    const w: any = window;
    if (w.grafanaBootData && w.grafanaBootData.user) {
      return w.grafanaBootData.user.lightTheme;
    }
    return false;
  }

  onClickInviteUsers = (link: any) => {
    this.inviteUsersModalRef.current.setLink(link);
    this.inviteUsersModalRef.current.toggle();
  };

  onClickOpenImage = (value: any) => {
    this.openImageRef.current.setImg(value);
    this.openImageRef.current.toggle();
  };

  onClickUpdateRoles = async (value: any, roles: any) => {
    // console.log('Role to update : ', roles[value]);
    // console.log('User : ', value);
    var formdata = new FormData();
    formdata.append('userName', value);
    formdata.append('roleId', roles[value]);

    await fetch(config.UPDATE_USER_ROLE, {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Role updated : ', result);
        if (result.code !== 417) {
          appEvents.emit(AppEvents.alertSuccess, ['Role updated', '']);
        } else {
          appEvents.emit(AppEvents.alertError, ['Role updation failed', '']);
        }
      })
      .catch((error) => {
        console.log('Role update failed. Error', error);
        appEvents.emit(AppEvents.alertError, ['Role updation failed', '']);
      });
  };

  onClickItems = (list: any) => {
    const { tableValue } = this.state;
    this.setState({
      tableValue: {
        columns: tableValue.columns,
        data: list,
      },
    });
  };

  render() {
    const breadCrumbs = this.breadCrumbs;
    const pageTitle = 'PERFORMANCE MANAGEMENT';
    const { pendingList, usersList } = this.state;
    return (
      <React.Fragment>
        <div className="breadcrumbs-container">
          {pageTitle && <div className="page-title">{pageTitle}</div>}
          <div className="breadcrumbs">
            {breadCrumbs.map((breadcrumb: any, index: any) => {
              if (breadcrumb.isCurrentPage) {
                return (
                  <span key={index} className="current-page">
                    {breadcrumb.label}
                  </span>
                );
              } else {
                return (
                  <React.Fragment key={index}>
                    <a href={`${breadcrumb.route}`} className="breadcrumbs-link">
                      {breadcrumb.label}
                    </a>
                    <span className="separator">
                      <i className="fa fa-chevron-right"></i>
                    </span>
                  </React.Fragment>
                );
              }
            })}
          </div>
        </div>
        <div className="team-dashboard-page-container">
          <div className="common-container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div className="heading">
                  <h3>Team</h3>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <a href="/" className="float-right m-b-0 m-r-0 team-white-button">
                  <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;Back
                </a>
              </div>
            </div>
          </div>
          <div className="common-container border-bottom-0">
            <div className="team-dashboards-container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <a href="#">
                    <div
                      className="team-dashboard-box"
                      style={{ borderColor: '#00861b' }}
                      onClick={(e) => this.onClickItems(usersList)}
                    >
                      <span>All users</span>
                      <strong>{usersList && usersList.length}</strong>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <a href="#">
                    <div
                      className="team-dashboard-box"
                      style={{ borderColor: '#ffa000' }}
                      onClick={(e) => this.onClickItems(pendingList)}
                    >
                      <span>Invite sent</span>
                      <strong>{pendingList && pendingList.length}</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-table-container">
              <div className="heading">
                <div className="row">
                  <div className="col-md-6 col-xs-6">Users and Roles</div>
                  <div className="col-md-6 col-xs-6">
                    <button
                      onClick={() => this.onClickInviteUsers('')}
                      className="float-right m-b-0 m-r-0 team-blue-button"
                    >
                      <i className="fa fa-plus"></i>&nbsp;&nbsp;Invite Users
                    </button>
                  </div>
                </div>
              </div>
              <Table
                valueFromData={this.state.tableValue}
                perPageLimit={this.perPageLimit}
                visiblecheckboxStatus={this.checkboxValue}
                tableClasses={{
                  table: 'team-data-tabel',
                  tableParent: 'tasks-data-table',
                  parentClass: 'all-team-data-table',
                }}
                searchKey="username"
                showingLine="Showing %start% to %end% of %total%"
                dark={!this.isLightTheme()}
              />
            </div>
          </div>
        </div>
        <InviteUsersPopup ref={this.inviteUsersModalRef} updateList={this.refresh} />
        <OpenImagePopup ref={this.openImageRef} />
      </React.Fragment>
    );
  }
}

export default Team;
