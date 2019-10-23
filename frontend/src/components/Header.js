import React from 'react';

const Header = () =>
{
    return(
        <header id="header">
            <div className="container-fluid">
                <div className="logo float-left">
                    <a href="#home" className="scrollto"><img src="img/logo.png" alt="" className="img-responsive" /></a>
                </div>

                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active"><a href="#intro">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Projects</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;