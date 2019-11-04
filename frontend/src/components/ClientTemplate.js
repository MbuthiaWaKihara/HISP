import React from 'react';

const ClientTemplate = (props) =>
{
    const { imgsrc } = props;
    return(
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src={imgsrc} className="img-fluid" alt=""/>
            </div>
          </div>
    )
}

export default React.memo(ClientTemplate);