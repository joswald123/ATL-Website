import AuthForm, { STATE_LOGIN } from '../components/AuthForm';
import Page from '../components/Page';
import React from 'react';
import { Link } from 'react-router-dom';
import TeamPic from '../assets/img/sidebar/sidebar-14.jpg'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  Row,
  CardImg,
} from 'reactstrap';

class AuthModalPage extends React.Component {

    state = {
      show: false,
      authState: STATE_LOGIN,
    };
  
  
  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleAuthState = authState => {
    this.setState({
      authState,
    });
  };

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          fontSize: '3rem',
        }}
        onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <Page
        title="Admin Login"
        breadcrumbs={[{ name: 'Admin login', active: true }]}>
        <Row>
          <Col md="6" sm="12" xs="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardImg src={TeamPic} width="100%"/>
              <CardHeader>If You are an Admin user, please click the button to log-in, otherwise click the button Home to go back to the dashboard page</CardHeader>
              <CardBody className="d-flex justify-content-between">
                <Button color="danger" onClick={this.toggle}>
                  Click to Login
                </Button>
                <Button color="secondary"><Link to="/">Home</Link></Button>
                <Modal
                  isOpen={this.state.show}
                  toggle={this.toggle}
                  size="sm"
                  backdrop="static"
                  backdropClassName="modal-backdrop-light"
                  external={externalCloseBtn}
                  centered>
                  <ModalBody>
                    <AuthForm
                      authState={this.state.authState}
                      onChangeAuthState={this.handleAuthState}
                    />
                  </ModalBody>
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default AuthModalPage;
