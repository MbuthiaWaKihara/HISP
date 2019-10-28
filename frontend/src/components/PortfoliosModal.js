import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class PortfoliosModal extends Component{
   
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
                  <input type="text" className="form-control"  placeholder={this.props.titleplaceholder}
                    data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={this.props.titleValue} onChange={this.props.changeTitleValue}/>
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control"  placeholder={this.props.linkplaceholder}
                    data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={this.props.linkValue} onChange={this.props.changeLinkValue}/>
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                    <select value={this.props.typeValue} onChange={this.props.changeTypeValue}>
                        <option value="web">Website</option>
                        <option value="app">Application</option>
                    </select>
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

export default PortfoliosModal;