import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ServicesModal extends Component{
   
    render()
    {
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <div style={{color : '#0a7cff'}}>{this.props.modaltitle}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form action="" method="GET" className="contactForm" onSubmit={this.props.handleSubmit}>
                <div class="form-group">
                  <input type="text" class="form-control"  placeholder={this.props.inputplaceholder}
                    data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                  <div class="validation"></div>
                </div>
                <div className="form-group">
                <textarea className="form-control"  rows="5" data-rule="required"
                    data-msg="Please write something for us" placeholder={this.props.textplaceholder} value={this.props.textValue} onChange={this.props.changeTextValue}></textarea>
                <div className="validation"></div>
                </div>
                <div className="text-center"><button type="submit" title="change content" style={{backgroundColor : '#0a7cff' , color : '#ffffff', borderRadius : '5px' , border : 'none'}}>{this.props.buttonText}</button></div>
            </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        )
    }
}

export default ServicesModal;