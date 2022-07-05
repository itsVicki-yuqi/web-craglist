import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Container, Card, Button, Row, Col } from 'react-bootstrap';
import image1 from '../images/1.jpg';
import { useSelector } from "react-redux";

function Home() {
    const productList = useSelector((state) => state.product);
        return(
            
           <Container className="my-3">
               <Row className="d-flex flex-wrap">
                    {productList.map((product)=>
                    <Col key={product.id} className="p-2 flex-fill col-example" xs={4} sm={4}>
                        <Card style={{width:'18rem', height:'28rem'}}>
                            <Link style={{ color: 'black' }} to={'/productDetails/' + product.id}>
                                <Card.Img style={{width:'18rem',height:'18rem'}} variant="top" src={image1}/>
                            </Link>
                            <Card.Title><Link style={{ color: 'black' }} to={'/productDetails/' + product.id}>{product.title}</Link></Card.Title>
                            <Card.Text>$ {product.price}</Card.Text>
                            <Link to={'/productDetails/' + product.id}><Button variant="outline-primary">Details</Button></Link>
                        </Card>
                    </Col>
                    )}
                   
               </Row>
           </Container>
            
        )
    
}

export default Home;