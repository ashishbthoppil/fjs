import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                        <strong><span className="fa fa-home fa-lg"></span> HOME</strong>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                        <strong><span className="fa fa-info fa-lg"></span> ABOUT US</strong>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/service">
                            <strong><span className="fa fa-briefcase fa-lg"></span> SERVICES</strong>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <strong><span className="fa fa-address-book fa-lg"></span> CONTACT US</strong>
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 m-auto">
                        <span style={{color:"#ebf8ff"}}><strong>Contact us</strong> :</span><a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/thankappenthoppil/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize:"20px", color:"#ebf8ff"}}/></a>
                        <a className="btn btn-social-icon" href="mailto:t.thoppil@fjslogistics.com"><i className="fa fa-envelope" style={{fontSize:"20px", color:"#ebf8ff"}}></i></a>
                    </div>
                    <div className="col-12 col-md-6 m-auto">
                    <span style={{color:"#ebf8ff", float:'right'}}><strong>Tel no. </strong>: +971 4 805 3900 / +971 50 716 3192 </span>
                    </div>
                </div>
            </div>
        </Jumbotron>
        </>
        );
    }
}

export default TopHeader;