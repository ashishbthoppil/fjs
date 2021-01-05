import React, { Component } from 'react';
import { Card, CardBody, 
    CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class About extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <>
        <div className="container">
        <Fade bottom>
        <div className="row">
            <Breadcrumb style={{marginTop:"1em"}}>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3 style={{textAlign:'center'}}><strong>ABOUT US</strong></h3>
                <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                <div className="contactback" style={{backgroundImage:'url("https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/vision.jpg")', opacity : '100%'}}>
                    <p style={{textAlign:"center", opacity:"90%"}}><strong>FJS logistics provides the best services and solutions to its customers, offers timely delivery, and excellent support services without arbitrating on the quality and all this at economical rates.</strong></p>
                </div>
            </div>
        </div>
        </Fade>
        <Fade bottom>
            <div className="row aboutusrow">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/newabout.jpg" width="520" alt="aboutus" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <Card style={{border:'none', boxShadow:'none'}}>
                        <CardBody>
                            <CardTitle tag="h3"><strong>COMPANY OVERVIEW</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Strategically headquartered in Dubai, with its warehouse space in DIP-2 that provides quick access to numerous main roads and business hubs and owning a spacious total area of 12,500 sq meters, and a built-up area of 7,500 sq meters, including Bulk and Racked storage area and an open yard storage facility of 10000 Sq Mtr in Dubai Industrial City. FJS logistics offers an array of services to suit the diverse needs of the customers and also to keep up with the fast-paced trends of the market. Owning to its broad network, use of cutting-edge technology and market-expertise, the company strives to be amongst the leaders in its respective field. </p>
                            <p>Apart from this, we also have owned and leased facilities in Dubai's main Land and in JAFZA to meet our customer’s requirements.</p>
                            <p>The company has an open yard storage facility that has an area of 20000 sq meters in Dubai Industrial City, which is suitable for various reasons like Project Cargo, Steel Product, Equipment and Machinery, etc.</p>
                            <p>FJS logistics provides the best services and solutions to its customers, offers timely delivery, and excellent support services without arbitrating on the quality and all this at economical rates.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row director">
            <div className="col-12 col-md-12 m-auto">
                <Card>
                    <CardBody>
                    <CardTitle tag="h3"><strong>DIRECTORS MESSAGE</strong></CardTitle>
                        <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                        <CardText>
                            <p>
                            Our overall business strength is shaped by our core strategies and values. We work tirelessly to provide our customers unparalleled services and quality products at a competitive price. We aim to emerge as a customer’s first choice, which is also our vision. We believe, when it comes to ethics and integrity, there can be no compromises, no excuses.</p>
                            <p>Integrity, competency, excellence, customer service and creativity – these values are the pillars of our Company.
                            </p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            </div>
            </Fade>
            
            <div className="row missionrow">
            <Fade left>
                <div className="col-12 col-md-6">
                    <Card style={{backgroundColor:"#1d5797",height:"300px", textAlign:"center"}}>
                        <span className="fa fa-eye" style={{color:"#ebf8ff",fontSize:"50px", marginTop:"10px",textAlign:"center"}}></span>
                        <CardBody>
                            <CardTitle tag="h3" style={{textAlign:"center",color:"#ebf8ff"}}><strong>OUR VISION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText style={{color:"#ebf8ff", padding:'20px'}}>
                                <p>Our vision is to become the customer’s first choice in the industry.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                </Fade>
                <Fade right>
                <div className="col-12 col-md-6">
                    <img style={{height:"300px"}} className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/vision.jpg" height="298" width="539" alt="vision" />
                        
                </div>
                </Fade>
            </div>
            
            
            <div className="row missionrow2">
            <Fade left>
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/mission.jpg" height="300" width="539" alt="mission" />
                      
                </div>
                </Fade>
                <Fade right>
                <div className="col-12 col-md-6">
                    <Card style={{backgroundColor:"#1d5797",height:"300px", textAlign:"center"}}>
                        <span className="fa fa-bullseye" style={{color:"#ebf8ff",fontSize:"50px", marginTop:"10px",textAlign:"center"}}></span>
                        <CardBody>
                            <CardTitle tag="h3" style={{textAlign:"center",color:"#ebf8ff"}}><strong>OUR MISSION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText style={{color:"#ebf8ff", padding:'20px'}}>
                                Our mission is to always put our customers first and provide them with the best quality products at the best rates.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                </Fade>
            </div>
            
            <Fade bottom>
            <div className="row qualitycontrolrow">
                <div className="col-12 col-md-6">
                    <Card style={{border:'none', boxShadow:'none'}}>
                        <CardBody>
                            <CardTitle tag="h3"><strong>QUALITY CONTROL</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>All our products and services go through a series of stringent quality control checks to ensure only the best ones reach our valued customers.</p><p> Being strict on quality control not only helps us in identifying the loopholes but also encourages us to constantly improve our techniques.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/quality1.jpg" height="430" width="580" alt="quality" />
                </div>
            </div>
            </Fade>
        </div>
        </>
        );
    }
}

export default About;