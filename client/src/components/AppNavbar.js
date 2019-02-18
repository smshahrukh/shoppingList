import React, { Component } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="sm"
                className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping Cart</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        </Nav>
              </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}

export default AppNavbar;