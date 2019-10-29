import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component{
    render()
    {
        return(
            <>
                <Header />
                <Intro />
                <main id="main">
                    <About />
                    <Services />
                    <Portfolio />
                    <Clients />
                    <Contact />
                </main>
                <Footer />
            </>
        )
    }
}

export default App;