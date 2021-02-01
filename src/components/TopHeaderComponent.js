import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhoneAlt, faSuitcase } from '@fortawesome/free-solid-svg-icons';

class TopHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
            <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} /> &nbsp;&nbsp;&nbsp;
                <NavbarBrand className="mr-auto">
                    <img id="logo" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/logo.jpg" height="70" width="130" alt="FJS" />
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="ml-auto" navbar style={{ bottom:"25px",right:"50px"}}>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                        <FontAwesomeIcon icon={faHome} style={{textAlign:"center", margin:'auto', marginTop:'10px'}}/>
                        <strong> HOME</strong> 
                        {/* <span className="fa fa-home fa-lg"></span> */}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                        <FontAwesomeIcon icon={faInfoCircle} style={{textAlign:"center", margin:'auto', marginTop:'10px'}}/>
                        <strong> ABOUT US</strong>
                        {/* <span className="fa fa-info fa-lg"></span>  */}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/service">
                        <FontAwesomeIcon icon={faSuitcase} style={{textAlign:"center", margin:'auto', marginTop:'10px'}}/>
                            <strong> SERVICES</strong>
                            {/* <span className="fa fa-briefcase fa-lg"></span>  */}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                        <FontAwesomeIcon icon={faPhoneAlt} style={{textAlign:"center", margin:'auto', marginTop:'10px'}}/>
                            <strong> CONTACT US</strong>
                            {/* <span className="fa fa-address-book fa-lg"></span> */}
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </div>
        </Navbar>
        </>
        );
    }
}

export default TopHeader;