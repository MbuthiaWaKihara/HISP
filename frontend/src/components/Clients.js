import React from 'react';
import ClientTemplate from './ClientTemplate';

const Clients = () =>
{
    return(
        <section id="clients" className="section-bg">
            <div className="container">
                <div className="section-header">
                    <h3>Our Partners</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome
                        nida.
                    </p>
                </div>

                <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                    <ClientTemplate 
                    imgsrc="img/clients/kenya.png"/>
                    <ClientTemplate 
                    imgsrc="img/clients/oslo1.png"/>
                    <ClientTemplate 
                    imgsrc="img/clients/uon1.jpg"/>
                    <ClientTemplate 
                    imgsrc="img/clients/client-4.png"/>
                </div>
            </div>
        </section>
    )
}

export default Clients;