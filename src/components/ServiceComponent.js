import React, { Component } from 'react';
import { Card, CardBody, 
    CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faTools, faBoxes, faShoppingBasket,
      faExchangeAlt, faTimesCircle, faNetworkWired,
      faObjectGroup, faFileAlt, faTruckLoading, 
      faTruckMoving, faLock, faShip } from '@fortawesome/free-solid-svg-icons'

class Service extends Component{

    componentDidMount(props){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <>
            <div className="container">
            <div className="row">
                        <Breadcrumb style={{marginTop:"1em"}}>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Services</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3 style={{textAlign:'center'}}><strong>OUR SERVICES</strong></h3>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <div className="contactback" style={{backgroundImage:'url("https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/vision.jpg")', opacity : '100%'}}>
                                <p style={{textAlign:"center", opacity:"90%"}}><strong>The company provides a wide range of services to cater to the needs of the customers, aiming to provide end-to-end logistics solutions. We aim to constantly evolve to include more services and products in order to serve our customer better.</strong></p>
                            </div>
                        </div>
            </div>
            <Fade bottom>
            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faShip} style={{fontSize:"30px", color:"#1d5797"}}/> CROSS DOCKING</CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            FJS logistics provides cross-docking services that mean preparing the warehouse’s 
                            docks for the incoming freight to quickly transfer materials onto outbound trucks. 
                            Not only this expedites the shipments to the customers but also has several other 
                            benefits like reduced overheads and labor costs.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faWarehouse} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  GENERAL WAREHOUSING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The company also offers General Warehousing that means different
                            Non-perishable goods like apparels, manufacturing raw material, 
                            automobile components, industrial products, etc., which do not have 
                            any specific requirements can be stored in a warehouse until they are needed.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faTruckMoving} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  FREIGHT FORWARDING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Freight forwarding is a mediator that provides an extensive range of 
                            logistics services to move the cargo from its point of origin to its 
                            final destination. It is a company that handles the shipping process with 
                            the help of an extensive network of third parties; FJS Logistics does all 
                            this for its clients, ensuring that you have the right tools at your disposal.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faTools} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  ASSEMBLY</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The importance of the process of assembling cannot be ignored and hence FJS logistics
                             also provides Assembly services that means when some goods are shipped as unassembled
                              parts to make the transit more convenient, more economical and save time, the company
                               helps in assembling back the pieces together according to their specifications or
                                requirements.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faBoxes} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  STORE READY PACKAGING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Good packaging speaks volume about the quality of the product. 
                            As the name suggests, this type of packaging is done to make any 
                            goods ready to be displayed in the store. It makes it possible to deliver 
                            a product to a shop and transform it in a matter of seconds into a display 
                            package presenting the products on the shelf. FJS logistics provides complete 
                            store-ready packaging solutions for its customers.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faShoppingBasket} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  FULFILLMENT</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The Company also does Order fulfillment for its clients that usually involves 
                            consisting of small orders, by the item or a few items, and shipped out by 3PL.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faExchangeAlt} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  REVERSE LOGISTICS</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The return movement of goods away from their final destination for proper disposal, 
                            or in case of any returns or damaged products, reverse logistics takes at least one 
                            step backwards in the supply chain. FJS logistic takes care of return logistics for 
                            their clients and ensure that goods are transported back in their best condition with 
                            the utmost care.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faTimesCircle} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  PRODUCT DESTRUCTION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            We realize that the proper destruction of unwanted goods is essential for a 
                            company’s brand reputation and product integrity. Hence, FJS logistics provide 
                            you with peace of mind when it comes to product destruction. We can provide a 
                            solution that meets your needs. Our dynamic solutions and accurate reporting will 
                            ensure complete satisfaction.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faNetworkWired} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  DISTRIBUTION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Distribution logistics is the link between production and the market; it 
                            includes all the processes involved in the distribution of goods - from 
                            manufacturing companies to clients. Distribution logistics includes goods 
                            handling, transport and interim storage.  FJS logistics takes care of everything 
                            you need when it comes to the safe and proper distribution of your goods.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faObjectGroup} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  CONSOLIDATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            FJS logistics does the process of Consolidation or the method of combining several smaller shipments into one full container for the ease of transportation, thus helping the client to reduce the cost of the shipment and to make delivery of goods quicker.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faFileAlt} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  DOCUMENTATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Logistics involve a lot of documentation and paperwork that can be very tiring as well as confusing; FJS logistics takes care of all the documentation work so that the clients don't have to worry.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faTruckLoading} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  CARGO CLEARING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The process of cargo clearing can be considerably troublesome; hence FJS takes care of cargo clearance giving its clients complete peace of mind.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:'310px',marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faTruckMoving} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  TRANSPORTATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Transportation is not just the essence of any logistics but also of any business activity in general. Transportation ensures that the goods safely reach their end-users within the scheduled time without incurring any unwanted expenditure. Transportation can be pretty tricky and this is why FJS logistics takes care of all the transportation needs for its clients.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-8">
                    <Card style={{height:'auto',marginTop:'20px', minHeight:'310px'}}>
                        <CardBody>
                            <CardTitle tag="h6" style={{fontSize:"19px"}}><FontAwesomeIcon icon={faLock} style={{fontSize:"30px", color:"#1d5797"}}/><strong>  VEHICLE STUFFING & LASHING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Lashing and stuffing are fixing of cargo on or in a container with wood, chains or any other materials that might be needed in order make the goods safe and secure them for the transportation. When the ship sails out to sea, it encounters various external forces which might damage the good. These motions are a threat for those ships which require cargo lashing and securing it on the open deck. If the storage of cargo is not loaded securely then there is no escape from the behavior of the seas and the wind once they show their rage. This might also cause damage to other cargo in the proximity of to the vessel’s structures and fittings and even throw the cargo overboard. Due to the importance of vehicle stuffing and lashing when it comes to transportation, FJS logistics takes care of this step of its customers.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>

            {/* VAS */}

            <Fade bottom>
            <h2 style={{textAlign:"center", marginTop:"2em"}}><strong>VALUE ADDED SERVICES</strong></h2>
            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left", width:"20%"}}/>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/packing.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong> PACKING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The Company also takes care of packaging for the good and does replenishing corrugated packaging solutions for companies and clients. Packing the goods safely into designated cartons or containers designed according to specific requirements of clients.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/inventory1.jpg" height="205" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  INVENTORY MANAGEMENT</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Inventory management can be a very tedious task; it involves various different processes like ordering, storing, rechecking, etc. It includes the management of raw materials as well and of components and finished products, as well as warehousing and processing such items.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/import.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  IMPORT/EXPORT SERVICES</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            FJS logistics takes the responsibility for export customs clearance as well as for the import process to reduce the burden on its clients.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/inspect.jpg" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  INSPECTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            FJS logistics provides complete expert solutions when it comes to inspection of good. It provides independent surveyors inspectors, inspectorate, verification inspection and survey, quality control services, marine survey and consultant, quality testing & analysis, sampling, certification, independent surveyors, etc. to ensure that the process of inspection is completed flawlessly.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/Sort1.jpg" height="205" style={{padding:"0px",margin:"0px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong> SORTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            By sorting we refer to the process of sorting out goods according to their features, characteristics, or the instructions that have been handed down. It is the process of identifying and sorting different items correctly and effectively.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"500px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/lashing1.jpg" style={{padding:"0px",margin:"0px", height:"205px"}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  LASHING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The process of Lashing means securing and fixing of cargo on or in a container with various items like wood, chains or other materials to make the cargo safe and seaworthy and avoid any damages or losses during the transportation.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/record.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  RECORD RETENTION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Every company needs a good retention policy and it is a key part of the lifecycle of a record. Retention Policy means how long business needs to keep a piece of information (a record), where it’s stored and how to dispose of the record when its time. Record retention is extremely important in every business and especially in logistics; it helps in managing the departure and arrival of shipments and many other activities. FJS logistics provides record retention management for all its clients to facilitate logistics business.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/Consolidation1.jpg" height="205" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  CONSOLIDATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The process of combining several smaller shipments into one full container is called Consolidation. It favors both the carrier and the shipper when done properly. In the case of the carrier, it helps to reduce the cost of the shipment and to make delivery of goods quicker. And for the shipper with the smaller shipment, he would not need to pay for a full container shipment.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/repack.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  REPACKING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Some goods require repackaging, which is a value-added service that takes place whenever a modification or reconfiguration is needed for a product. It is the process of packing the goods again according to instructions laid down.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/belting.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  BELTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The process of putting the goods on a conveyor belt is called Belting. This offers the highest efficiency and reliability together with the lowest power consumption and maintenance downtime. Logistics is all about being able to deliver, and that’s what belting solutions do, across a wide range of styles, sizes and materials, the belts set new standards for performance in every phase. These can be used for a number of activities from unloading to conveying to sorting to loading up again. 
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/shrink.jpg" height="205" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  SHRINK WRAPPING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Shrink-wrap is used as a packaging solution all around the world, due to its versatile nature items of different sizes and shapes can be packed efficiently. FJS logistic provides Shrink Wrapping solutions as well, that includes carefully wrapping goods in shrink-wraps according to their specifications or as per client's instructions.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/palet.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  PALLETISATION</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Palletisation means the act of placing objects, products or materials on pallets while being transported from one place to another. This process provides extra safety to the goods while being delivered.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row servicesrow">
            <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/assemble.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  ASSEMBLING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            The importance of the process of assembling cannot be ignored and hence FJS logistics also provides Assembly services that means when some goods are shipped as unassembled parts to make the transit more convenient, more economical and save time, the company helps in assembling back the pieces together according to their specifications or requirements.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                        <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/label.jpg" height="205" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  LABELLING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Good Labeling can be a game-changer for any business/product, keeping this in mind; FJS logistic provides labeling services for its clients. From preparing the product label's following any country's Government requirements to creating bespoke label design and sizes, the company does it all.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card style={{minHeight:"555px",marginTop:'20px',height:'auto'}}>
                        <CardBody>
                            <CardImg variant="top" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/bag.jpg" style={{padding:"0px",margin:"0px", height:'205px'}}></CardImg>
                            <CardTitle tag="h6" style={{marginTop:"15px", fontSize:"19px"}}><strong>  BAGGING OR KITTING</strong></CardTitle>
                            <hr style={{backgroundColor:"#1d5797",height:"5px", textAlign:"left"}}/>
                            <CardText>
                            Being an important service when it comes to logistics solutions, FJS logistics does Bagging or Kitting for the clients which means assembling of multiple products into a single package instead of packing them individually, hence making it easier to pick, pack, and deliver, with its own Stock-Keeping Unit (SKU).
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </Fade>
            </div>
          
            </>
        );
    }
}

export default Service;