import React from 'react';
import Carousel from './Carousel';

const Intro = () =>
{
    const imageSources = {
        first : "img/intro-carousel/hisp.jpg",
        second : "img/intro-carousel/2.jpg",
        third : "img/intro-carousel/3.jpg",
        fourth : "img/intro-carousel/4.jpg",
        fifth : "img/intro-carousel/5.jpg",
    }

    const headers = {
        first : "We are professional",
        second : "At vero eos et accusamus",
        third : "Temporibus autem quibusdam",
        fourth : "Nam libero tempore",
        fifth : "Magnam aliquam quaerat",
    }

    const contents = {
        first : "HISP KE supports advancements of health informatics in Kenya for the attainment of Universal HealthCoverage.",
        second : "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maximeplaceat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autemquibusdam et aut officiis debitis aut.",
        third : "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oditaut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis istenatus error sit voluptatem accusantium.",
        fourth : "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedquia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Utenim ad minima veniam, quis nostrum.",
        fifth : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
        }

    const links = {
        first : "Read More",
        other : "Get Started",
    }
    return(
        <section id="intro">
            <div className="intro-container">
                <div id="itroCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                    {/* <ol className="carousel-indicators"></ol> */}
                        <div  className="carousel-inner" role="listbox">
                            <Carousel 
                            customClass="active"
                            imgsrc={imageSources.first}
                            header={headers.first}
                            content={contents.first}
                            link={links.first}
                            />
                            <Carousel 
                            imgsrc={imageSources.second}
                            header={headers.second}
                            content={contents.second}
                            link={links.other}
                            />
                            <Carousel 
                            imgsrc={imageSources.third}
                            header={headers.third}
                            content={contents.third}
                            link={links.other}
                            />
                            <Carousel 
                            imgsrc={imageSources.fourth}
                            header={headers.fourth}
                            content={contents.fourth}
                            link={links.other}
                            />
                            <Carousel 
                            imgsrc={imageSources.fifth}
                            header={headers.fifth}
                            content={contents.fifth}
                            link={links.other}
                            />
                        </div>

                        {/* <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a> */}
                </div>
            </div>
        </section>
    )
}

export default Intro;