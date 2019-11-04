import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PortfolioModal = props =>
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
            <form action="" method="GET" className="contactForm" onSubmit={event => { props.modalinfo.preventMultiSubmit(); props.modalinfo.onSubmit(event) }}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Title Here..." value={props.modalinfo.titleValue} onChange={props.modalinfo.changeTitleValue}/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Link Here..." value={props.modalinfo.linkValue} onChange={props.modalinfo.changeLinkValue}/>
                </div>
                <div className="form-group">
                    <select value={props.modalinfo.typeValue} onChange={props.modalinfo.changeTypeValue}>
                        <option value="web">Website</option>
                        <option value="app">Application</option>
                    </select>
                </div>
                {props.modalinfo.submitted && <div className="text-center"><button type="submit" title="change content" style={{backgroundColor : '#0a7cff' , color : '#ffffff', borderRadius : '5px' , border : 'none'}}>{props.modalinfo.buttonText}</button></div>}
            </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
    )
}

export default React.memo(PortfolioModal);