import React, { PureComponent } from 'react';
import config from 'app/core/config';
import { updateLocation, notifyApp } from 'app/core/actions';
import { connect } from 'react-redux';
import { StoreState } from 'app/types';
import { getBackendSrv } from '@grafana/runtime';
import { hot } from 'react-hot-loader';
import appEvents from 'app/core/app_events';
import { AppEvents } from '@grafana/data';
import { config as urls } from 'app/features/config';
import { createErrorNotification } from 'app/core/copy/appNotification';

const isOauthEnabled = () => {
  return !!config.oauth && Object.keys(config.oauth).length > 0;
};

export const LoginSteps: any = {
  LOGIN: 0,
  MFA_VALIDATION: 1,
  PASSWORD: 2,
};

export interface FormModel {
  user: string;
  password: string;
  email: string;
  mfaCode: string;
}
interface Props {
  routeParams?: any;
  updateLocation?: typeof updateLocation;
  children: (props: {
    isLoggingIn: boolean;
    changePassword: (pw: string) => void;
    isChangingPassword: boolean;
    skipPasswordChange: Function;
    login: (data: FormModel) => void;
    disableLoginForm: boolean;
    ldapEnabled: boolean;
    authProxyEnabled: boolean;
    disableUserSignUp: boolean;
    isOauthEnabled: boolean;
    loginHint: string;
    passwordHint: string;
    isEmailValidating: boolean;
    currentLoginStep: any;
    verifyEmail: (e: any, step: any) => void;
    verifyMfaCode: (e: any, step: any) => void;
    isMfaValidating: boolean;
    verifyPassword: (e: any, step: any) => void;
    isAuthWithUserName: boolean;
    isMfaEnable: boolean;
    isMfaAuthenticated: boolean;
    isExternalSecurityEnable: boolean;
    handleBack: () => void;
  }) => JSX.Element;
}

interface State {
  isLoggingIn: boolean;
  isChangingPassword: boolean;
  isEmailValidating: boolean;
  currentLoginStep: any;
  isMfaValidating: boolean;
  organizationName: any;
  userName: any;
  isAuthWithUserName: boolean;
  isMfaEnable: boolean;
  isMfaAuthenticated: boolean;
  user: any;
  isExternalSecurityEnable: boolean;
}

