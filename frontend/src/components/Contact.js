import React, { Component } from 'react';
import { SendMail } from './Mailing';
import ErrorModal from './ErrorModal';

class Contact extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name : '',
            email : '', 
            subject : '',
            message : '',
            mailing : {
                sent : false,
                message : '',
            },
            error : false,
        }
    }

    deactivateError = () =>
    {
        this.setState({
            error : false,
        })
    }

    changeState = (event) =>
    {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    handleFormSubmit = (event) =>
    {
        event.preventDefault();
        const formDetails = {
            name : this.state.name,
            email : this.state.email,
            subject : this.state.subject,
            message : this.state.message,
        }

        if(formDetails.name !== '' && formDetails.email !== '' && formDetails.subject !== '' && formDetails.message !== ''){
            this.setState({
                mailing : {
                    sent : true,
                    message : 'Sending ...',
                }
            });

            SendMail(formDetails)
            .then(
                response => {
                    this.setState(
                        {
                            mailing : {
                            sent : true,
                            message : response.data.message,
                            },
                        }
                    );
                

                setTimeout(
                    () => {
                        this.setState({
                            name : '',
                            email : '', 
                            subject : '',
                            message : '',
                            mailing : {
                                sent : false,
                                message : '',
                            },
                        });
                    }
                    ,5000)
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
    render()
    {
        const { name, email, subject, message, mailing, error } = this.state;
        return(
            <section id="contact">
                <div className="container-fluid">
                    <div className="section-header">
                        <h3>Contact Us</h3>
                    </div>

                    <div className="row wow fadeInUp">
                        <div className="col-lg-6">
                            <div className="map mb-4 mb-lg-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7907543301017!2d36.81744931398412!3d-1.3003948990515277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e477ae132f%3A0xf19d102f06e702e7!2sTaj+Tower+Limited%2C+Upper+Hill+Rd%2C+Nairobi!5e0!3m2!1sen!2ske!4v1564035168235!5m2!1sen!2ske"
                                width="100%" height="315px" frameBorder="0" style={{border : 0}} title="map" allowFullScreen></iframe>
                            </div>
                        </div>


                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-5 info">
                                <i className="ion-ios-location-outline"></i>
                                <p>5th Floor, Taj Tower, Lower UpperHill Road, Nairobi, Kenya. </p>
                            </div>
                            <div className="col-md-4 info">
                                <i className="ion-ios-email-outline"></i>
                                <p>info@hisp.or.ke</p>
                            </div>
                            <div className="col-md-3 info">
                                <i className="ion-ios-telephone-outline"></i>
                                <p></p>
                            </div>
                        </div>

                        <div className="form">
                            {mailing.sent && <div id="sendmessage">{mailing.message}</div>}
                            <div id="errormessage"></div>
                            <form action="" method="post" className="contactForm" onSubmit={this.handleFormSubmit}>
                                <div className="form-row">
                                <div className="form-group col-lg-6">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={name} onChange={this.changeState}/>
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                    data-rule="email" data-msg="Please enter a valid email" value={email}  onChange={this.changeState}/>
                                    <div className="validation"></div>
                                </div>
                                </div>
                                <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                                    data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={subject}  onChange={this.changeState}/>
                                <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required"
                                    data-msg="Please write something for us" placeholder="Message" value={message}  onChange={this.changeState}></textarea>
                                <div className="validation"></div>
                                </div>
                                <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                 </div>
                </div>
                <ErrorModal
                show={error}
                onHide={this.deactivateError}
                />
            </section>
        )
    }
}

export default Contact;