import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Home from "./components/pages/Home/Home"; //eslint-disable-next-line
import Projects from "./components/pages/Projects/Projects";
import Experiences from "./components/pages/experiences/Experiences";
import { Container, Row, Col } from 'reactstrap';
import {Route,Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet'

function App() {
  return (
    <div>
      <Helmet>
        <title>Arun Ajay</title>
        <meta name="My name is Arun Ajay. I'm an aspiring software engineer with a background in Biomedical Engineering. I'm currently wrapping up my final round of 
        course for my Computer Science degree. Come visit to check out my latest projects and work experiences!"/>
      </Helmet>
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
    </div>

  );
}
export default App;
