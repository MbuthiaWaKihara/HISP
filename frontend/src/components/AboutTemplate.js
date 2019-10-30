import React from 'react';
import ErrorModal from './ErrorModal';

const AboutTemplate = (props) =>
{
    const { delay, title, imgsrc, icon, content, isEditing, editValue, editChange, handler, activator} = props
    return(
        <div className="col-md-4 wow fadeInUp" data-wow-delay={delay}>
            <div className="about-col">
              <div className="img">
                <img src={imgsrc} alt="" className="img-fluid" />
                <div className="icon"><i className={icon}></i></div>
              </div>
              <h2 className="title"><a href="index.html">{title}</a></h2>
              {isEditing ?
              <>
              <textarea 
              style={{width : '90%', border : 'none', backgroundColor : 'rgba(255, 255, 255, .9)', fontSize : '.9em', color : '###575757', marginLeft : '15px'}}
              rows="7"
              value={editValue}
              onChange={editChange}>
              </textarea><br/><button className="btn btn-primary" onClick={handler}>Done</button></>
              :
              <p onDoubleClick={activator}>{content}</p>
              }
            </div>
            <ErrorModal 
                show={props.show}
                onHide={props.onHide}
                />
          </div>
    )
}

export default AboutTemplate;