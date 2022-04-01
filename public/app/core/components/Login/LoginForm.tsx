import React, { FC, ReactElement, useState } from 'react';
import { selectors } from '@grafana/e2e-selectors';
import { FormModel, LoginSteps } from './LoginCtrl';
import { Button, Input, Field, LinkButton } from '@grafana/ui';
import { css } from '@emotion/css';

interface Props {
  children: ReactElement;
  onSubmit: (data: FormModel) => void;
  isLoggingIn: boolean;
  passwordHint: string;
  loginHint: string;
  isEmailValidating: boolean;
  currentLoginStep: any;
  verifyEmail: (e: any, email: any) => void;
  verifyMfaCode: (e: any, mfaCode: any) => void;
  isMfaValidating: boolean;
  verifyPassword: (e: any, password: any) => void;
  isAuthWithUserName: boolean;
  isMfaEnable: boolean;
  isMfaAuthenticated: boolean;
  isExternalSecurityEnable: boolean;
}

const wrapperStyles = css`
  width: 100%;
  padding-bottom: 16px;
`;
export const submitButton = css`
  justify-content: center;
  width: 100%;
`;
// let validated = false;
var userName: any;
// let showMfa = true;
const validateMfa = async () => {
  let documentUserName: any = document.getElementById('userName');
  userName = documentUserName.value;
  console.log('username=', userName);
  let documentMfaCode: any = document.getElementById('mfaCode');
  let mfaCode = documentMfaCode.value;
  const data = new FormData();
  data.append('userName', userName);
  data.append('secretKey', '2N4VAPDCX3COKCSVFXGAKKHSFFHP23KB');
  data.append('mfaCode', mfaCode);
  let res: any;
  await fetch('http://localhost:7011/authenticateMfaToken', {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((response) => {
      res = response;
    });
  console.log('res: ', res);
  if (res === 200) {
    let documentLoginForm: any = document.getElementById('loginForm');
    documentLoginForm.style.display = 'block';
    let documentMfaForm: any = document.getElementById('mfaForm');
    documentMfaForm.style.display = 'none';
    let user: any = document.getElementById('user');
    user.value = userName;
  } else {
    let documentErrorMsg: any = document.getElementById('errorMsg');
    documentErrorMsg.innerText = 'Invalid MFA Code';
  }
};
export const LoginForm: FC<Props> = ({
  children,
  onSubmit,
  isLoggingIn,
  passwordHint,
  loginHint,
  currentLoginStep,
  isEmailValidating,
  verifyEmail,
  verifyMfaCode,
  isMfaValidating,
  verifyPassword,
  isAuthWithUserName,
  isMfaEnable,
  isMfaAuthenticated,
  isExternalSecurityEnable,
}) => {
  const [email, setEmail] = useState('');
  const [mfaCode, setMFACode] = useState('');
  const [password, setPassword] = useState('');
  const [errorObj, setErrorObj] = useState({
    email: '',
    mfa: '',
    password: '',
  });

  const onClickNextButton = (e: any) => {
    if (currentLoginStep === LoginSteps.LOGIN) {
      if (email && email.trim()) {
        verifyEmail(e, email);
      } else {
        errorObj.email = 'Please enter email';
        setErrorObj(JSON.parse(JSON.stringify(errorObj)));
      }
    } else if (currentLoginStep === LoginSteps.MFA_VALIDATION) {
      if (mfaCode && mfaCode.trim()) {
        verifyMfaCode(e, mfaCode);
      } else {
        errorObj.mfa = 'Please enter mfa code';
        setErrorObj(JSON.parse(JSON.stringify(errorObj)));
      }
    } else if (currentLoginStep === LoginSteps.PASSWORD) {
      if (password && password.trim()) {
        verifyPassword(e, password);
      } else {
        errorObj.mfa = 'Please enter password';
        setErrorObj(JSON.parse(JSON.stringify(errorObj)));
      }
    }
  };

  const onChangeUserName = (e: any) => {
    const { value } = e.target;
    setEmail(value);
    if (value && value.trim()) {
      errorObj.email = '';
      setErrorObj(JSON.parse(JSON.stringify(errorObj)));
    }
  };

  const onChangeMfa = (e: any) => {
    const { value } = e.target;
    setMFACode(value);
    if (value && value.trim()) {
      errorObj.mfa = '';
      setErrorObj(JSON.parse(JSON.stringify(errorObj)));
    }
  };

  const onChangePassword = (e: any) => {
    const { value } = e.target;
    setPassword(value);
    if (value && value.trim()) {
      errorObj.password = '';
      setErrorObj(JSON.parse(JSON.stringify(errorObj)));
    }
  };

  const renderLoginStep = () => {
    return (
      <div
        style={{
          display: currentLoginStep === LoginSteps.LOGIN ? 'block' : 'none',
        }}
      >
        <Field label="E-mail Address">
          <Input autoFocus name="user" placeholder={loginHint} value={email} onChange={onChangeUserName} id="user" />
        </Field>
        {errorObj['email'] && <div className="error">{errorObj['email']}</div>}
        <Button
          type="button"
          aria-label={selectors.pages.Login.submit}
          className={submitButton}
          disabled={isEmailValidating}
          onClick={(e) => onClickNextButton(e)}
        >
          {isLoggingIn ? 'Validating email...' : 'Next'}
        </Button>
      </div>
    );
  };

  const renderMfaStep = () => {
    return (
      <div
        style={{
          display: currentLoginStep === LoginSteps.MFA_VALIDATION ? 'block' : 'none',
        }}
      >
        <div className="email-text">{email}</div>
        <Field label="MFA Code">
          <Input autoFocus name="mfaCode" placeholder="OTP" value={mfaCode} onChange={onChangeMfa} id="mfaCode" />
        </Field>
        {errorObj['mfa'] && <div className="error">{errorObj['mfa']}</div>}
        <Button
          type="button"
          aria-label={selectors.pages.Login.submit}
          className={submitButton}
          disabled={isEmailValidating}
          onClick={(e) => onClickNextButton(e)}
        >
          {isMfaValidating ? 'Validating code...' : 'Next'}
        </Button>
        <LinkButton
          variant="link"
          href="/login"
          style={{
            padding: '0 15px',
            marginTop: '0px',
            marginLeft: '10px',
            height: '40px',
            lineHeight: '40px',
          }}
        >
          Back
        </LinkButton>
      </div>
    );
  };

  const renderPasswordStep = () => {
    return (
      <div
        style={{
          display: currentLoginStep === LoginSteps.PASSWORD ? 'block' : 'none',
        }}
      >
        <div className="email-text">{email}</div>
        <Field label="Password">
          <Input
            name="password"
            type="password"
            placeholder={passwordHint}
            value={password}
            onChange={onChangePassword}
          />
        </Field>
        {errorObj['password'] && <div className="error">{errorObj['password']}</div>}
        <Button className={submitButton} disabled={isLoggingIn} onClick={(e) => onClickNextButton(e)}>
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </Button>
        <LinkButton
          variant="link"
          href="/login"
          style={{
            padding: '0 15px',
            marginTop: '0px',
            marginLeft: '10px',
            height: '40px',
            lineHeight: '40px',
          }}
        >
          Back
        </LinkButton>
      </div>
    );
  };

  const handleSubmit = (e: any) => {
    const data: FormModel = {
      user: '',
      password,
      email,
      mfaCode,
    };
    onSubmit(data);
    return true;
  };

  return (
    <div className={wrapperStyles}>
      <div id="loginForm">
        <form onSubmit={handleSubmit}>
          <>
            {renderLoginStep()}
            {renderMfaStep()}
            {renderPasswordStep()}
            {children}
          </>
        </form>
      </div>
      <form name="mfaForm" id="mfaForm" style={{ display: `none` }}>
        <div className="css-1w4npsm">
          <h4 id="errorMsg" style={{ color: `red` }}></h4>
        </div>
        <input type="text" className="css-1bjepp-input-input" name="userName" id="userName" placeholder="Username" />
        <input type="text" className="css-1bjepp-input-input" name="mfaCode" id="mfaCode" placeholder="Mfa Code" />
        <input
          type="button"
          onClick={validateMfa}
          className="css-6ntnx5-button"
          style={{ background: `#003087`, color: `#fff` }}
          value="Validate"
        />
      </form>
    </div>
  );
};
