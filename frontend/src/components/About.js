import React, { Component } from 'react';
import AboutTemplate from './AboutTemplate';
import axios from 'axios';
import AboutModal from './AboutModal';

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
            mainHover : true,
            aboutModalShow : false,
            missionModalShow : false,
            visionModalShow : false,
            plansModalShow : false,
        };
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
                    mainHover : true,
                    aboutModalShow : false,
                    missionModalShow : false,
                    visionModalShow : false,
                    plansModalShow : false,
                })
            }
        );
    }

    componentDidMount = () =>
    {
        this.getAllAbouts()
    }

    /**********ACTIVATORS******/
    activateMainShow = () =>
    {
        this.setState({
            aboutModalShow : true,
        })
    }

    activateMissionShow = () =>
    {
        this.setState({
            missionModalShow : true,
        })
    }

    activateVisionShow = () =>
    {
        this.setState({
            visionModalShow : true,
        })
    }

    activatePlansShow = () =>
    {
        this.setState({
            plansModalShow : true,
        })
    }
    /**********ACTIVATORS********/
    
    /***********DEACTIVATORS*******/
    hideAboutModal = () =>
    {
        this.setState(
            {
                aboutModalShow: false,
            }
        )
    }

    hideMissionModal = () =>
    {
        this.setState({
            missionModalShow : false,
        })
    }

    hideVisionModal = () =>
    {
        this.setState({
            visionModalShow : false,
        })
    }

    hidePlansModal = () =>
    {
        this.setState({
            plansModalShow : false,
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
            error =>
            {
                console.log(error);
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
            error =>
            {
                console.log(error);
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
            error =>
            {
                console.log(error);
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
            error =>
            {
                console.log(error);
            }
        )
    }

    /*******************UPDATERS*************************/

    handleAboutMainUpdate = (event) =>
    {
        event.preventDefault();
        this.updateMainContent(this.state.newData.newMainContent)
        .then(
            () =>{
                this.getAllAbouts();
                this.setState({
                    aboutModalShow: false,
                })
            }
        );
        
    }

    handleMissionUpdate = (event) =>
    {
        event.preventDefault();
        this.updateMission(this.state.newData.newMission)
        .then(
            () =>{
                this.getAllAbouts();
                this.setState({
                    missionModalShow: false,
                })
            }
        );
        
    }

     handleVisionUpdate = (event) =>
    {
        event.preventDefault();
        this.updateVision(this.state.newData.newVision)
        .then(
            () =>{
                this.getAllAbouts();
                this.setState({
                    visionModalShow: false,
                })
            }
        );
        
    }

    handlePlansUpdate = (event) =>
    {
        event.preventDefault();
        this.updatePlans(this.state.newData.newPlans)
        .then(
            () =>{
                this.getAllAbouts();
                this.setState({
                    plansModalShow: false,
                })
            }
        );
        
    }

    render()
    { 
        const { mainContent, mission, plans, vision, mainHover, newData, aboutModalShow, missionModalShow, visionModalShow, plansModalShow } = this.state;
        return(
            <section id="about">
                <div className="container">
                    <header className="section-header">
                        <h3>About Us</h3>
                        <p className="edit-about" 
                        // onMouseOver={()=>{this.setState({mainHover:true})}}
                        // onMouseOut={()=>{this.setState({mainHover:false})}}
                        >
                        {mainHover && <>
                            <button 
                            className="btn btn-primary"
                            onClick={this.activateMainShow}
                            >Edit
                            </button><br/></>
                        }
                        <AboutModal 
                        show={aboutModalShow}
                        onHide={this.hideAboutModal}
                        formValue={newData.newMainContent}
                        changeFormValue={this.setMainContent}
                        handleSubmit={this.handleAboutMainUpdate}
                        modaltitle="Edit About Main Content"
                        placeholder="Main Content Here"/>
                        {mainContent}
                        </p>
                    </header>
                    <div className="row about-cols">
                        <AboutTemplate 
                        activateShow={this.activateMissionShow}
                        title="Our Mission"
                        imgsrc="img/about-mission.jpg"
                        icon="ion-ios-speedometer-outline"
                        content={mission}
                        show={missionModalShow}
                        onHide={this.hideMissionModal}
                        formValue={newData.newMission}
                        changeFormValue={this.setMission}
                        handleSubmit={this.handleMissionUpdate}
                        modaltitle="Change Mission"
                        placeholder="Mission Here"
                        />

                        <AboutTemplate 
                        activateShow={this.activateVisionShow}
                        title="Our Vision"
                        delay="0.1s"
                        imgsrc="img/about-vision.jpg"
                        icon="ion-ios-eye-outline"
                        content={vision}
                        show={visionModalShow}
                        onHide={this.hideVisionModal}
                        formValue={newData.newVision}                              
                        changeFormValue={this.setVision}
                        handleSubmit={this.handleVisionUpdate}
                        modaltitle="Change Vision"
                        placeholder="Vision Here"
                        />

                        <AboutTemplate 
                        activateShow={this.activatePlansShow}
                        title="Our Plans"
                        delay="0.2s"
                        imgsrc="img/about-plan.jpg"                             
                        icon="ion-ios-list-outline"
                        content={plans}
                        show={plansModalShow}
                        onHide={this.hidePlansModal}
                        formValue={newData.newPlans}
                        changeFormValue={this.setPlans}
                        handleSubmit={this.handlePlansUpdate}
                        modaltitle="Change Plans"
                        placeholder="Plans Here"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default About;