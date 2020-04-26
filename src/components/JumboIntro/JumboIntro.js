import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedinIn,faInstagram, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import "./JumboIntro.css"

const JumboIntro = (props) => {
  return (

      <Jumbotron>
        <h1 className = "name">Arun Ajay</h1>
        <p className = "title">Engineer and Aspiring Software Developer</p>
        <Container>
          <Row>
            <Col>
            <Button className = "jumboButton"><FontAwesomeIcon icon = {faGithub} size="2x" className = "jumboIcon"/></Button>
            <div class = "divider"></div>
            <Button className = "jumboButton"><FontAwesomeIcon icon = {faLinkedinIn} size="2x" className = "jumboIcon"/></Button>
            <div class = "divider"></div>
            <Button className = "jumboButton"><FontAwesomeIcon icon = {faInstagram} size="2x" className = "jumboIcon"/></Button>
            <div class = "divider"></div>
            <Button className = "jumboButton"><FontAwesomeIcon icon = {faStackOverflow} size="2x" className = "jumboIcon"/></Button>
            </Col>
          </Row>
        </Container>

      </Jumbotron>

  );
};

export default JumboIntro;
