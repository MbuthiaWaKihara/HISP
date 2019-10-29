import React, { Component } from 'react';
import PortfoliosModal from './PortfoliosModal';

class SinglePortfolio extends Component{

    render()
    {
        const { id, deletePortfolio, imgsrc, title, link, activate, editing, show, buttonText, modaltitle, titleplaceholder, titleValue, changeTitleValue, linkplaceholder, linkValue, changeLinkValue, typeValue, changeTypeValue, onHide, handleSubmit } = this.props;
        return(
            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                    <figure>
                        <img src={imgsrc} className="img-fluid" alt=""/>
                        <a href="img/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3"
                        title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="index.html" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    <div style={{backgroundColor : '#ffffff', paddingLeft : '40%'}}><i className="fa fa-edit" onClick={()=>{activate(); editing(id)}}></i><i className="fa fa-trash" style={{marginLeft : '30px'}} onClick={()=>{deletePortfolio(id)}}></i></div>
                    <div className="portfolio-info">
                        <h4><a href="index.html">{link}</a></h4>
                        <p>{title}</p>
                    </div>
                </div>
                <PortfoliosModal
                show={show}
                modaltitle={modaltitle}
                onHide={onHide}
                buttonText={buttonText}
                titleplaceholder={titleplaceholder}
                titleValue={titleValue}
                changeTitleValue={changeTitleValue}
                linkplaceholder={linkplaceholder}
                linkValue={linkValue}
                changeLinkValue={changeLinkValue}
                typeValue={typeValue}
                changeTypeValue={changeTypeValue}
                handleSubmit={handleSubmit}
                />
            </div>
        )
    }
}

export default SinglePortfolio;