import React, { Component } from 'react';
import ServicesModal from './ServicesModal';
import ErrorModal from './ErrorModal';

class SingleService extends Component{
    render()
    {
        const { getEditingItem, service, deleteService, activate, show, onHide, inputValue, changeInputValue, textValue, changeTextValue, handleSubmit, modaltitle, textplaceholder, inputplaceholder, buttonText, showerror, onHideError } = this.props;
        return (
            <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                    <div><i className="fa fa-edit" onClick={()=>{activate(); getEditingItem(service.id);}}></i></div>
                    <div><i className="fa fa-trash" onClick={()=>{deleteService(service.id)}}></i></div>
                    <h4 className="title"><a href="index.html">{service.title}</a></h4>
                    <p className="description">
                    <ServicesModal 
                    show={show}
                    onHide={onHide}
                    inputValue={inputValue}
                    changeInputValue={changeInputValue}
                    textValue={textValue}
                    changeTextValue={changeTextValue}
                    handleSubmit={handleSubmit}
                    modaltitle={modaltitle}
                    inputplaceholder={inputplaceholder}
                    textplaceholder={textplaceholder}
                    buttonText={buttonText}
                    id={service.id}
                />
                    {service.body}</p>
                </div>
                <ErrorModal
                show={showerror}
                onHide={onHideError}
                />
            </div>
        )
    }
}

export default SingleService;