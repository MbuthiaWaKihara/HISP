import React from 'react';
import ServiceModal from './ServiceModal';

const SingleService = props =>
{
    const { service, deleteService, modalinfo, currentId, index } = props;
    let offset;
    if(index === 0 || index % 2 === 0){
        offset = 'offset-lg-1';
    }else{
        offset = '';
    }
    return(
        <div className={`col-md-6 col-lg-5 ${offset} wow bounceInUp`} data-wow-duration="1.4s">
                <div className="box">
                    <div><i className="fa fa-edit" onClick={() => { modalinfo.activate(); currentId(service.id)} }></i></div>
                    <div><i className="fa fa-trash" onClick={() => { deleteService(service.id)} }></i></div>
                    <h4 className="title"><a href="index.html">{service.title}</a></h4>
                    <p className="description">
                    {service.body}</p>
                    <ServiceModal 
                        show={modalinfo.show}
                        onHide={modalinfo.onHide}
                        modalinfo={modalinfo}
                    />
                </div>
            </div>
    )
}

export default React.memo(SingleService);