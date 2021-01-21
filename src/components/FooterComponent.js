import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import { UncontrolledTooltip } from 'reactstrap'

function Footer(props){
    return(
        <Fade>
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 col-sm-2">
                        <h5><strong><u>Links</u></strong></h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home" style={{color:"#ebf8ff"}}>Home</Link></li>
                            <li><Link to="/aboutus" style={{color:"#ebf8ff"}}>About Us</Link></li>
                            <li><Link to="/service" style={{color:"#ebf8ff"}}>Services</Link></li>
                            <li><Link to="/contactus" style={{color:"#ebf8ff"}}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-3">
                        <h5><strong><u>Our Address</u></strong></h5>
                        <address style={{fontSize:'12px',fontFamily:'"DubaiW23-Bold",sans-serif'}}>
                        {/* <span className="fa fa-address-card" aria-hidden="true"></span> : FJS LOGISTICS DWC-LLC,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Business Center, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dubai World Central,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P.O. Box 182113, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dubai, U. A. E <br/> */}
                        <span className="fa fa-address-card" aria-hidden="true"></span> : FJS LOGISTICS DWC-LLC,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp; P.O.Box: 182113, Plot No 597-595, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp; Dubai Investment Park 2,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp; Dubai, U. A. E <br/> 
                    </address>
                    </div>
                    <div className="col-7 col-sm-4">
                    <address style={{ marginTop:'32px' ,fontSize:'12px',fontFamily:'"DubaiW23-Bold",sans-serif'}}>
                          <i className="fa fa-phone fa-lg"></i> : +971 50 7163192 / +971 52 4131176<br />
                          <i className="fa fa-fax fa-lg"></i> : +971 4 805 3900<br /> 
                          <i className="fa fa-envelope fa-lg"></i> : <a style={{color:"#ebf8ff"}} href="mailto:t.thoppil@fjslogistics.com">
                          t.thoppil@fjslogistics.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="text-center">
                            <h5><strong><u>Social Links</u></strong></h5>
                            <a id="CompanyLink" className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/fjs-logistics/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:"30px", color:'#ebf8ff'}}/></a>
                            <UncontrolledTooltip placement='top' target='CompanyLink'>
                                Company Profile
                            </UncontrolledTooltip>
                            <a id="ContactPerson" className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/thankappenthoppil/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px", color:'#ebf8ff'}}/></a>
                            <UncontrolledTooltip placement='top' target='ContactPerson'>
                                Contact Person
                            </UncontrolledTooltip>
                            <a id="Email" className="btn btn-social-icon" href="mailto:t.thoppil@fjslogistics.com"><i className="fa fa-envelope" style={{fontSize:"30px", color:'#ebf8ff'}}></i></a>
                            <UncontrolledTooltip placement='top' target='Email'>
                                Mail to us!
                            </UncontrolledTooltip>
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