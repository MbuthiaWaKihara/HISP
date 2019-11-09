import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LoginModal = props =>
{
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <div>Admin Login</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form action="" method="GET" className="contactForm" onSubmit={event => {props.onSubmit(event, props.credentials)}}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email Address" name="email" value={props.credentials.email} onChange={event => {props.changecredentials(event)}}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" name="password" value={props.credentials.password} onChange={event => {props.changecredentials(event)}}/>
                </div>
                <div><button className="btn btn-primary">Login</button></div>
            </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
    )
}

export default React.memo(LoginModal);