import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ServiceModal = props =>
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
                <div style={{color : '#0a7cff'}}>{props.modalinfo.title}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form action="" method="GET" className="contactForm" onSubmit={event => { props.modalinfo.preventMultiSubmit(); props.modalinfo.onSubmit(event)}}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder={props.modalinfo.inputPlaceholder} value={props.modalinfo.inputValue} onChange={props.modalinfo.inputOnChange}/>
                </div>
                <div className="form-group">
                <textarea className="form-control"  rows="3" placeholder={props.modalinfo.textPlaceholder}  value={props.modalinfo.textValue} onChange={props.modalinfo.textOnChange}></textarea>
                </div>
                {props.modalinfo.submitted && <div className="text-center"><button type="submit" style={{backgroundColor : '#0a7cff' , color : '#ffffff', borderRadius : '5px' , border : 'none'}}>{props.modalinfo.buttonText}</button></div>}
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
    )
}

export default React.memo(ServiceModal);