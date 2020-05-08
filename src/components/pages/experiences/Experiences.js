import React from 'react';
import "./Experiences.css";
import {experiencesData} from "./data";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container,Row,Col} from 'reactstrap';


const Experiences = (props) => {

  var experiencesArray = experiencesData.map(d =>(
      <Col md = "auto" sm = "auto" xs = "auto" className="experienceCol">
        <Card className = "experienceCard">
          <CardImg top width="100%" src={require('./assets/'+d.image)} className = "experienceCardImage" alt = "blank"/>
          <CardBody className = "experienceCardBody">
            <CardTitle style ={{color: d.fontColor}} className = "experienceCardTitle">{d.company}</CardTitle>
            <CardSubtitle style ={{color: d.fontColor}}   className = "experienceCardSubtitle">{d.title}</CardSubtitle>
            <CardSubtitle style ={{color: d.fontColor}}  className = "experienceCardSubtitle">{d.location}</CardSubtitle>
            <CardSubtitle style ={{color: d.fontColor}}  className = "experienceCardSubtitle">{d.term}</CardSubtitle>
            <CardSubtitle className = "experienceCardSubtitle"><br></br>{d.technologies.map(tech=>(
          <FontAwesomeIcon style = {{color: tech.color}} icon = {tech.icon} size="2x" className = "experienceCardIcon"/>))}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
  ))
  return (
    <div className = "homeDiv">
      <Container fluid = "xs">
      <Row className = "experiencesRow">
        {experiencesArray}
      </Row>
      </Container>

    </div>
    
  );
};

export default Experiences;
