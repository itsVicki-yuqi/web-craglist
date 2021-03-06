import React from "react";
import {Nav, Container, Breadcrumb, Row, Col, Card, Button, Navbar} from 'react-bootstrap';
import profileImage from "../images/profileImage.png";
import image1 from '../images/1.jpg';
import {Link} from 'react-router-dom';
import {useMsal} from '@azure/msal-react';

function Profile() {
    const {instance, accounts } = useMsal();


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
                                        <h4>{accounts[0].name}</h4>
                                        <p className="text-muted font-size-sm mb-1">Malibu, California</p>
                                        <p className="text-muted font-size-sm">{accounts[0].username}</p>
                                        
                                    </div>
                                </div>
                                
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Row>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Row>
                                        <Col sm={3}>
                                            <h6 className="mb-0">Full Name</h6>
                                        </Col>
                                        <Col sm={9} className="text-secondary">
                                        {accounts[0].name}
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
                                        {accounts[0].username}
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
                               </Card.Body>
                            </Card>
                        </Row>
                        
                    </Col>
                </Row>
                <Navbar className="light bg-light mb-3">
                   <h3 className="mx-auto">{accounts[0].name}'s Posts</h3> 
                </Navbar>
                <Navbar className="mb-3">
                    <Button className="btn-sm mx-auto border-3 rounded" variant="outline-secondary">
                        <Link to={"/newproduct"}><h5>Add a new Post</h5></Link>
                    </Button>
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
                                <Link to={'/productDetails'}><Button variant="outline-primary">Edit</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        )
}

export default Profile;