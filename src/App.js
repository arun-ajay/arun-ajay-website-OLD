import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Home from "./components/pages/Home/Home"; //eslint-disable-next-line
import { Container, Row, Col } from 'reactstrap';
function App() {
  return (
      <Container fluid className = "main">
        <Row className = "nav">
        <Header></Header>
        </Row>
        <Row className = "page">
          <Home></Home>
        </Row>
      </Container>
  );
}

export default App;
