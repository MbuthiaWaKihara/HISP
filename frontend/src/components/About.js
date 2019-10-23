import React, { Component } from 'react';
import AboutTemplate from './AboutTemplate';

class About extends Component{

    render()
    {
        return(
            <section id="about">
                <div className="container">
                    <header className="section-header">
                        <h3>About Us</h3>
                        <p></p>
                    </header>
                    <div className="row about-cols">
                        <AboutTemplate 
                        title="Our Mission"
                        imgsrc="img/about-mission.jpg"
                        icon="ion-ios-speedometer-outline"/>
                        <AboutTemplate 
                        title="Our Plans"
                        delay="0.1s"
                        imgsrc="img/about-plan.jpg"
                        icon="ion-ios-list-outline"/>
                        <AboutTemplate 
                        title="Our Vision"
                        delay="0.2s"
                        imgsrc="img/about-vision.jpg"
                        icon="ion-ios-eye-outline"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;