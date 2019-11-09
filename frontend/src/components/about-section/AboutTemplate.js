import React, { useContext } from 'react';
import { TokenContext } from '../App';

const AboutTemplate = (props) =>
{
    //get admin token if available:
    const adminToken = useContext(TokenContext);

    const { name, delay, title, imgsrc, icon, content, isEditing, changeIsEditing, value, onChange, update } = props
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
              value={value}
              onChange={event => onChange(event,name)}>
              </textarea><br/><button className="btn btn-primary" onClick={() => {update(name, value)}}>Done</button></>
              :
              <p onDoubleClick={() => { if(adminToken) changeIsEditing(name);}}>{content}</p>
              }
            </div>
          </div>
    )
}

export default React.memo(AboutTemplate);