import React, {Component} from "react";
import {Nav, Container, Breadcrumb, Row, Col, Card, Button, Navbar} from 'react-bootstrap';
import profileImage from "../images/profileImage.png";
import image1 from '../images/1.jpg';
import {Link} from 'react-router-dom';

export default class Profile extends Component {
    render(){
        return(
            <Container>
                <Nav aria-label="breadcrumb" className="mt-2 main-breadcrumb">
                    <Breadcrumb >
                        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a>User</a></Breadcrumb.Item>
                        <Breadcrumb.Item class="active" aria-current="page">User Profile</Breadcrumb.Item>
                    </Breadcrumb>
                </Nav>
                <Row>
                    <Col className="mb-3" sm={4}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <Card.Img className="rounded-circle" style={{width:'150px'}} src={profileImage}/>
                                    <div className="mt-3">
                                        <h4>Tony Stark</h4>
                                        <p className="text-secondary mb-1">Engineer</p>
                                        <p className="text-muted font-size-sm mb-1">Malibu, California</p>
                                        <p className="text-muted font-size-sm">tony@gmail.com</p>
                                        <Button className="btn-primary btn-md mr-2">Edit</Button>
                                       
                                        <Button className="outline-primary">Password</Button>
                                    </div>
                                </div>
                                
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Row>
                                    <Col sm={3}>
                                        <h6 className="mb-0">Full Name</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                        Tony Stark
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col sm={3}>
                                        <h6 className="mb-0">Location</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                        Malibu, California
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col sm={3}>
                                        <h6 className="mb-0">Email Address</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                        stark@gmail.com
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col sm={3}>
                                        <h6 className="mb-0">Phone</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                        (111) 222-3456
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col sm={12}>
                                        <Link to={"/productDetails"}>
                                            <Button className="outline-primary">Edit</Button>
                                        </Link>
                                    </Col>
                                </Row>



                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Navbar className="light bg-light mb-3">
                   <h3 className="mx-auto">Tony's Posts</h3> 
                </Navbar>
                <Row>
                    <Col sm={3}>
                        <Card style={{width:'18rem', height:'28rem'}}>
                            <Link to={"/productDetails"}>
                                <Card.Img style={{width:'18rem',height:'18rem'}} variant="top" src={image1}/>
                            </Link>
                            <Card.Body>
                                <Card.Title>
                                <Link style={{ color: 'black' }} to={'/productDetails'}>Shoe</Link>
                                </Card.Title>
                                <Card.Text>$18</Card.Text>
                                <Link to={'/productDetails'}><Button variant="outline-primary">Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}