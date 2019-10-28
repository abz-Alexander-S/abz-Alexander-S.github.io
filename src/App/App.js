import React from 'react';

import './App.css';
import AppHeader from "../App-header/App-header";
import AppBody from "../App-body/App-body";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
        <AppHeader />
        <Container className="App__container" maxWidth="sm">
            <AppBody />
        </Container>
    </div>
  );
}

export default App;
