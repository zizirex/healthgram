import React from 'react';
import Pricing from './Card.jsx';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, NavLink as Link } from "react-router-dom";
import Jumbo from "./Jumbotron";
import List from "./Media";
import How from "./howto";
import Logo from "./component/media/logo01.png"

import Price from "./component/Pricing";



const Navigation = () => {

    return (
        <Navbar color="#0079ff" expand="lg" default collapseonSelect>

            <NavLink to="/" tag={Link} className="col-md-2"><img src={Logo} alt="" className="logo"/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavbarToggler/>
            <Collapse className="mr-2" id="navbarSupportContent">
                        <Nav className="ml-auto" navbar>
                            <NavLink navbar>Planner</NavLink>
                            <NavLink className="ml-auto" to="/partner" tag={Link}>Partner</NavLink>
                            <NavLink className="ml-auto" to="/pricing" tag={Link}>Pricing</NavLink>
                            <NavLink className="ml-auto">Sign In</NavLink>
                        </Nav>
            </Collapse>
        </Navbar>

            )
        }


export default Navigation;