import React, {Component} from "react";
import {Container, Row, Col, Carousel } from "react-bootstrap";
import img1 from "../images/images.jfif";
import img2 from "../images/images2.jfif";
import {useParams} from 'react-router-dom';
 
function ProductDetails (props) {
    const params = useParams();
    console.log(props);
        return(
           <Container>
               <Row >
                   <Col sm={6} >
                        <Carousel >
                            <Carousel.Item style={{height:'36rem'}}>
                                <img src={img1} class="img-thumbnail w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item style={{height:'36rem'}}>
                                <img src={img2} class="img-thumbnail w-100 h-100"/>
                            </Carousel.Item>
                        </Carousel>
                   </Col>
                   <Col sm={6} >
                       <h2>Shoe</h2>
                       <br />
                       <p>description</p>
                       <br />
                       <h3>Contact Info</h3>
                   </Col>

               </Row>
           </Container> 
           
            
        )
    
}

export default ProductDetails;