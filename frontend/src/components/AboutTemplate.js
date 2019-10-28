import React from 'react';
import AboutModal from './AboutModal';

const AboutTemplate = (props) =>
{
    const { delay, title, imgsrc, icon, content, activateShow, show, onHide, formValue, changeFormValue, handleSubmit, modaltitle, placeholder } = props
    return(
        <div className="col-md-4 wow fadeInUp" data-wow-delay={delay}>
            <div className="about-col">
              <div className="img">
                <img src={imgsrc} alt="" className="img-fluid" />
                <div className="icon"><i className={icon}></i></div>
              </div>
              <h2 className="title"><a href="index.html">{title}</a></h2>
              <p className="edit-about">
              {true && <>
                  <button 
                  className="btn btn-primary"
                  onClick={activateShow}
                  >Edit
                  </button><br/></>
              }
              <AboutModal 
              show={show}
              onHide={onHide}
              formValue={formValue}
              changeFormValue={changeFormValue}
              handleSubmit={handleSubmit}
              modaltitle={modaltitle}
              placeholder={placeholder}/>
              {content}</p>
            </div>
          </div>
    )
}

export default AboutTemplate;