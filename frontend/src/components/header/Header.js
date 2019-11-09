import React, { useState, useContext } from 'react';
import LoginModal from './LoginModal';
import ErrorModal from '../ErrorModal';
import { TokenContext } from '../App';
import axios from 'axios';

const Header = props =>
{
    //get admin token if available:
    const adminToken = useContext(TokenContext);

    //login modal state variable
    const [login, setLogin] = useState(false);

    //error modal state variable
    const [error, setError] = useState(false);

    //credentials state variable
    const [credentials, setCredentials] = useState({ email: '', password: ''});

    const handleLogin = (event, credentials) =>
    {
        event.preventDefault();
        console.log(credentials);
        setLogin(false);
        setCredentials({ email: '', password: ''});
        axios
        .post('/api/login', {...credentials}, {
            headers:
            {
                'Content-type': 'application/json'
            }
        })
        .then(
            response => {
                console.log(response);
                props.updateToken(response.data.token);
            }
        )
        .catch(
            error => {
                console.log(error);
                setError(true);
            }
        )
    }

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
                        { !adminToken && <li><a href="index.html" onClick={event => { event.preventDefault(); setLogin(true) }}>Admin</a></li>}
                        {adminToken && <li><a href="index.html" onClick={event => { event.preventDefault(); sessionStorage.removeItem("hispKEAdminToken"); props.removeToken() }}>Log out</a></li>}
                    </ul>
                </nav>
            </div>
            <LoginModal
            show={login}
            onHide={() => { setLogin(false) }}
            onSubmit={handleLogin}
            credentials={credentials}
            changecredentials={event => { setCredentials({...credentials, [event.target.name]: event.target.value}) }}
            />
            <ErrorModal
            show={error}
            onHide={() => setError(false)}
            name="this page"
            message="please check your email and password and try again"
            />
        </header>
    )
}

export default React.memo(Header);