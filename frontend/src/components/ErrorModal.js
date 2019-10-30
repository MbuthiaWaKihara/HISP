import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const ErrorModal = (props) =>
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
            <div><p style={{color : '#190dff', fontWeight : 'bolder'}}>Ooops!</p></div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p style={{color : '#ff0d0d', fontWeight : 'bolder'}}>
            Something went wrong. Could you try that again?
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal;