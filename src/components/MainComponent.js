import React, { Component } from 'react';
import { UncontrolledCarousel, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faTools, faTruckLoading, faTruckMoving, faGlobe, faShip, faEye, faBullseye, faArrowRight } from '@fortawesome/free-solid-svg-icons';


class Main extends Component{

    componentDidMount(props){
        window.scrollTo(0, 0);
        let i = 0;
        for(i=0;i<5;i++){
        document.getElementsByClassName('carousel-caption')[i].classList.remove('d-none');
        document.getElementsByClassName('carousel-caption')[i].classList.remove('d-md-block');
        document.getElementsByClassName('carousel-caption')[i].classList.add('font-weight-bold');
        }
           
    }
    

    render(){
        const items = [
            {
                src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel2.jpg',
                altText: 'Shipping & Cargo Clearing',
                caption: 'Shipping & Cargo Clearing',
                key: '1'
              },
              {
                src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel1.jpg',
                altText: 'General Warehousing',
                caption: 'General Warehousing',
                key: '2'
              },
              {
                src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel3.jpg',
                altText: 'Freight Forwarding & Logistics',
                caption: 'Freight Forwarding & Logistics',
                key: '3'
              },
              {
                src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel4.jpg',
                altText: 'Cargo Clearing',
                caption: 'Cargo Clearing',
                key: '4'
              },
              {
                src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel5.jpg',
                altText: 'Transportation',
                caption: 'Transportation',
                key: '5'
              }
        ];

        return(
    <>
        <div>
            <UncontrolledCarousel interval={2500} style={{height:'auto'}} items={items} />
        </div>
        <div className="container">
        <Fade bottom>
            <div className="row aboutusrow">
                <div className="col-12 col-md-6" style={{marginBottom:"10px"}}>
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/newabout.jpg" width="550" alt="aboutus" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3">ABOUT US</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            FJS logistics provides the best services and solutions to its customers, offers timely delivery, and
                            excellent support services without arbitrating on the quality and all this at economical rates.
                            Strategically headquartered in Dubai, with its warehouse space in DIP-2 that provides quick
                            access to numerous main roads and business hubs and owning multiple warehouse and open yard facilities in Dubai Main Land in JAFZA. FJS
                            logistics offers an array of services to suit the diverse needs of the customers and also to keep up
                            with the fast-paced trends of the market. Owning to its broad network, use of cutting-edge
                            technology and market-expertise, the company strives to be amongst the leaders in its respective
                            field.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row missionrow">
                <div className="col-12 col-md-6">
                    <Card style={{backgroundColor:"#1d5797",height:"300px", textAlign:"center"}}>
                    <FontAwesomeIcon icon={faEye} style={{fontSize:"50px", color:"#ebf8ff",textAlign:"center", margin:'auto', marginTop:'10px'}}/>
                        <CardBody>
                            <CardTitle tag="h3" style={{textAlign:"center",color:"#ebf8ff"}}><strong>OUR VISION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText style={{color:"#ebf8ff", padding:'20px'}}>
                                Our vision is to become the customer’s first choice in the industry.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6">
                    <img style={{height:"300px", marginBottom: "10px"}} className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/vision.jpg" height="298" width="539" alt="vision" />
                </div>
            </div>
            <div className="row missionrow2">
                <div className="col-12 col-md-6">
                    <img style={{height:"300px", marginBottom: "10px"}}  className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/mission.jpg" height="298" width="539" alt="mission" />
                </div>
                <div className="col-12 col-md-6">
                    <Card style={{backgroundColor:"#1d5797",height:"300px", textAlign:"center"}}>
                    <FontAwesomeIcon icon={faBullseye} style={{fontSize:"50px", color:"#ebf8ff",textAlign:"center", margin:'auto', marginTop:'10px'}}/>
                        {/* <span className="fa fa-bullseye" style={{color:"#",fontSize:"", marginTop:"10px",textAlign:"center"}}></span> */}
                        <CardBody>
                            <CardTitle tag="h3" style={{textAlign:"center",color:"#ebf8ff"}}><strong>OUR MISSION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText style={{color:"#ebf8ff", padding:'20px'}}>
                                Our mission is to always put our customers first and provide them with the best quality products at the best rates.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        {/* </div> */}
        {/* <div className="container qualitycontrol"> */}
            <div className="row qualitycontrolrow">
                <div className="col-12 col-md-6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3"><strong>QUALITY CONTROL</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            All our products and services go through a series of stringent quality control checks to ensure only the best ones reach our valued customers. Being strict on quality control not only helps us in identifying the loopholes but also encourages us to constantly improve our techniques.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6" style={{marginTop:"10px"}}>
                    <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/quality1.jpg" height="430" width="580" alt="quality" />
                </div>
            </div>
            
            <h2 style={{textAlign:"center", marginTop:'200px'}}><strong>OUR SERVICES</strong></h2>
            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left", width:"20%"}}/>
            </Fade>
            <Fade left>
            <div className="row servicesrow">
                <div className="col-12 col-md-12">
                    <Card style={{marginTop:'20px'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"20px"}}><FontAwesomeIcon icon={faGlobe} style={{fontSize:"30px", color:"#1d5797"}}/> 3<sub>rd</sub> PARTY LOGISTICS</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Gain complete and customized control over your logistics , with our 3PL Logistics Services.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="row servicesrow">
                <div className="col-12 col-md-12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"20px"}}><FontAwesomeIcon icon={faWarehouse} style={{fontSize:"30px", color:"#1d5797"}}/> GENERAL WAREHOUSING</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The company also offers General Warehousing that means different
                            Non-perishable goods like apparels, manufacturing raw material, 
                            automobile components, industrial products, etc., which do not 
                            have any specific requirements can be stored in a warehouse until 
                            they are needed.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className="row servicesrow">
                <div className="col-12 col-md-12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"20px"}}><FontAwesomeIcon icon={faShip} style={{fontSize:"30px", color:"#1d5797"}}/> CROSS DOCKING</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            FJS logistics provides cross-docking services that mean preparing the warehouse’s docks for the incoming freight to quickly transfer materials onto outbound trucks.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="row servicesrow">
                <div className="col-12 col-md-12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"20px"}}><FontAwesomeIcon icon={faTruckLoading} style={{fontSize:"30px", color:"#1d5797"}}/> FREIGHT FORWARDING</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Freight forwarding is a mediator that provides an extensive range of logistics services to move the cargo from its point of origin to its final destination.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className="row servicesrow">
                <div className="col-12 col-md-12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"20px"}}><FontAwesomeIcon icon={faTruckMoving} style={{fontSize:"30px", color:"#1d5797"}}/> TRANSPORTATION</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Transportation is not just the essence of any logistics but also of any business activity in general.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="row servicesrow">
                <div className="col-12 col-md-12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"20px"}}><FontAwesomeIcon icon={faTools} style={{fontSize:"30px", color:"#1d5797"}}/> VALUE ADDED SERVICES</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            FJS logistics understand that logistics is a complex business and consists of various different activities.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="row">
                <div className="col-12 col-md-12 m-auto">
                <Link to="/service" className="btn btn-info btnlink" style={{marginTop:'2em',float:'right'}}>Click here for more <FontAwesomeIcon icon={faArrowRight} style={{color:"#ebf8ff"}}/></Link>
                </div>
            </div>
            </Fade>
        
        </div>
        </>
        );
    }

}

export default Main;