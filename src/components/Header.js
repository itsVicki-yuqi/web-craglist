import React from "react";

import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import logo from '../images/Beck-logo.jpg';

function Header(){
    return(
            <div>
            <Navbar expand="lg" bg="light" variant="light" style={{paddingBottom:'2rem'}} >
                <Navbar.Brand href="/">
                <img src={logo} class="d-inline-block align-top mx-2" width="30" height="30"/>
                The BeckGroup

                
                </Navbar.Brand>
            <Nav className="justify-content-end"> 
                <Nav.Link href="/signin">
                    Sign in
                </Nav.Link>
            </Nav>
            <Form inline>
                <Form.Control className="mr-sm-2"  type="text" placeholder="Search" aria-label="Search"/>
            </Form>
            </Navbar>
            </div>
    
        
    )
}
export default Header;