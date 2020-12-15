import React, { Component } from 'react';
import { Card, CardBody, 
    CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faTools, faBoxes, faShoppingBasket, faExchangeAlt, faTimesCircle, faNetworkWired, faObjectGroup, faFileAlt, faTruckLoading, faTruckMoving, faLock } from '@fortawesome/free-solid-svg-icons'

class Service extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Fade>
            <div className="container">
            <div className="row">
                        <Breadcrumb style={{marginTop:"1em"}}>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Services</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3 style={{textAlign:'center'}}><strong>OUR SERVICES</strong></h3>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <div className="contactback" style={{backgroundImage:'url(./assets/images/vision.jpg)'}}>
                                <p style={{textAlign:"center", opacity:"90%"}}><strong>The company provides a wide range of services to cater to the needs of the customers, aiming to provide end-to-end logistics solutions. We aim to constantly evolve to include more services and products in order to serve our customer better.</strong></p>
                            </div>
                        </div>
            </div>
            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><span style={{fontSize:"30px", color:"#1d5797"}} className="fa fa-ship"></span><strong>  CROSS DOCKING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics provides cross-docking services that mean preparing the warehouse’s docks for the incoming freight to quickly transfer materials onto outbound trucks. Not only this expedites the shipments to the customers but also has several other benefits like reduced overheads and labor costs.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faWarehouse} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  GENERAL WAREHOUSING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The company also offers General Warehousing that means different
