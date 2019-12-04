import React from 'react';
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
import Logo from "./component/media/logo01.png"
import LogoSm from "./component/media/logo2.png"


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar  light expand="md" className="navContainer">
                    <NavbarBrand to="/" className="mr-auto logo-header" tag={Link}><img src={Logo} srcSet={`${LogoSm} 300w, ${Logo} 768w`} alt="" className="logo px-0 mx-0"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar className="ml-auto">
                            <NavLink className="ml-auto" to="/planner" tag={Link}>Planner</NavLink>
                            <NavLink className="ml-auto" to="/partner" tag={Link}>Partner</NavLink>
                            <NavLink className="ml-auto" to="/pricing" tag={Link}>Pricing</NavLink>
                            <NavLink className="ml-auto" to="/signin" tag={Link}>Sign In</NavLink>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

