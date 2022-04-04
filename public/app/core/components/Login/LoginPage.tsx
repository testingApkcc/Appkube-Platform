// Libraries
import React from 'react';
import { css } from '@emotion/css';
// Components
import { UserSignup } from './UserSignup';
import { LoginServiceButtons } from './LoginServiceButtons';
import LoginCtrl from './LoginCtrl';
import { LoginForm } from './LoginForm';
import { ChangePassword } from '../ForgottenPassword/ChangePassword';
import { Branding } from 'app/core/components/Branding/Branding';
import { HorizontalGroup, LinkButton } from '@grafana/ui';
import { LoginLayout, InnerBox } from './LoginLayout';

const forgottenPasswordStyles = css`
  padding: 0;
  margin-top: 4px;
`;

interface Props {
  loginHint: any;
  passwordHint: any;
  ldapEnabled: any;
  authProxyEnabled: any;
  disableLoginForm: any;
  isChangingPassword: any;
  disableUserSignUp: any;
  login: any;
  isLoggingIn: any;
  changePassword: any;
  skipPasswordChange: any;
  isEmailValidating: any;
  currentLoginStep: any;
  verifyEmail: any;
  verifyMfaCode: any;
  isMfaValidating: any;
  verifyPassword: any;
  isAuthWithUserName: any;
  isMfaEnable: any;
  isMfaAuthenticated: any;
  isExternalSecurityEnable: any;
}

export const LoginPage: any = (props: Props) => {
  document.title = Branding.AppTitle;
  return (
    <LoginLayout>
      <LoginCtrl>
        {(props: any) => (
          <>
            {!props.isChangingPassword && (
              <InnerBox>
                {!props.disableLoginForm && (
                  <>
                    <LoginForm
                      onSubmit={props.login}
                      loginHint={props.loginHint}
                      passwordHint={props.passwordHint}
                      isLoggingIn={props.isLoggingIn}
                      isEmailValidating={props.isEmailValidating}
                      currentLoginStep={props.currentLoginStep}
                      verifyEmail={props.verifyEmail}
                      verifyMfaCode={props.verifyMfaCode}
                      isMfaValidating={props.isMfaValidating}
                      verifyPassword={props.verifyPassword}
                      isAuthWithUserName={props.isAuthWithUserName}
                      isMfaEnable={props.isMfaEnable}
                      isMfaAuthenticated={props.isMfaAuthenticated}
                      isExternalSecurityEnable={props.isExternalSecurityEnable}
                      handleBack={props.handleBack}
                    >
                      {!(props.ldapEnabled || props.authProxyEnabled) ? (
                        <HorizontalGroup justify="flex-end">
                          <LinkButton
                            className={forgottenPasswordStyles}
                            variant="link"
                            href="/user/password/send-reset-email"
                          >
                            Forgot your password?
                          </LinkButton>
                        </HorizontalGroup>
                      ) : (
                        <></>
                      )}
                    </LoginForm>
                  </>
                )}
                <LoginServiceButtons />
                {!props.disableUserSignUp && <UserSignup />}
              </InnerBox>
            )}
            {props.isChangingPassword && (
              <InnerBox>
                <ChangePassword onSubmit={props.changePassword} onSkip={() => props.skipPasswordChange()} />
              </InnerBox>
            )}
          </>
        )}
      </LoginCtrl>
    </LoginLayout>
  );
};
