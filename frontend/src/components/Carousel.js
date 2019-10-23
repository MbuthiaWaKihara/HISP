import React from 'react';

const Carousel = (props) =>
{
    const { customClass, imgsrc, header, content, link } = props;
    return(
        <div className={`carousel-item ${customClass}`}>
            <div className="carousel-background"><img src={imgsrc} alt=""/></div>
            <div className="carousel-container">
                <div className="carousel-content">
                    <h2>{header}</h2>
                    <p>{content}</p>
                    <a href="#featured-services" className="btn-get-started scrollto">{link}</a>
                </div>
            </div>
        </div>
    )
}

export default Carousel;