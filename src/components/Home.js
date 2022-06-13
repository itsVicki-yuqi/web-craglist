import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Container, Card, Button, Row, Col } from 'react-bootstrap';
import image1 from '../images/1.jpg';

export default class Home extends Component {
    render(){
        return(
            
           <Container className="mt-3">
               <Row className="d-flex flex-wrap">
                   <Col>
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