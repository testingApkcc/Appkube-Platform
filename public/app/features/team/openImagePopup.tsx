import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import './inviteUsersPopup/InviteUsersPopup.css';

export class OpenImagePopup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
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
  setImg = (value: any) => {
    this.setState({
      value,
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
  render() {
    const { modal, value } = this.state;
    return (
      <Modal isOpen={modal} toggle={this.toggle} className="modal-container invite-users-modal-container">
        {value && <ModalHeader toggle={this.toggle}>Google Authentication key</ModalHeader>}
        {!value && <ModalHeader toggle={this.toggle}>Google Multifactor Authentication Is Not Enabled</ModalHeader>}
        <ModalBody style={{ overflowY: 'auto', overflowX: 'hidden' }}>
          {value && (
            <div className="form-group">
              <img src={`data:image/png;base64,${value}`} />
            </div>
          )}
        </ModalBody>
      </Modal>
    );
  }
}