export class LoginCtrl extends PureComponent<Props, State> {
  result: any = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggingIn: false,
      isChangingPassword: false,
      isEmailValidating: false,
      currentLoginStep: LoginSteps.LOGIN,
      isMfaValidating: false,
      organizationName: '',
      userName: '',
      isAuthWithUserName: false,
      isMfaEnable: false,
      isMfaAuthenticated: false,
      user: null,
      isExternalSecurityEnable: false,
    };
    console.log(this.state.currentLoginStep);
    if (config.loginError) {
      appEvents.emit(AppEvents.alertWarning, ['Login Failed', config.loginError]);
    }
  }

  changePassword = (password: string) => {
    const pw = {
      newPassword: password,
      confirmNew: password,
      oldPassword: 'admin',
    };
    if (!this.props.routeParams.code) {
      getBackendSrv()
        .put('/api/user/password', pw)
        .then(() => {
          this.toGrafana();
        })
        .catch((err: any) => console.error(err));
    }

    const resetModel = {
      code: this.props.routeParams.code,
      newPassword: password,
      confirmPassword: password,
    };

    getBackendSrv()
      .post('/api/user/password/reset', resetModel)
      .then(() => {
        this.toGrafana();
      });
  };
  handleBack = () => {
    this.setState({ currentLoginStep: LoginSteps.LOGIN });
  };
  login = (formModel: FormModel) => {
    this.setState({
      isLoggingIn: true,
    });
    let isExSec = false;
    console.log(`calling login API from UI..................`);
    // getBackendSrv()
    //   .get("/external_security_enable")
    //   .then((res: any) => {
    //     console.log(`external_security_enable flag: `, res);
    //     isExSec = res;
    //     localStorage.setItem(
    //       `external_security_enable`,
    //       isExSec === true ? `true` : `false`
    //     );
    //   });
    getBackendSrv()
      .post('/login', formModel)
      .then((result: any) => {
        this.result = result;
        if (isExSec === true) {
          localStorage.setItem(`userInfo`, JSON.stringify(result.userInfo));
        } else {
          localStorage.setItem(`userInfo`, '');
        }

        if (formModel.password !== 'admin' || config.ldapEnabled || config.authProxyEnabled) {
          this.toGrafana();
          return;
        } else {
          this.changeView();
        }
      })
      .catch(() => {
        this.setState({
          isLoggingIn: false,
        });
      });
  };

  verifyEmail = (e: any, email: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (email && email.trim()) {
      this.setState({
        isEmailValidating: true,
        userName: email,
      });
      const data = new FormData();
      data.append('userName', email);
      // this.setState({
      //   currentLoginStep: LoginSteps.PASSWORD,
      // });
      // return;
      fetch(urls.AUTHENTICATE_USER, {
        method: 'POST',
        body: data,
      })
        .then((response) => response.json())
        .then(
          (response) => {
            if (response) {
              this.setState({
                isEmailValidating: false,
                currentLoginStep: response.isMfaEnable === 'YES' ? LoginSteps.MFA_VALIDATION : LoginSteps.PASSWORD,
                organizationName: response.organization.name,
                user: response,
              });
            } else {
              notifyApp(createErrorNotification('There is some error. Please try again'));
            }
          },
          (error) => {
            notifyApp(createErrorNotification('There is some error. Please try again'));
            this.setState({
              isEmailValidating: false,
            });
          }
        );
    }
  };

  verifyMfaCode = (e: any, mfaCode: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (mfaCode && mfaCode.trim()) {
      const { userName, organizationName } = this.state;
      this.setState({
        isMfaValidating: true,
      });
      const data = new FormData();
      data.append('userName', userName);
      data.append('organizationName', organizationName);
      data.append('mfaCode', mfaCode);
      fetch(urls.AUTHENTICATE_GOOGLE_MFA, {
        method: 'POST',
        body: data,
      })
        .then((response) => response.json())
        .then(
          (response) => {
            if (response) {
              this.setState({
                isMfaValidating: false,
                currentLoginStep: LoginSteps.PASSWORD,
              });
            } else {
              notifyApp(createErrorNotification('There is some error. Please try again'));
            }
          },
          (error) => {
            notifyApp(createErrorNotification('There is some error. Please try again'));
            this.setState({
              isMfaValidating: false,
            });
          }
        );
    }
  };

  verifyPassword = (e: any, password: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (password) {
      const { userName } = this.state;
      this.setState({
        isLoggingIn: true,
      });
      let isExSec = false;
      getBackendSrv()
        .get('/external_security_enable')
        .then((res: any) => {
          isExSec = res;
          localStorage.setItem(`external_security_enable`, isExSec === true ? `true` : `false`);
          if (isExSec) {
            this.setState({
              isExternalSecurityEnable: true,
            });
            notifyApp(createErrorNotification('External security enabled'));
          }
          let data = {};
          if (isExSec) {
            data = {
              user: this.state.user.username,
              password: password,
            };
          } else {
            data = {
              user: userName,
              password: password,
            };
          }
          getBackendSrv()
            .post('/login', data)
            .then((result: any) => {
              this.result = result;
              // if (isExSec === true) {
              //   localStorage.setItem(`userInfo`, JSON.stringify(result.userInfo));
              // } else {
              //   localStorage.setItem(`userInfo`, '');
              // }
              if (result.userInfo) {
                localStorage.setItem(`userInfo`, JSON.stringify(result.userInfo));
              }
              if (password !== 'admin' || config.ldapEnabled || config.authProxyEnabled) {
                this.toGrafana();
                return;
              } else {
                this.changeView();
              }
            })
            .catch(() => {
              notifyApp(createErrorNotification('There is some error. Please try again'));
              this.setState({
                isLoggingIn: false,
              });
            });
        });
    }
  };

  changeView = () => {
    this.setState({
      isChangingPassword: true,
    });
  };

  toGrafana = () => {
    // Use window.location.href to force page reload
    window.location.href = '/';
    // if (this.result.redirectUrl) {
    //   if (config.appSubUrl !== '' && !this.result.redirectUrl.startsWith(config.appSubUrl)) {
    //     window.location.href = config.appSubUrl + this.result.redirectUrl;
    //   } else {
    //     window.location.href = this.result.redirectUrl;
    //   }
    // } else {
    //   window.location.href = config.appSubUrl + '/';
    // }
  };

  render() {
    const { children } = this.props;
    const {
      isLoggingIn,
      isChangingPassword,
      isEmailValidating,
      currentLoginStep,
      isMfaValidating,
      isAuthWithUserName,
      isMfaEnable,
      isMfaAuthenticated,
      isExternalSecurityEnable,
    } = this.state;
    const { login, toGrafana, changePassword, verifyEmail, verifyMfaCode, handleBack, verifyPassword } = this;
    const { loginHint, passwordHint, disableLoginForm, ldapEnabled, authProxyEnabled, disableUserSignUp } = config;

    return (
      <>
        {children({
          isOauthEnabled: isOauthEnabled(),
          loginHint,
          passwordHint,
          disableLoginForm,
          ldapEnabled,
          authProxyEnabled,
          disableUserSignUp,
          login,
          isLoggingIn,
          changePassword,
          skipPasswordChange: toGrafana,
          isChangingPassword,
          isEmailValidating,
          currentLoginStep,
          verifyEmail,
          isMfaValidating,
          verifyMfaCode,
          verifyPassword,
          isAuthWithUserName,
          isMfaEnable,
          isMfaAuthenticated,
          isExternalSecurityEnable,
          handleBack,
        })}
      </>
    );
  }
}

export const mapStateToProps = (state: StoreState) => ({
  routeParams: state.location.routeParams,
});

const mapDispatchToProps = { updateLocation };

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(LoginCtrl));
