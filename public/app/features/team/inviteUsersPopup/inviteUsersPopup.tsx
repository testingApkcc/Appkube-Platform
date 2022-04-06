import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './InviteUsersPopup.css';
import { config } from '../../config';
import appEvents from 'app/core/app_events';
import { AppEvents } from '@grafana/data';

export class InviteUsersPopup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      link: '',
      requiData: {
        email: '',
        role: '',
      },
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  setLink = (link: any) => {
    this.setState({
      link,
    });
  };

  handleStateChange = (e: any) => {
    const { name, value } = e.target;
    const { requiData } = this.state;
    requiData[name] = value;
    this.setState({
      requiData,
    });
  };

  handleClickMethod = async (event: any) => {
    const { requiData } = this.state;
    event.preventDefault();
    this.setState({
      isSubmitted: true,
    });
    const errorData = this.validate(true);
    if (errorData.isValid) {
      var obj = localStorage.getItem('userInfo');
      var userInfo;
      if (obj) {
        userInfo = JSON.parse(obj);
      } else {
        console.log('User not logged in');
        return;
      }

      var formdata = new FormData();
      formdata.append('username', userInfo.info.user.username);
      formdata.append('inviteeEmail', requiData.email);

      await fetch(config.INVITE_USER, {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.code !== 417) {
            appEvents.emit(AppEvents.alertSuccess, ['User invited', result.message]);
          } else {
            appEvents.emit(AppEvents.alertError, ['User invite failed', result.message]);
          }
        })
        .catch((error) => {
          console.log('User invite failed. Error', error);
          appEvents.emit(AppEvents.alertError, ['User invite failed', '']);
        });
    }
    if (this.props.updateList) {
      this.props.updateList();
    }
    this.setState({
      modal: !this.state.modal,
      isSubmitted: false,
      requiData: {
        email: '',
      },
    });
  };

  validate = (isSubmitted: any) => {
    const validObj = {
      isValid: true,
      message: '',
    };
    let isValid = true;
    const retData = {
      email: validObj,
      role: validObj,
      isValid,
    };
    if (isSubmitted) {
      const { requiData } = this.state;
      if (!requiData.email) {
        retData.email = {
          isValid: false,
          message: 'Email is required',
        };
        isValid = false;
      } else if (requiData.email && !this.validateEmail(requiData.email)) {
        retData.email = {
          isValid: false,
          message: 'Enter valid email',
        };
        isValid = false;
      }
      // if (!requiData.role) {
      //   retData.role = {
      //     isValid: false,
      //     message: 'Role is required',
      //   };
      //   isValid = false;
      // }
    }
    retData.isValid = isValid;
    return retData;
  };
  validateEmail(email: any) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { requiData, isSubmitted, modal } = this.state;
    const errorData = this.validate(isSubmitted);
    return (
      <Modal isOpen={modal} toggle={this.toggle} className="modal-container invite-users-modal-container">
        <ModalHeader>
          Invite Users
          <button type="button" className="close" aria-label="Close" onClick={this.toggle}>
            <span aria-hidden="true">×</span>
          </button>
        </ModalHeader>
        <ModalBody style={{ overflowY: 'auto', overflowX: 'hidden' }}>
          <p>Invite link will be sent to new member on below email</p>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="email"
              value={requiData.email}
              onChange={this.handleStateChange}
            />
            <span className="error">{errorData.email.message}</span>
          </div>
          {/* <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="role"
              onChange={this.handleStateChange}
              value={requiData.role}
            />
            <span className="error">{errorData.role.message}</span>
          </div> */}
        </ModalBody>
        <ModalFooter>
          <div className="d-block text-center">
            <button className="team-blue-button m-b-0 m-r-0" onClick={this.handleClickMethod}>
              {isSubmitted ? 'Sending invite....' : 'Send Invite'}
            </button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}
