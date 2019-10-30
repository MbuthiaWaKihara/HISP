import React, { Component } from 'react';
import AboutTemplate from './AboutTemplate';
import ErrorModal from './ErrorModal';
import axios from 'axios';

class About extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            mainContent : '',
            mission : '',
            plans : '',
            vision : '',
            newData : {
                newMainContent : '',
                newMission : '',
                newVision : '',
                newPlans : '',
            },
            mainIsEditing : false,
            missionIsEditing: false,
            visionIsEditing: false,
            plansIsEditing: false,
            error: false
        };
    }

    deactivateError = () =>
    {
        this.setState({
            error : false,
        })
    }
    getAllAbouts = () => 
    {
        return axios
        .get('/api/about',{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            response =>{
                this.setState({
                    mainContent : response.data.main_content,
                    mission : response.data.mission,
                    plans : response.data.plans,
                    vision : response.data.vision,
                    missionModalShow : false,
                    visionModalShow : false,
                    plansModalShow : false,
                })
            }
        )
        .catch(
            () => {
                this.setState({
                    error : true,
                })
            }
        )
    }

    componentDidMount = () =>
    {
        this.getAllAbouts()
    }

    /**********ACTIVATORS******/
    activateMainEdit = () =>
    {
        this.setState({
            mainIsEditing : true,
            newData : {
                newMainContent : this.state.mainContent,
            }
        })
    }

    activateMissionEdit = () =>
    {
        this.setState({
            missionIsEditing : true,
            newData : {
                newMission : this.state.mission,
            }
        })
    }

    activateVisionEdit = () =>
    {
        this.setState({
            visionIsEditing : true,
            newData : {
                newVision : this.state.vision,
            }
        })
    }

    activatePlansEdit = () =>
    {
        this.setState({
            plansIsEditing : true,
            newData : {
                newPlans : this.state.plans,
            }
        })
    }
    /**********ACTIVATORS********/
    
    /***********DEACTIVATORS*******/
    deactivateMainEdit = () =>
    {
        this.setState(
            {
                mainIsEditing: false,
            }
        )
    }

    deactivateMissionEdit = () =>
    {
        this.setState({
            missionIsEditing : false,
        })
    }

    deactivateVisionEdit = () =>
    {
        this.setState({
            plansIsEditing : false,
        })
    }

    deactivatePlansEdit = () =>
    {
        this.setState({
            plansIsEditing : false,
        })
    }
    /**********DEACTOVATPRS*********/

    /***************SETTERS****************/
    setMainContent = (event) =>
    {
        this.setState({
            newData : {
                newMainContent : event.target.value,
            }
        })
    }

    setMission = (event) =>
    {
        this.setState({
            newData : {
                newMission : event.target.value,
            }
        })
    }

    setVision = (event) =>
    {
        this.setState({
            newData : {
                newVision : event.target.value,
            }
        })
    }

    setPlans = (event) =>
    {
        this.setState({
            newData : {
                newPlans : event.target.value,
            }
        })
    }
    /********SETTERS************************/

    /**************UPDATERS*****************/
    updateMainContent = (content) =>
    {
        return axios
        .post('api/about/main',{
            mainContent : content,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            response => 
            {
                console.log(response);
            }
        )
        .catch(
            () => {
                this.setState({
                    error : true,
                })
            }
        )
    }

    updateMission = (content) =>
    {
        return axios
        .post('api/about/mission',{
            mission : content,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            response => 
            {
                console.log(response);
            }
        )
        .catch(
            () => {
                this.setState({
                    error : true,
                })
            }
        )
    }

    updateVision = (content) =>
    {
        return axios
        .post('api/about/vision',{
            vision : content,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            response => 
            {
                console.log(response);
            }
        )
        .catch(
            () => {
                this.setState({
                    error : true,
                })
            }
        )
    }

    updatePlans = (content) =>
    {
        return axios
        .post('api/about/plans',{
            plans : content,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            response => 
            {
                console.log(response);
            }
        )
        .catch(
            () => {
                this.setState({
                    error : true,
                })
            }
        )
    }

    /*******************UPDATERS*************************/
    handleMainUpdate = () =>
    {
        this.updateMainContent(this.state.newData.newMainContent)
        .then(
            () =>
            {   
                this.getAllAbouts();
                this.setState({
                    mainIsEditing : false
                });
            }
        )
    }
    handleMissionUpdate = () =>
    {
        this.updateMission(this.state.newData.newMission)
        .then(
            () =>{
                this.getAllAbouts();
                this.setState({
                    missionIsEditing: false,
                })
            }
        )
        .catch(
            () => {
                this.setState({
                    error : true,
                })
            }
        )
        
    }

     handleVisionUpdate = () =>
    {
        this.updateVision(this.state.newData.newVision)
        .then(
            () =>{
                this.getAllAbouts();
                this.setState({
                    visionIsEditing: false,
                })
            }
        );
    }

    handlePlansUpdate = () =>
    {
        this.updatePlans(this.state.newData.newPlans)
        .then(
            () =>{
                this.getAllAbouts();
                this.setState({
                    plansIsEditing: false,
                })
            }
        );
        
    }

    render()
    { 
        const { mainIsEditing, mainContent, mission, plans, vision, newData, missionIsEditing, visionIsEditing, plansIsEditing } = this.state;
        return(
            <section id="about">
                <div className="container">
                    <header className="section-header">
                        <h3>About Us</h3>
                        {
                            mainIsEditing ? 
                            <>
                            <textarea 
                            style={{width : '100%', border : 'none', backgroundColor : 'rgba(242, 252, 252, .1)'}}
                            rows="7"
                            value={newData.newMainContent}
                            onChange={this.setMainContent}>
                            </textarea><br/><button className="btn btn-primary" onClick={this.handleMainUpdate}>Done</button><br/><br/></> :
                        <p className="edit-about" onDoubleClick={this.activateMainEdit}>
                        {mainContent}
                        </p>
                        }
                    </header>
                    <div className="row about-cols">
                        <AboutTemplate 
                        title="Our Mission"
                        imgsrc="img/about-mission.jpg"
                        icon="ion-ios-speedometer-outline"
                        content={mission}
                        activator={this.activateMissionEdit}
                        isEditing={missionIsEditing}
                        editValue={newData.newMission}
                        editChange={this.setMission}
                        handler={this.handleMissionUpdate}
                        show={this.state.error}
                        onHide={this.deactivateError}
                        />

                        <AboutTemplate 
                        title="Our Vision"
                        delay="0.1s"
                        imgsrc="img/about-vision.jpg"
                        icon="ion-ios-eye-outline"
                        content={vision}
                        activator={this.activateVisionEdit}
                        isEditing={visionIsEditing}
                        editValue={newData.newVision}
                        editChange={this.setVision}
                        handler={this.handleVisionUpdate}
                        show={this.state.error}
                        onHide={this.deactivateError}
                        />

                        <AboutTemplate 
                        title="Our Plans"
                        delay="0.2s"
                        imgsrc="img/about-plan.jpg"                             
                        icon="ion-ios-list-outline"
                        content={plans}
                        activator={this.activatePlansEdit}
                        isEditing={plansIsEditing}
                        editValue={newData.newPlans}
                        editChange={this.setPlans}
                        handler={this.handlePlansUpdate}
                        show={this.state.error}
                        onHide={this.deactivateError}
                        />
                    </div>
                </div>
                <ErrorModal 
                show={this.state.error}
                onHide={this.deactivateError}
                />
            </section>
        )
    }
}

export default About;