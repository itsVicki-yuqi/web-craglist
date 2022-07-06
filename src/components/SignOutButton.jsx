import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    //console.log(accounts[0]);

    return (
        <Container>
            <Button><Link to={'/profile'}>{name}'s Profile</Link></Button>
            <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Redirect</Button>
        </Container>
        
    );
}