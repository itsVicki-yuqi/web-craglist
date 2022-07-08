import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function handleLogout(instance) {
    
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });

}

/**
 * Renders a button which, when selected, will open a redirect for logout
 */
export const SignOutButton = () => {
    const { instance, accounts } = useMsal();
    const name = accounts[0].name;
    return (
        <Container>
            <Button><Link to={'/profile'}>{name}'s Profile</Link></Button>
            <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out</Button>
        </Container>
        
    );
}