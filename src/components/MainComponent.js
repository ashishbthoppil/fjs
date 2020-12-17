import React, { Component } from 'react';
import { UncontrolledCarousel, Card, CardBody, 
         CardTitle, CardText, CardImg, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel2.jpg',
                    altText: 'Shipping & Cargo Clearing',
                    header: 'Shipping & Cargo Clearing',
                    key: '1'
                  },
                  {
                    src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel1.jpg',
                    altText: 'General Warehousing',
                    header: 'General Warehousing',
                    key: '2'
                  },
                  {
                    src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel3.jpg',
                    altText: 'Freight Forwarding & Logistics',
                    header: 'Freight Forwarding & Logistics',
                    key: '3'
                  },
                  {
                    src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel4.jpg',
                    altText: 'Cargo Clearing',
                    header: 'Cargo Clearing',
                    key: '4'
                  },
                  {
                    src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel5.jpg',
                    altText: 'Transportation',
                    header: 'Transportation',
                    key: '5'
                  }
            ]
        }
    }

    render(){
        return(
    <>
        <div>
            <UncontrolledCarousel interval={2500} style={{height:'auto'}} items={this.state.items} />
        </div>
        <div className="container">
        <Fade bottom>
            <div className="row aboutusrow">
                <div className="col-12 col-md-6 m-auto">
                    <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/aboutus.jpg" height="480" width="490" alt="aboutus" />
                </div>
                <div className="col-12 col-md-6">
                    <Card style={{marginTop:'20px'}}>
                        <CardBody>
                            <CardTitle tag="h3"><strong>ABOUT US</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics provides the best services and solutions to its customers, offers timely delivery, and
                            excellent support services without arbitrating on the quality and all this at economical rates.</p>
                            <p>Strategically headquartered in Dubai, with its warehouse space in DIP-2 that provides quick
                            access to numerous main roads and business hubs and owning a spacious total area of 25,700 sq
                            meters, and a built-up area of 10,000 sq meters, including Bulk and Racked storage area. FJS
                            logistics offers an array of services to suit the diverse needs of the customers and also to keep up
                            with the fast-paced trends of the market. Owning to its broad network, use of cutting-edge
                            technology and market-expertise, the company strives to be amongst the leaders in its respective
                            field.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        {/* </div> */}
        {/* <div className="container mission"> */}
            <div className="row missionrow">
                <div className="col-12 col-md-6">
                    <Card style={{backgroundColor:"#1d5797",height:"300px", textAlign:"center"}}>
                        <span className="fa fa-eye" style={{color:"#ebf8ff",fontSize:"50px", marginTop:"10px",textAlign:"center"}}></span>
                        <CardBody>
                            <CardTitle tag="h3" style={{textAlign:"center",color:"#ebf8ff"}}><strong>OUR VISION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText style={{color:"#ebf8ff"}}>
                                Our vision is to become the customer’s first choice in the industry.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6">
                    {/* <Card style={{height:"300px"}}>
                        <CardBody style={{padding:"0px"}}> */}
                            <img style={{height:"300px"}} className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/vision.jpg" height="298" width="539" alt="vision" />
                        {/* </CardBody>
                    </Card> */}
                </div>
            </div>
            <div className="row missionrow2">
                <div className="col-12 col-md-6">
                    {/* <Card style={{height:"300px"}}>
                        <CardBody style={{padding:"0px"}}> */}
                            <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/mission.jpg" height="298" width="539" alt="mission" />
                        {/* </CardBody> */}
                    {/* </Card> */}
                </div>
                <div className="col-12 col-md-6">
                    <Card style={{backgroundColor:"#1d5797",height:"300px", textAlign:"center"}}>
                        <span className="fa fa-bullseye" style={{color:"#ebf8ff",fontSize:"50px", marginTop:"10px",textAlign:"center"}}></span>
                        <CardBody>
                            <CardTitle tag="h3" style={{textAlign:"center",color:"#ebf8ff"}}><strong>OUR MISSION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText style={{color:"#ebf8ff"}}>
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
                            <p>All our products and services go through a series of stringent quality control checks to ensure only the best ones reach our valued customers.</p><p> Being strict on quality control not only helps us in identifying the loopholes but also encourages us to constantly improve our techniques.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/quality.jpg" height="430" width="580" alt="quality" />
                </div>
            </div>
            
            <h2 style={{textAlign:"center", marginTop:'200px'}}><strong>OUR SERVICES</strong></h2>
            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left", width:"20%"}}/>
            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{marginTop:'20px'}}>
                        <CardBody>
                            <CardTitle tag="h6"><span style={{fontSize:"30px", color:"#1d5797"}} className="fa fa-ship"></span><strong>  CROSS DOCKING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>All our products and services go through a series of stringent quality control checks to ensure only the best ones reach our valued customers.</p><p> Being strict on quality control not only helps us in identifying the loopholes but also encourages us to constantly improve our techniques.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{marginTop:'20px'}}>
                        <CardBody>
                            <CardTitle tag="h6"><span style={{fontSize:"30px", color:"#1d5797"}} className="fa fa-archive"></span><strong>  GENERAL WAREHOUSING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>All our products and services go through a series of stringent quality control checks to ensure only the best ones reach our valued customers.</p><p> Being strict on quality control not only helps us in identifying the loopholes but also encourages us to constantly improve our techniques.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{marginTop:'20px'}}>
                        <CardBody>
                            <CardTitle tag="h6"><span style={{fontSize:"30px", color:"#1d5797"}} className="fa fa-truck"></span><strong>  FREIGHT FORWARDING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>All our products and services go through a series of stringent quality control checks to ensure only the best ones reach our valued customers.</p><p> Being strict on quality control not only helps us in identifying the loopholes but also encourages us to constantly improve our techniques.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 m-auto">
                <Link to={process.env.PUBLIC_URL + "/service"} className="btn btn-info btnlink" style={{marginTop:'2em',float:'right'}}>Click here for more <span className="fa fa-arrow-right"></span></Link>
                </div>
            </div>
           
        {/* </div> */}
        {/* <div className="container valueadded"> */}
            <h2 style={{textAlign:"center", marginTop:'120px'}}><strong>VALUE ADDED SERVICES</strong></h2>
            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left", width:"20%"}}/>
            <div className="row valueaddedrow">
                <div className="col-12 col-md-4">
                    <Card style={{height:"500px", marginTop:'20px'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/packing.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  PACKING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The Company also takes care of packaging for the good and does replenishing corrugated packaging solutions for companies and clients. Packing the goods safely into designated cartons or containers designed according to specific requirements of clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{height:"500px", marginTop:'20px'}}>
                        <CardBody>
                        <CardImg className="img-fluid" variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/inventory.jpg" height="205" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  INVENTORY MANAGEMENT</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Inventory management can be a very tedious task; it involves various different processes like ordering, storing, rechecking, etc. It includes the management of raw materials as well and of components and finished products, as well as warehousing and processing such items.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{height:"500px",marginTop:'20px'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/import.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  IMPORT/EXPORT SERVICES</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics takes the responsibility for export customs clearance as well as for the import process to reduce the burden on its clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12">
                    <Link to={process.env.PUBLIC_URL + "/service"} className="btn btn-info btnlink" style={{marginTop:'2em',float:'right'}}>Click here for more <span className="fa fa-arrow-right"></span></Link>
                </div>
            </div>
        
        </Fade>
        </div>
        </>
        );
    }

}

export default Main;