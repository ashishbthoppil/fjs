import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPhoneAlt, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const required = (val) => val && val.length;
const maxLength = (len) => (val) =>!(val) || (val.length) <= len
const minLength = (len) => (val) =>!(val) || (val.length) >= len
const isNumber = (val) => !isNaN(Number(val))
const validEmail = (val) => /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class Contact extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(props){
        window.scrollTo(0, 0);
    }

    handleSubmit(values){
        alert('Email successfully sent!');
      }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb style={{marginTop:"1em"}}>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3 style={{textAlign:'center'}}><strong>CONTACT US</strong></h3>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <div className="contactback" style={{backgroundImage:'url("https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/vision.jpg")', opacity : '100%'}}>
                                <p style={{textAlign:'center'}}><i>"Customer satisfaction is the key to success for any business. We understand and follow this diligently."</i></p>
                                <p><strong>Our customers are always our priority and we would love to hear from you. We encourage you to get in touch with us if you have any queries regarding any of our products or services. We would also love to hear from you if you have any suggestions on how we can assist you better. Your feedback is highly important to us. Write to us if you have an idea or feedback.</strong></p>
                            </div>
                        </div>
                </div>
                <Fade bottom>
                <div className="row row-content" style={{marginBottom:"2em"}}>
                    <div className="col-12">
                    <h3 style={{marginTop:"2em"}}>LOCATION INFORMATION</h3>
                    <hr style={{backgroundColor:"#1d5797",height:"5px", float:"left", width:"5em", marginBottom:"2em"}}/>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1" style={{border:"1px solid" ,borderColor:"#f2f2f2",boxShadow: "2px 3px #f2f2f2", padding:"15px", height:"290px"}}>
                            <h5><strong>Our Address</strong></h5>
                            <address>
                        {/* <span style={{color:'#1d5797'}} className="fa fa-address-card" aria-hidden="true"></span>: FJS LOGISTICS DWC-LLC,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Center, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai World Central,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P.O. Box 182113, Dubai, U. A. E <br/> */}
                        <FontAwesomeIcon icon={faAddressCard} style={{color:"#1d5797",textAlign:"center", margin:'auto', marginTop:'10px'}}/> : FJS LOGISTICS DWC-LLC,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P.O.Box: 182113, Plot No 597-595, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dubai Investment Park 2,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dubai, U. A. E <br/> 
                        <FontAwesomeIcon icon={faPhoneAlt} style={{color:"#1d5797",textAlign:"center", margin:'auto', marginTop:'10px'}}/> : +971 50 7163192 / +971 52 4131176<br />
                        <FontAwesomeIcon icon={faFax} style={{color:"#1d5797",textAlign:"center", margin:'auto', marginTop:'10px'}}/> : +971 4 805 3900<br />
                        <FontAwesomeIcon icon={faEnvelope} style={{color:"#1d5797",textAlign:"center", margin:'auto', marginTop:'10px'}}/> : <a href="mailto:t.thoppil@fjslogistics.com">
                          t.thoppil@fjslogistics.com</a>
                        </address>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel: +971 4 805 3900"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-success" href="mailto:t.thoppil@fjslogistics.com"><i className="fa fa-envelope"></i> Email</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1" style={{border:"1px solid" ,borderColor:"#f2f2f2",boxShadow: "2px 3px #f2f2f2", padding:"15px"}}>
                        <h5><strong>Map of our Location</strong></h5>
                        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "500px"}}>
                            <iframe src="https://maps.google.com/maps?q=24.982449, 55.189044&t=&z=13&ie=UTF8&iwloc=&output=embed&z=17" title="FJS Location" frameBorder="0"
                            style={{border:"0"}} allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade bottom>
                <div className="row row-content" style={{border:"1px solid",backgroundColor:"white",borderColor:"#f2f2f2", padding:"20px", borderRadius:"5px",boxShadow: "2px 3px #f2f2f2"}}>
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                        <hr style={{backgroundColor:"#1d5797",height:"5px", float:"left", width:"5em", marginBottom:"2em"}}/>
                    </div>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control model=".firstname" id="firstname" name="firstname"
                                                placeholder="First Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}/>
                                        <Errors className="text-danger" model=".firstname" show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">                                    
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control model=".lastname" className="form-control" 
                                                id="lastname" name="lastname"
                                                placeholder="Last Name" 
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}/>   
                                                 <Errors className="text-danger" model=".lastname" show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />                                 
                                    </Col>
                                </Row>
                                <Row className="form-group">                                    
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                    <Col md={10}>
                                        <Control model=".telnum" id="telnum" className="form-control" name="telnum"
                                                placeholder="Tel. Number" validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                                }}/>
                                                <Errors className="text-danger" model=".telnum" show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }} />  
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control model=".email" className="form-control" id="email" name="email"
                                                placeholder="Email" validators={{
                                                    required,validEmail
                                                }}/>
                                        <Errors className="text-danger" model=".telnum" show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }} />  
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <textarea model=".message" className="form-control" id="message" name="message"
                                                rows="12"/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" color="primary">Send Feedback</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                    </Fade>
            </div>
        );
    }
}

export default Contact;
