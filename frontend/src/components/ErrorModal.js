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
            <div><p style={{color : '#190dff', fontWeight : 'bolder'}}>Whoops! Something isn't right...</p></div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div><p style={{color : '#190dff', fontWeight : 'bolder'}}>There was a problem loading {props.name}</p></div>
            <p style={{color : '#ff0d0d', fontWeight : 'bolder'}}>
                Message: {props.message}
            </p>
            <div><p style={{color : '#190dff', fontWeight : 'bolder'}}>Refresh your page and try again.</p></div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal;