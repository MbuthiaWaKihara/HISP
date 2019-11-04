import React, { useState, useEffect } from 'react';
import SingleService from './SingleService';
import ServiceModal from './ServiceModal';
import axios from 'axios';

const Services = () =>
{
    //state variable that holds all the service items from the server:
    const [services, setServices] = useState([]);

    //state variable that holds the value of new/edited service:
    const [service, setService] = useState({ input: '', text: '', id: null});

    //state variable to determine visibility of modals:
    const [modal, setModal] = useState({ add: false, edit: false, submit: true,});

    //state variable that monitors a change to services section:
    const [toggleEdited, setToggleEdited] = useState(false);

    //fetch all the services from the server:
    useEffect(
        () => {
         axios
        .get('/api/services',{
            header : {
                'Content-type' : 'application/json'
            }
        })
        .then(
            response =>
            {
                // console.log(response);
                setServices(response.data);
            }
        )
        .catch(
            error => 
            {
                console.log(error);
            }
        )
        }, [toggleEdited]
    );

    //callback to delete a service:
    const deleteService = id =>
    {
         axios
        .post('/api/services/delete',{
            id : id
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            response =>
            {   
                // console.log(response);
                setToggleEdited(!toggleEdited);
            }
        )
        .catch(
            error => 
            {
              console.log(error)
            }
        )
    }

    //callback to update a service:
    const updateService = event =>
    {
         setModal({...modal, submit: false,});
         let id = service.id;
         let title = service.input;
         let body = service.text;
         event.preventDefault();
         axios
        .post('/api/services/edit',{
            id : id,
            title : title,
            body : body,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () =>
            {
                // console.log(response);
                setToggleEdited(!toggleEdited);
                setModal({...modal, edit: false,});
                setService({...service, input: '', text: '',})
            }
        )
        .catch(
           error =>
           {
               console.log(error);
           }
        )
    }
 
    //callback to add a service:
    const addService = event =>
    {   
         setModal({...modal, submit: false,});
         let title = service.input;
         let body = service.text;
         event.preventDefault();
         axios
        .post('/api/services/new',{
            title : title,
            body : body,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () =>
            {
                // console.log(response);
                setToggleEdited(!toggleEdited);
                setModal({...modal, add: false,});
                setService({...service,input: '', text: '',})
            }
        )
        .catch(
            error => 
            {
                console.log(error);
            }
        )
    }

    let add_modalInfo = {
        title: 'Add New Service',
        inputPlaceholder: 'Title of Service Here',
        textPlaceholder: 'Body of Service Here',
        buttonText: 'Add',
        inputValue: service.input,
        textValue: service.text,
        inputOnChange: event => { setService({...service, input: event.target.value})},
        textOnChange: event => { setService({...service, text: event.target.value})},      
        onSubmit: addService,
        submitted: modal.submit,
        preventMultiSubmit: () => setModal({...modal, submit: false,}),
    };

    let edit_modalInfo = {
        show: modal.edit,
        onHide: () => setModal({...modal, edit: false,}),
        activate: () => setModal({...modal, edit: true}),
        title: 'Edit Service',
        inputPlaceholder: 'Title of Service Here',
        textPlaceholder: 'Body of Service Here',
        buttonText: 'Change',
        inputValue: service.input,
        textValue: service.text,
        inputOnChange: event => setService({...service, input: event.target.value}),
        textOnChange: event => setService({...service, text: event.target.value}),
        onSubmit: updateService,
        submitted: modal.submit,
        preventMultiSubmit: () => setModal({...modal, submit: false,}),
    };

    //add jsx to the incoming services data:
    let formatedServices = services.map( (service, index) => <SingleService
         service={service}
         index={index} 
         key={service.id}
         deleteService={deleteService}
         modalinfo={edit_modalInfo}
         currentId={id => { setService({...service, id: id}) }}
         />);

    return(
        <section id="services" className="section-bg">
                <header className="section-header">
                    <h3>Services</h3>
                    <p><strong>HISP KE offers the following services.</strong></p>
                </header>
                <div className="row">
                    {formatedServices}
                </div>
                <div className="add-service"><button className="btn btn-primary" onClick={() => { setModal({...modal, add: true,}) }}>Add</button></div>
                <ServiceModal 
                show={modal.add}
                onHide={() => { setModal({...modal, add: false,})}}
                modalinfo={add_modalInfo}
                />
            </section>
    )
}

export default React.memo(Services);