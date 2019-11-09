import React, { useEffect, useState, useContext } from 'react';
import AboutTemplate from './AboutTemplate';
import ErrorModal from '../ErrorModal';
import axios from 'axios';
import { TokenContext } from '../App';

const About = () =>
{
    //get admin token if available:
    const adminToken = useContext(TokenContext);
    //state variable that catches an error:
    const [error, setError] = useState({caught: false, message: ''});//no error by default

    //state variable that holds the abouts data from the server:
    const [abouts, setAbouts] = useState({ main: '', mission: '', vision: '', plans: '',});

    //state variable that monitors a submitted edit
    const [toggleEdited, setToggleEdited] = useState(false);

    //fetch all the data for the about section from the server:
    useEffect(
        () => {
            axios
            .get('/api/about',{
                header : {
                    'Content-type' : 'application/json',
                }
            })
            .then(
                response =>{
                    // console.log(response);
                    let serverData = response.data;
                    setAbouts({ main: serverData.main_content, mission: serverData.mission, vision: serverData.vision, plans: serverData.plans });
                }
            )
            .catch(
                error => {
                    console.log(error.message);
                    setError({caught: true, message: error.message});
                }
            )
        }, [toggleEdited]
    );

    //state variable that checks whether a section is editing:
    const [isEditing, setIsEditing] = useState({ main: false, mission: false, vision: false, plans: false,});

    //callback for changing editing state of a section:
    const changeIsEditing = name =>
    {
        setIsEditing({...isEditing, [name]: true});
    }

    //callback for changing the value of textarea:
    const changeCurrentEditing = (event, name) =>
    {
        setAbouts({...abouts, [name]: event.target.value});
    }

    //callback for updating the server on changes to a section:
    const updateCurrentEdited = (name, content) =>
    {
        axios
        .post(`api/about/${name}`,{
            [name] : content,
        })
        .then(
            () => {
                // console.log(response);
                setIsEditing({...isEditing, [name]: false});
                setToggleEdited(!toggleEdited);
            }
        )
        .catch(
            error => {
                console.log(error);
                setError({caught: true, message: error});
            }
        )
    }

    return(
        <section id="about">
                <div className="container">
                    <header className="section-header">
                        <h3>About Us</h3>
                        {
                            isEditing.main ? 
                            <>
                            <textarea 
                            style={{width : '100%', border : 'none', backgroundColor : 'rgba(242, 252, 252, .1)'}}
                            rows="7"
                            value={abouts.main}
                            onChange={event => setAbouts({ ...abouts, main: event.target.value})}>
                            </textarea><br/><button className="btn btn-primary" onClick={() =>{updateCurrentEdited('main',abouts.main)}}>Done</button><br/><br/></>
                            :<p className="edit-about" onDoubleClick={() => {if(adminToken) setIsEditing({...isEditing, main: true})}}>
                            {abouts.main}
                            </p>
                        }
                    </header>
                    <div className="row about-cols">
                        <AboutTemplate
                        name="mission" 
                        title="Our Mission"
                        imgsrc="img/about-mission.jpg"
                        icon="ion-ios-speedometer-outline"
                        content={abouts.mission}
                        isEditing={isEditing.mission}
                        value={abouts.mission}
                        onChange={changeCurrentEditing}
                        changeIsEditing={changeIsEditing}
                        update={updateCurrentEdited}
                        />

                        <AboutTemplate
                        name="vision" 
                        title="Our Vision"
                        delay="0.1s"
                        imgsrc="img/about-vision.jpg"
                        icon="ion-ios-eye-outline"
                        content={abouts.vision}
                        isEditing={isEditing.vision}
                        value={abouts.vision}
                        onChange={changeCurrentEditing}
                        changeIsEditing={changeIsEditing}
                        update={updateCurrentEdited}
                        />

                        <AboutTemplate
                        name="plans" 
                        title="Our Plans"
                        delay="0.2s"
                        imgsrc="img/about-plan.jpg"                             
                        icon="ion-ios-list-outline"
                        content={abouts.plans}
                        isEditing={isEditing.plans}
                        value={abouts.plans}
                        onChange={changeCurrentEditing}
                        changeIsEditing={changeIsEditing}
                        update={updateCurrentEdited}
                        />
                    </div>
                </div>
                <ErrorModal
                show={error.caught}
                onHide={() => setError({...error, caught: false,})}
                name="About Us"
                message={error.message}
                />
            </section>
    )
}

export default React.memo(About);