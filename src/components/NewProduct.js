import React, { useState, useEffect } from "react";
import {Nav, Container, Breadcrumb, Row, Col, Card, Button, Navbar, Form} from 'react-bootstrap';
import {FaCcPaypal} from 'react-icons/fa';
import {SiVenmo} from 'react-icons/si';
import { useDispatch } from "react-redux";
import {saveProduct} from '../reducers/productSlice';
import {Link} from 'react-router-dom';



function NewProduct(){
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [condition, setCondition] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({title, price, description, location, condition, category}));
        console.log("dispatch")
    };
    return(
        <Container className="my-3">
                 <Nav aria-label="breadcrumb" className="mt-2 main-breadcrumb">
                    <Breadcrumb >
                        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a>User</a></Breadcrumb.Item>
                        <Breadcrumb.Item class="active" aria-current="page">Create a new post</Breadcrumb.Item>
                    </Breadcrumb>
                </Nav>
                <Form onSubmit={submitHandler}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                            
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price"/>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Location</Form.Label>
                            <Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
                                <option selected>-</option>
                                <option value="dallas">Dallas,TX</option>
                                <option value="austin">Austin,TX</option>
                                <option value="atlanta">Atlanta,GA</option>
                                <option value="charlotte">Charlotte,NC</option>
                                <option value="denver">Denver,CO</option>
                                <option value="fortworth">Fort Worth,TX</option>
                                <option value="southflorida">South Florida, FL</option>
                                <option value="tampa">Tampa, FL</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Condition</Form.Label>
                            <Form.Select value={condition} onChange={(e) => setCondition(e.target.value)}>
                                <option selected>-</option>
                                <option value="new">New</option>
                                <option value="likenew">Like new</option>
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </Form.Select>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Category</Form.Label>
                            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option selected>-</option>
                                <option value="appliance">Appliances</option>
                                <option value="baby">Baby and Kid</option>
                                <option value="furniture">Furnitures</option>
                                <option value="cloth">Clothes</option>
                                <option value="book">Books</option>
                                <option value="electronic">Electronics</option>

                            </Form.Select>
                        </Form.Group>                    
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Item description</Form.Label>
                            <Form.Control as="textarea" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter item description"/>
                        </Form.Group>                    
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Group as={Col} md="6" className="input-group">
                            <Form.Label>Upload pictures</Form.Label>
                            <div className="input-group">
                                <input type="file" class="form-control" id="inputGroupFile02"/>
                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                            
                        </Form.Group>                    
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Accepted payment methods</Form.Label>
                            <div>
                                
                               <FaCcPaypal size="5em" style={{marginLeft:'.5rem'}}/> 
                               <SiVenmo size="5em" style={{marginLeft:'1rem'}}/>

                            </div>
                            
                        </Form.Group>                    
                    </Form.Group>
                    <Form.Group><Button type="submit" variant="primary" block className="mb-3">CREATE</Button></Form.Group>
                    <Form.Group><Button type="button" variant="secondary" block><Link to={"/profile"}>CANCEL</Link></Button></Form.Group>
                    
                </Form>
                
            
        </Container>
    )
}
export default NewProduct;