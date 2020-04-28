import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedinIn,faInstagram, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import {mediaData} from "./data"
import "./JumboIntro.css"

function JumboIntro(){


    var mediaArray = mediaData.map(d =>(
      <span>
        <Button onClick = {() => window.open(d.url,"_blank")} className = "jumboButton"><FontAwesomeIcon icon = {d.icon} size="3x" className = "jumboIcon"/></Button>
        <div className = "divider"></div>
      </span>
      
    ))
    return (

      <Jumbotron>
        <h1 className = "name">Arun Ajay</h1>
        <p className = "title">Engineer and Aspiring Software Developer!</p>
        <Container>
          <Row>
            <Col>
              {mediaArray}
            </Col>
          </Row>
        </Container>

      </Jumbotron>

  );

  
};

export default JumboIntro;
