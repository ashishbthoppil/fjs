import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

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

    handleSubmit(values){
        const templateId = 'template_ydo94vc';

        this.sendFeedback(templateId, {message: values.message, firstname: values.firstname, lastname: values.lastname, email: values.email, telnum: values.telnum})
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'service_v93wj4g', templateId,
          variables,
          'user_zu0ldwdQx9uJbEsvRMWUZ').then(res => {
            alert('Email successfully sent!')
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      
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
                            <div className="contactback" style={{backgroundImage:'url(assets/images/vision.jpg)'}}>
                                <p style={{textAlign:'center'}}><i>"Customer satisfaction is the key to success for any business. We understand and follow this diligently."</i></p>
                                <p><strong>Our customers are always our priority and we would love to hear from you. We encourage you to get in touch with us if you have any queries regarding any of our products or services. We would also love to hear from you if you have any suggestions on how we can assist you better. Your feedback is highly important to us. Write to us if you have an idea or feedback.</strong></p>
                            </div>
                        </div>
                </div>
                <div className="row row-content" style={{marginBottom:"2em"}}>
                    <div className="col-12">
                    <h3 style={{marginTop:"2em"}}>Location Information</h3>
                    <hr style={{backgroundColor:"#1d5797",height:"5px", float:"left", width:"5em", marginBottom:"2em"}}/>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1" style={{border:"1px solid" ,borderColor:"#f2f2f2",boxShadow: "2px 3px #f2f2f2", padding:"15px", height:"290px"}}>
                            <h5><strong>Our Address</strong></h5>
                            <address>
                        <span style={{color:'#1d5797'}} className="fa fa-address-card" aria-hidden="true"></span>: FJS LOGISTICS DWC-LLC,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Center, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai World Central,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P.O. Box 182113, Dubai, U. A. E <br/>
                          <i style={{color:'#1d5797'}} className="fa fa-fax fa-lg"></i>: +971 48053900<br />
                          <i style={{color:'#1d5797'}} className="fa fa-phone fa-lg"></i>: +971 507163192 / +971 524131176<br />
                          <i style={{color:'#1d5797'}} className="fa fa-envelope fa-lg"></i>: <a href="mailto:t.thoppil@fjslogistics.com">
                          t.thoppil@fjslogistics.com</a>
                        </address>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            {/* <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a> */}
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope"></i> Email</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1" style={{border:"1px solid" ,borderColor:"#f2f2f2",boxShadow: "2px 3px #f2f2f2", padding:"15px"}}>
                        <h5><strong>Map of our Location</strong></h5>
                        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "500px"}}>
                            <iframe src="https://maps.google.com/maps?q=Dubai World Central&t=&z=13&ie=UTF8&iwloc=&output=embed&z=15" frameborder="0"
                            style={{border:"0"}} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                        <hr style={{backgroundColor:"#1d5797",height:"5px", float:"left", width:"5em", marginBottom:"2em"}}/>
                    </div>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstname" id="firstname" name="firstname"
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
                                        <Control.text model=".lastname" className="form-control" 
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
                                        <Control.text model=".telnum" id="telnum" className="form-control" name="telnum"
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
                                        <Control.text model=".email" className="form-control" id="email" name="email"
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
                                        <Control.textarea model=".message" className="form-control" id="message" name="message"
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
            </div>
        );
    }
}

export default Contact;