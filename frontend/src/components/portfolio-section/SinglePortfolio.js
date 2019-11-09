import React, { useContext } from 'react'
import PortfolioModal from './PortfolioModal';
import { TokenContext } from '../App';

const SinglePortfolio = props =>
{
    //get admin token if available:
    const adminToken = useContext(TokenContext);

    const { title, link, imgsrc, portfolio, deletePortfolio, modalinfo, activate } = props;
    return(
        <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                    <figure>
                        <img src={imgsrc} className="img-fluid" alt=""/>
                        <a href="img/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3"
                        title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="index.html" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </figure>

                    {adminToken && <div style={{backgroundColor : '#ffffff', paddingLeft : '40%'}}><i className="fa fa-edit" onClick={() => { activate(); modalinfo.currentPortfolio(portfolio.id)}}></i><i className="fa fa-trash" style={{marginLeft : '30px'}} onClick={() => { deletePortfolio(portfolio.id) }}></i></div>}
                    <div className="portfolio-info">
                        <h4><a href="index.html">{link}</a></h4>
                        <p>{title}</p>
                    </div>
                </div>
                <PortfolioModal
                show={modalinfo.show}
                onHide={modalinfo.onHide}
                modalinfo={modalinfo}
                />
            </div>
    )
}

export default React.memo(SinglePortfolio);