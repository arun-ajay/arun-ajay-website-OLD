import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Home from "./components/pages/Home/Home"; //eslint-disable-next-line
import Projects from "./components/pages/Projects/Projects";
import Experiences from "./components/pages/experiences/Experiences";
import { Container, Row, Col } from 'reactstrap';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
      <Container fluid className = "main">
          <Row className = "nav">
          <Header></Header>
          </Row>
          <Switch>
            <Row className = "page">
              <Route path = "/" component = {Home} exact/>
              <Route path = "/Home" component = {Home} exact/>
              <Route path = "/Projects" component = {Projects} exact/>
              <Route path = "/Experiences" component = {Experiences} exact/>
            </Row>
          </Switch>
      </Container>
  );
}

export default App;
