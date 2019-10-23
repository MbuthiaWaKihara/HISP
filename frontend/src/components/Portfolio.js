import React, { Component } from 'react';

class Portfolio extends Component{

    render()
    {
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
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;