Non-perishable goods like apparels, manufacturing raw material, automobile components, industrial products, etc., which do not have any specific requirements can be stored in a warehouse until they are needed.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><span style={{fontSize:"30px", color:"#1d5797"}} className="fa fa-truck"></span><strong>  FREIGHT FORWARDING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Freight forwarding is a mediator that provides an extensive range of logistics services to move the cargo from its point of origin to its final destination. It is a company that handles the shipping process with the help of an extensive network of third parties; FJS Logistics does all this for its clients, ensuring that you have the right tools at your disposal.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faTools} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  ASSEMBLY</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The importance of the process of assembling cannot be ignored and hence FJS logistics also provides Assembly services that means when some goods are shipped as unassembled parts to make the transit more convenient, more economical and save time, the company helps in assembling back the pieces together according to their specifications or requirements.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faBoxes} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  STORE READY PACKAGING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Good packaging speaks volume about the quality of the product. As the name suggests, this type of packaging is done to make any goods ready to be displayed in the store. It makes it possible to deliver a product to a shop and transform it in a matter of seconds into a display package presenting the products on the shelf. FJS logistics provides complete store-ready packaging solutions for its customers.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faShoppingBasket} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  FULFILLMENT</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The Company also does Order fulfillment for its clients that usually involves consisting of small orders, by the item or a few items, and shipped out by 3PL.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faExchangeAlt} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  REVERSE LOGISTICS</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The return movement of goods away from their final destination for proper disposal, or in case of any returns or damaged products, reverse logistics takes at least one step backwards in the supply chain. FJS logistic takes care of return logistics for their clients and ensure that goods are transported back in their best condition with the utmost care.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faTimesCircle} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  PRODUCT DESTRUCTION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>We realize that the proper destruction of unwanted goods is essential for a company’s brand reputation and product integrity. Hence, FJS logistics provide you with peace of mind when it comes to product destruction. We can provide a solution that meets your needs. Our dynamic solutions and accurate reporting will ensure complete satisfaction.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faNetworkWired} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  DISTRIBUTION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Distribution logistics is the link between production and the market; it includes all the processes involved in the distribution of goods - from manufacturing companies to clients. Distribution logistics includes goods handling, transport and interim storage.  FJS logistics takes care of everything you need when it comes to the safe and proper distribution of your goods.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faObjectGroup} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  CONSOLIDATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics does the process of Consolidation or the method of combining several smaller shipments into one full container for the ease of transportation, thus helping the client to reduce the cost of the shipment and to make delivery of goods quicker.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faFileAlt} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  DOCUMENTATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Logistics involve a lot of documentation and paperwork that can be very tiring as well as confusing; FJS logistics takes care of all the documentation work so that the clients don't have to worry.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faTruckLoading} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  CARGO CLEARING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The process of cargo clearing can be considerably troublesome; hence FJS takes care of cargo clearance giving its clients complete peace of mind.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'380px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faTruckMoving} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  TRANSPORTATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Transportation is not just the essence of any logistics but also of any business activity in general. Transportation ensures that the goods safely reach their end-users within the scheduled time without incurring any unwanted expenditure. Transportation can be pretty tricky and this is why FJS logistics takes care of all the transportation needs for its clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-8">
                    <Card style={{height:'auto',marginTop:'20px', minHeight:'380px'}}>
                        <CardBody>
                            <CardTitle tag="h6"><FontAwesomeIcon icon={faLock} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  VEHICLE STUFFING & LASHING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Lashing and stuffing are fixing of cargo on or in a container with wood, chains or any other materials that might be needed in order make the goods safe and secure them for the transportation. When the ship sails out to sea, it encounters various external forces which might damage the good. These motions are a threat for those ships which require cargo lashing and securing it on the open deck. If the storage of cargo is not loaded securely then there is no escape from the behavior of the seas and the wind once they show their rage. This might also cause damage to other cargo in the proximity of to the vessel’s structures and fittings and even throw the cargo overboard. Due to the importance of vehicle stuffing and lashing when it comes to transportation, FJS logistics takes care of this step of its customers.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            

            {/* VAS */}

          
            <h2 style={{textAlign:"center", marginTop:"2em"}}><strong>VALUE ADDED SERVICES</strong></h2>
            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left", width:"20%"}}/>
            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/packing.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  PACKING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The Company also takes care of packaging for the good and does replenishing corrugated packaging solutions for companies and clients. Packing the goods safely into designated cartons or containers designed according to specific requirements of clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="assets/images/inventory.jpg" height="205" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  INVENTORY MANAGEMENT</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Inventory management can be a very tedious task; it involves various different processes like ordering, storing, rechecking, etc. It includes the management of raw materials as well and of components and finished products, as well as warehousing and processing such items.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/import.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  IMPORT/EXPORT SERVICES</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics takes the responsibility for export customs clearance as well as for the import process to reduce the burden on its clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/inspect.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  INSPECTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The Company also takes care of packaging for the good and does replenishing corrugated packaging solutions for companies and clients. Packing the goods safely into designated cartons or containers designed according to specific requirements of clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="assets/images/sort.jpg" height="205" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  SORTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Inventory management can be a very tedious task; it involves various different processes like ordering, storing, rechecking, etc. It includes the management of raw materials as well and of components and finished products, as well as warehousing and processing such items.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/lashing.jpg" style={{padding:"0px",margin:"0px", height:"205px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  LASHING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics takes the responsibility for export customs clearance as well as for the import process to reduce the burden on its clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/record.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  RECORD RETENTION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The Company also takes care of packaging for the good and does replenishing corrugated packaging solutions for companies and clients. Packing the goods safely into designated cartons or containers designed according to specific requirements of clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="assets/images/consolidation.jpg" height="205" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  CONSOLIDATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Inventory management can be a very tedious task; it involves various different processes like ordering, storing, rechecking, etc. It includes the management of raw materials as well and of components and finished products, as well as warehousing and processing such items.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/repack.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  REPACKING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics takes the responsibility for export customs clearance as well as for the import process to reduce the burden on its clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/palet.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  PALLETISATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The Company also takes care of packaging for the good and does replenishing corrugated packaging solutions for companies and clients. Packing the goods safely into designated cartons or containers designed according to specific requirements of clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="assets/images/shrink.jpg" height="205" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  SHRINK WRAPPING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Inventory management can be a very tedious task; it involves various different processes like ordering, storing, rechecking, etc. It includes the management of raw materials as well and of components and finished products, as well as warehousing and processing such items.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/belting.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  BELTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics takes the responsibility for export customs clearance as well as for the import process to reduce the burden on its clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/assemble.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  ASSEMBLING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>The Company also takes care of packaging for the good and does replenishing corrugated packaging solutions for companies and clients. Packing the goods safely into designated cartons or containers designed according to specific requirements of clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="assets/images/label.jpg" height="205" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  LABELLING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>Inventory management can be a very tedious task; it involves various different processes like ordering, storing, rechecking, etc. It includes the management of raw materials as well and of components and finished products, as well as warehousing and processing such items.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="assets/images/bag.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px"}}><strong>  BAGGING OR KITTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            <p>FJS logistics takes the responsibility for export customs clearance as well as for the import process to reduce the burden on its clients.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </div>
            </Fade>
            </>
        );
    }
}

export default Service;