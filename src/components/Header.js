import React from "react";

import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import logo from '../images/Beck-logo.jpg';

function Header(){
    return(
            
            <Navbar expand="lg" bg="light" variant="light" style={{paddingBottom:'1rem'}} >
                <Navbar.Brand href="/" className="col-6 py-3">
                <img src={logo} class="d-inline-block align-top mx-2" width="30" height="30"/>
                The BeckGroup

                
                </Navbar.Brand>
            <Nav className="col-3 justify-content-end"> 
                <Nav.Link href="/profile">
                    Sign in
                </Nav.Link>
            </Nav>
            <Nav inline className="col-3 mx-auto">
            <Form >
                <Form.Control className="w-50 mx-auto"  type="text" placeholder="Search" aria-label="Search"/>
            </Form>
            </Nav>
            </Navbar>
            
    
        
    )
}
export default Header;