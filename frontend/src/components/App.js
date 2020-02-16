import React, { useState } from 'react';
import Header from './header/Header';
import Intro from './Intro';
import About from './about-section/About';
import Services from './services-section/Services';
import Portfolio from './portfolio-section/Portfolio';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';


export const TokenContext = React.createContext();
const App = () =>
{
    let initialToken = sessionStorage.getItem("hispKEAdminToken");
    const [token, setToken] = useState(initialToken);
    return(
        <TokenContext.Provider value={token}>
            {/* <button type="button" id="mobile-nav-toggle">
                <i className="fa fa-bars"></i>
            </button> */}
            <Header 
                updateToken={token => {setToken(token); sessionStorage.setItem("hispKEAdminToken", token)}}
                removeToken={() => { setToken(null) }}
            />
            <Intro />
            <main id="main">
                <About />
                <Services />
                <Portfolio />
                <Clients />
                <Contact />
            </main>
            <Footer />
        </TokenContext.Provider>
    )
}

export default App;