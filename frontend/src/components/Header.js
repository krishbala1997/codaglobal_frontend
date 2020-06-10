import React from 'react'
import { Container } from 'semantic-ui-react';

export default function Header(props) {
    return (
        <Container>
            <div className="header-div">
                <span className="logout" onClick={props.logoutHandler}>Logout</span>
            </div>
            
        </Container>
    )
}
