import React from 'react';
import Container from "@material-ui/core/Container";

import './App-header.css';

function AppHeader() {
    return (
        <header className="App-header">
            <Container maxWidth="lg">
                <h1 className="App-header__title">Task 1</h1>
            </Container>
        </header>
    )
}

export default AppHeader;