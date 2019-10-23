import React from 'react';

const AboutTemplate = (props) =>
{
    const { delay, title, imgsrc,icon } = props
    return(
        <div className="col-md-4 wow fadeInUp" data-wow-delay={delay}>
            <div className="about-col">
              <div className="img">
                <img src={imgsrc} alt="" className="img-fluid" />
                <div className="icon"><i className={icon}></i></div>
              </div>
              <h2 className="title"><a href="index.html">{title}</a></h2>
              <p>
              </p>
            </div>
          </div>
    )
}

export default AboutTemplate;