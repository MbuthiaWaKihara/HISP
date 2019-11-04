import React from 'react';

const Footer = () =>
{
    return(
        <footer id="footer">
            <div className="footer-top">
                <div className="container w-100">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3>HISPKENYA</h3>
                            <p>HISP Kenya is a not-for-profit organisation (NGO) that specialises in the development and maintenance of health information systems – a member of the global HISP network. HISPKE was established in 2014 as a network of professionals that support DHIS2 and health informatics within and outside Kenya.
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html">About us</a></li> 
                            <li><a href="index.html">Services</a></li>
                            <li><a href="https://academy.dhis2.org/">DHIS2 Academy Site</a></li>
                            <li><a href="https://play.dhis2.org/">DHIS2 Demo Site</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                            5th Floor, Taj Tower <br/>
                            Lower UpperHill Road,Nairobi,<br/>
                            Kenya<br/>
                            <strong>Phone:</strong> <br/>
                            <strong>Email:</strong> info@hisp.or.ke<br/>
                            </p>

                            <div className="social-links">
                            <a href="index.html" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="index.html" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="index.html" className="instagram"><i className="fa fa-instagram"></i></a>
                            <a href="index.html" className="google-plus"><i className="fa fa-google-plus"></i></a>
                            <a href="index.html" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>HISPKENYA</strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer);