import React from 'react';
import { Carousel } from 'react-bootstrap';

const Intro = () =>
{
    return(
        <section id="intro">
            <div className="intro-container">
            <Carousel>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/intro-carousel/hisp.jpg"
                alt=""
                style={{width : '100%', height : '100%'}}
                />
                    <div className="carousel-caption">
                    <Carousel.Caption>
                    <h1 style={{fontWeight : 'bolder'}}>We are professional</h1>
                    <p>HISP KE supports advancements of health informatics in Kenya for the attainment of Universal HealthCoverage.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Read More</a>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/intro-carousel/2.jpg"
                    alt=""
                    style={{width : '100%', height : '100%'}}
                    />

                    <div className="carousel-caption">
                    <Carousel.Caption>
                    <h1 style={{fontWeight : 'bolder'}}>At vero eos et accusamus</h1>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maximeplaceat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autemquibusdam et aut officiis debitis aut.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/intro-carousel/3.jpg"
                    alt=""
                    style={{width : '100%', height : '100%'}}
                    />

                    <div className="carousel-caption">
                    <Carousel.Caption>
                    <h1 style={{fontWeight : 'bolder'}}>Temporibus autem quibusdam</h1>
                    <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oditaut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis istenatus error sit voluptatem accusantium.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/intro-carousel/4.jpg"
                    alt=""
                    style={{width : '100%', height : '100%'}}
                    />

                    <div className="carousel-caption">
                    <Carousel.Caption>
                    <h1 style={{fontWeight : 'bolder'}}>Nam libero tempore</h1>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedquia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Utenim ad minima veniam, quis nostrum.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/intro-carousel/5.jpg"
                    alt=""
                    style={{width : '100%', height : '100%'}}
                    />

                    <div className="carousel-caption">
                    <Carousel.Caption>
                    <h1 style={{fontWeight : 'bolder'}}>Magnam aliquam quaerat</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                </Carousel>
            </div>
        </section>
    )
}

export default Intro;