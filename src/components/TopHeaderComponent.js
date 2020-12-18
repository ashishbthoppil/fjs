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
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/home">
                    <img id="logo" src="https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/logo.jpg" height="50" width="90" alt="FJS" />
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"></span><strong> HOME</strong>
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
                        <span style={{color:"#ebf8ff", fontFamily:'"Proxima Nova", Helvetica, Arial'}}><strong>Contact us</strong> :</span><a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/thankappenthoppil/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize:"20px", color:"#ebf8ff"}}/></a>
                        <a className="btn btn-social-icon" href="mailto:t.thoppil@fjslogistics.com"><i className="fa fa-envelope" style={{fontSize:"20px", color:"#ebf8ff"}}></i></a>
                    </div>
                    <div className="col-12 col-md-6 m-auto">
                    <span style={{color:"#ebf8ff", float:'right', fontFamily:'"Proxima Nova", Helvetica, Arial'}}><strong>Tel no. </strong>: +971 48053900 / +971 524131176 </span>
                    </div>
                </div>
            </div>
        </Jumbotron>
        </>
        );
    }
}

export default TopHeader;