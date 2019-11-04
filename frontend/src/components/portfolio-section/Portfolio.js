import React, { useState, useEffect } from 'react';
import SinglePortfolio from './SinglePortfolio';
import PortfolioModal from './PortfolioModal';
import axios from 'axios';

const Portfolio = () =>
{
//state variable that holds all the portfolio items from the server:
const [portfolios, setPortfolios] = useState([]);

//state variable that holds the value of a new/edited single portfolio:
const [portfolio, setPortfolio] = useState({ title: '', link: '', type: 'app', id: null,});

//state variable to ditarmine visibility of modals:
const [modal, setModal] = useState({ add: false, edit: false, submit: true,});

//state variable that monitors a change in the portfolios section:
const [toggleEdit, setToggleEdit] = useState(false);

//fetch all portfolio data from the server:
useEffect(
    () => {
        axios
    .get('api/portfolio',{
        header : {
            'Content-type' : 'application/json',
        }
    })
    .then(
        response =>
        {
            // console.log(response);
            setPortfolios(response.data);
        }
    )
    .catch(
        error => 
        {
            console.log(error);
        }
    )
    }
    ,[toggleEdit]);

    //callback to delete a portfolio:
    const deletePortfolio = id =>
    {
        axios
        .post('api/portfolio/delete',{
            id : id,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () => {
                setToggleEdit(!toggleEdit);
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    //callback to update a portfolio:
    const updatePortfolio = event =>
    {
        setModal({...modal, submit: false,});
        let id = portfolio.id;
        let title = portfolio.title;
        let link = portfolio.link;
        let type = portfolio.type;
        event.preventDefault();

        axios
        .post('api/portfolio/edit',{
            id : id,
            title : title,
            link : link,
            type : type,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () =>
            {
                // console.log(response);
                setToggleEdit(!toggleEdit);
                setModal({...modal, edit: false,});
                setPortfolio({...portfolio, title: '', type: 'web', link: '',})
            }
        )
        .catch(
            error =>
            {
                console.log(error);
            }
        )
    }

    //callback for adding a new portfolio:
    const addPortfolio = event =>
    {
        setModal({...modal, submit: false,});
        let title = portfolio.title;
        let link = portfolio.link;
        let type = portfolio.type;
        event.preventDefault();

        axios
        .post('api/portfolio/new',{
            title : title,
            link : link,
            type : type,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () =>
            {
                // console.log(response);
                setToggleEdit(!toggleEdit);
                setModal({...modal, add: false,});
                setPortfolio({...portfolio, title: '', type: 'web', link: '',})
            }
        )
        .catch(
            error =>
            {
                console.log(error);
            }
        )

    }

    let add_modalInfo = {
        title: 'Add New Service',
        buttonText: 'Add',
        titleValue: portfolio.title,
        changeTitleValue: event => { setPortfolio({...portfolio, title: event.target.value,}) },
        linkValue: portfolio.link,
        changeLinkValue: event => { setPortfolio({...portfolio, link: event.target.value}) },
        typeValue: portfolio.type,
        changeTypeValue: event => { setPortfolio({...portfolio, type: event.target.value}) },
        onSubmit: addPortfolio,
        submitted: modal.submit,
        preventMultiSubmit: () => { setModal({...modal, submitted: false,}) }
    };

    let edit_modalInfo = {
        show: modal.edit,
        onHide: () => setModal({...modal, edit: false,}),
        title: 'Edit Service',
        buttonText: 'Change',
        titleValue: portfolio.title,
        changeTitleValue: event => { setPortfolio({...portfolio, title: event.target.value,}) },
        linkValue: portfolio.link,
        changeLinkValue: event => { setPortfolio({...portfolio, link: event.target.value}) },
        typeValue: portfolio.type,
        changeTypeValue: event => { setPortfolio({...portfolio, type: event.target.value}) },
        submitted: modal.submit,
        onSubmit: updatePortfolio,
        preventMultiSubmit: () => setModal({...modal, submit: false,}),
        currentPortfolio: id => { setPortfolio({...portfolio, id: id}) },
    };

    //add JSX to incoming portfolios data:
    const formattedPortfolios = portfolios.map( portfolio => <SinglePortfolio 
        portfolio={portfolio}
        id={portfolio.id}
        key={portfolio.id}
        title={portfolio.title}
        link={portfolio.link}
        imgsrc={portfolio.type==='web' ? 'img/portfolio/web3.jpg' : 'img/portfolio/app2.jpg'}
        deletePortfolio={deletePortfolio}
        modalinfo={edit_modalInfo}
        activate={ () => setModal({...modal, edit: true,}) }
        />);

    return(
        <section id="portfolio" className="section-bg">
                <div className="container">
                    <header className="section-header">
                        <h3 className="section-title">Our Portfolio</h3>
                    </header>

                    <div className="row">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                    </div>

                    <div className="row portfolio-container">
                        {formattedPortfolios}
                    </div>
                </div>
                <div style={{paddingLeft : '50%', paddingRight : '50%', marginTop : '30px'}}><button className="btn btn-primary" onClick={() => { setModal({...modal, add: true,} )}}>Add</button></div>
                <PortfolioModal
                show={modal.add}
                onHide={() => { setModal({...modal, add: false,}) }}
                modalinfo={add_modalInfo}
                />
            </section>
    )
}

export default React.memo(Portfolio);