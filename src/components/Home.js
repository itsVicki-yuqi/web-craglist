import React, {Component, useState} from "react";
import {Link} from 'react-router-dom';
import {Container, Card, Button, Row, Col } from 'react-bootstrap';
import image1 from '../images/1.jpg';
import { useSelector } from "react-redux";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { ProfileData } from "../components/ProfileData";
import { callMsGraph } from "../graph";

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
  
    const name = accounts[0] && accounts[0].name;
  
    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };
  
        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }
  
    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {graphData ? 
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
            }
        </>
    );
  };

function Home() {
    const productList = useSelector((state) => state.product);
        return(
           <Container className="my-3">
                <ProfileContent/>
               <Row className="d-flex flex-wrap">
                    {productList.map((product)=>
                    <Col key={product.id} className="p-2 flex-fill col-example" xs={4} sm={4}>
                        <Card style={{width:'18rem', height:'28rem'}}>
                            <Link style={{ color: 'black' }} to={'/productDetails/' + product.id}>
                                <Card.Img style={{width:'18rem',height:'18rem'}} variant="top" src={product.image}/>
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