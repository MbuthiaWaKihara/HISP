import React, { Component } from 'react';
import SinglePortfolio from './SinglePortfolio';
import PortfoliosModal from './PortfoliosModal';
import axios from 'axios';

class Portfolio extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            portfolios : [],
            addPortfolioShow : false,
            editPortfolioShow : false,
            editingPortfolio : 'none', 
            newPortfolioTitle : '',
            newPortfolioLink : '',
            newPortfolioType : 'web',
        }
    }

    getEditingPortfolio = id =>
    {
        this.setState({
            editingPortfolio : id,
        })
    }

    hideAddPortfolio = () =>
    {
        this.setState({
            addPortfolioShow : false,
        })
    }

    hideEditPortfolio = () =>
    {
        this.setState({
            editPortfolioShow : false,
        })
    }

    activateEditPortfolio = () =>
    {
        this.setState({
            editPortfolioShow : true,
        })
    }

    changeLinkValue = (event) =>
    {
        this.setState({
            newPortfolioLink : event.target.value,
        })
    } 

    changeTypeValue = (event) =>
    {
        this.setState({
            newPortfolioType : event.target.value,
        })
    } 

    changeTitleValue = (event) =>
    {
        this.setState({
            newPortfolioTitle : event.target.value,
        })
    } 

    getAllPortfolios = () =>
    {
        return axios
        .get('api/portfolio',{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            response =>
            {
                this.setState({
                    portfolios : [...response.data],
                })
            }
        )
    }

    componentDidMount = () =>
    {
        this.getAllPortfolios();
    }

    deletePortfolio = id =>
    {
        return axios
        .post('api/portfolio/delete',{
            id : id,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () =>
            {
                this.getAllPortfolios();
            }
        )
    }

    addPortfolio = (title, link, type) =>
    {
        return axios
        .post('api/portfolio/new',{
            link : link,
            title : title,
            type : type,
        },{
            header : {
                'Content-type' : 'application/json',
            }
        })
        .then(
            () =>
            {
                this.getAllPortfolios();
            }
        )
    }

    updatePortfolio = (id, title, link, type) =>
    {
        return axios
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
                this.getAllPortfolios();
            }
        )
    }
    
    handleAddPortfolio = event =>
    {
        event.preventDefault();
        this.addPortfolio(this.state.newPortfolioTitle, this.state.newPortfolioLink, this.state.newPortfolioType)
        .then(
            () =>{
                this.setState({
                    addPortfolioShow : false,
                })
            }
        )
    }

    handleUpdatePortfolio = event =>
    {
        event.preventDefault();
        this.updatePortfolio(this.state.editingPortfolio, this.state.newPortfolioTitle, this.state.newPortfolioLink, this.state.newPortfolioType)
        .then(
            () => {
                this.setState({
                    editPortfolioShow : false,
                })
            }
        )
    }

    render()
    {
        const { portfolios, addPortfolioShow, newPortfolioTitle, newPortfolioLink, newPortfolioType, editPortfolioShow } = this.state;

        let formattedPortfolios = portfolios.map( portfolio => <SinglePortfolio 
                                                                id={portfolio.id}
                                                                key={portfolio.id}
                                                                title={portfolio.title}
                                                                link={portfolio.link}
                                                                imgsrc={portfolio.type==='web' ? 'img/portfolio/web3.jpg' : 'img/portfolio/app2.jpg'}
                                                                deletePortfolio={this.deletePortfolio}

                                                                activate={this.activateEditPortfolio}
                                                                editing={this.getEditingPortfolio}
                                                                show={editPortfolioShow}
                                                                buttonText="Change"
                                                                modaltitle="Edit Portfolio"
                                                                titleplaceholder="Portfolio Title Here ..."
                                                                titleValue={newPortfolioTitle}
                                                                changeTitleValue={this.changeTitleValue}
                                                                linkplaceholder="Portfolio Link Here ..."
                                                                linkValue={newPortfolioLink}
                                                                changeLinkValue={this.changeLinkValue}
                                                                typeValue={newPortfolioType}
                                                                changeTypeValue={this.changeTypeValue}
                                                                onHide={this.hideEditPortfolio}
                                                                handleSubmit={this.handleUpdatePortfolio}
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
                <div style={{paddingLeft : '50%', paddingRight : '50%', marginTop : '30px'}}><button className="btn btn-primary" onClick={()=>{this.setState({addPortfolioShow : true,})}}>Add</button></div>
                <PortfoliosModal
                show={addPortfolioShow}
                modaltitle="Add Portfolio"
                onHide={this.hideAddPortfolio}
                buttonText="Add"
                titleplaceholder="Portfolio Title Here ..."
                titleValue={newPortfolioTitle}
                changeTitleValue={this.changeTitleValue}
                linkplaceholder="Portfolio Link Here ..."
                linkValue={newPortfolioLink}
                changeLinkValue={this.changeLinkValue}
                typeValue={newPortfolioType}
                changeTypeValue={this.changeTypeValue}
                handleSubmit={this.handleAddPortfolio}
                />
            </section>
        )
    }
}

export default Portfolio;