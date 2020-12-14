import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

function Footer(props){
    return(
        <Fade>
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5><strong>Links</strong></h5>
                        <ul className="list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "/home"} style={{color:"#ebf8ff"}}>Home</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/aboutus"} style={{color:"#ebf8ff"}}>About Us</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/service"} style={{color:"#ebf8ff"}}>Services</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/contactus"} style={{color:"#ebf8ff"}}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5><strong>Our Address</strong></h5>
                        <address>
                        <span className="fa fa-address-card" aria-hidden="true"></span>: Post Box 182113,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plot No 597-595 Dubai Investment Park II <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai, United Arab Emirates <br/>
                          <i className="fa fa-fax fa-lg"></i>: +971 4 809 0300<br />
                          <i className="fa fa-phone fa-lg"></i>: +971 50 7163192 / +971 52 413 1176<br />
                          <i className="fa fa-envelope fa-lg"></i>: <a style={{color:"#ebf8ff"}} href="mailto:t.thoppil@fjslogistics.com">
                          t.thoppil@fjslogistics.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/thankappenthoppil/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px"}}/></a>
                            <a className="btn btn-social-icon" href="mailto:t.thoppil@fjslogistics.com"><i className="fa fa-envelope" style={{fontSize:"30px"}}></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 FJS Logistics LLC</p>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
        );
}

export default Footer;