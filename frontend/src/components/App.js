import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './about-section/About';
import Services from './services-section/Services';
import Portfolio from './portfolio-section/Portfolio';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';

const App = () =>
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

export default App;