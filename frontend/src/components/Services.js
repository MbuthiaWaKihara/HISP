import React, { Component } from 'react';
import SingleService from './SingleService';
import ServicesModal from './ServicesModal';
import ErrorModal from './ErrorModal';
import axios from 'axios';

class Services extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            services : [],
            addServiceShow : false,
            editServiceShow : false,
            editingItem: 'none',
            newServiceInput : '',
            newServiceText : '',
            formCommands : 0,
            error : false,
        }
    }

    deactivateError = () =>
    {
        this.setState({
            error : false,
        })
    }

    getAllServices = () =>
    {
        return axios
        .get('/api/services',{
            header : {
                'Content-type' : 'application/json'
            }
        })
        .then(
            response =>
            {
                this.setState({
                    services : [...response.data]
                })
            }
        )
        .catch(
            () => 
            {
                this.setState({
                    error : true,
                })
            }
        )
    }

    deleteService = id =>
    {
        return axios
        .post('/api/services/delete',{
            id : id
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () =>
            {
                this.getAllServices();
            }
        )
        .catch(
            () => 
            {
                this.setState({
                    error : true,
                })
            }
        )
    }

    addService = (title, body) =>
    {
        return axios
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
                this.getAllServices();
            }
        )
        .catch(
            () => 
            {
                this.setState({
                    error : true,
                })
            }
        )
    }

    updateService = (id, title, body) =>
    {
        return axios
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
                this.getAllServices();
            }
        )
        .catch(
            () => 
            {
                this.setState({
                    error : true,
                })
            }
        )
    }

    componentDidMount = () =>
    {
        this.getAllServices();
    }

    hideNewServiceModal = () =>
    {
        this.setState({
            addServiceShow : false,
        })
    }

    hideEditService = () =>
    {
        this.setState({
            editServiceShow : false,
        })
    }

    changeInputValue = (event) =>
    {
        this.setState({
            newServiceInput :  event.target.value, 
        })
    }

    changeTextValue = (event) =>
    {
        this.setState({
            newServiceText :  event.target.value,
        })
    }

    activateNewService = () =>
    {
        this.setState({
            addServiceShow : true,
        })
    }

    activateEditService = () =>
    {
        this.setState({
            editServiceShow : true,
        })
    }

    handleNewService = event =>
    {
        event.preventDefault();
        this.setState(
            previousState => {
                return({
                    formCommands : previousState.formCommands + 1,
                })
            }
        )
        if(this.state.formCommands === 1){
            this.addService(this.state.newServiceInput, this.state.newServiceText)
            .then(
                () =>
                {
                    this.setState({
                        addServiceShow : false,
                        formCommands : 0,
                    });
                }
            )
            .catch(
                () => 
                {
                    this.setState({
                        error : true,
                    })
                }
            )
            }
    }

    getEditingItem = id =>
    {
        this.setState({
            editingItem : id,
        })
    }

    handleEditService = (event) =>
    {
        event.preventDefault();
        this.updateService(this.state.editingItem,this.state.newServiceInput, this.state.newServiceText)
        .then(
            () =>
            {
                this.setState({
                    editServiceShow : false,
                })
            }
        )
        .catch(
            () => 
            {
                this.setState({
                    error : true,
                })
            }
        )
    }
    render()
    {
        const{ services, addServiceShow, newServiceInput, newServiceText, editServiceShow } = this.state;
        let formatedServices = services.map( service => <SingleService
                                                        getEditingItem={this.getEditingItem}
                                                         activate={this.activateEditService}
                                                         service={service} key={service.id} 
                                                         deleteService={this.deleteService}
                                                         show={editServiceShow}
                                                         onHide={this.hideEditService}
                                                         inputValue={newServiceInput}
                                                         changeInputValue={this.changeInputValue}
                                                         textValue={newServiceText}
                                                         changeTextValue={this.changeTextValue}
                                                         handleSubmit={this.handleEditService}
                                                         modaltitle="Edit Service"
                                                         textplaceholder="Change Body"
                                                         inputplaceholder="Change Title"
                                                         buttonText="Change"
                                                         showerror={this.state.error}
                                                         onHideError={this.deactivateError}
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
                <div className="add-service"><button className="btn btn-primary" onClick={this.activateNewService}>Add</button></div>
                <ServicesModal 
                show={addServiceShow}
                onHide={this.hideNewServiceModal}
                inputValue={newServiceInput}
                changeInputValue={this.changeInputValue}
                textValue={newServiceText}
                changeTextValue={this.changeTextValue}
                handleSubmit={this.handleNewService}
                modaltitle="Add A New Service"
                inputplaceholder="Title Of Service Here"
                textplaceholder="Body of Service Here"
                buttonText="Add Service"
                />
                <ErrorModal
                show={this.state.error}
                onHide={this.deactivateError}
                />
            </section>
        )
    }
}

export default Services;