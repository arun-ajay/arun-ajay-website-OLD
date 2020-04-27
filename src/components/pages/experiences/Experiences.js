import React from 'react';
import "./Experiences.css";
import {experiencesData} from "./data";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Experiences = (props) => {

  var experiencesArray = experiencesData.map(d =>(
    <span>
      <Card className = "experienceCard">
        <CardImg top width="100%" src={require("./assets/bofaml-og-logo.jpg")} className = "experienceCardImage" />
        <CardBody className = "experienceCardBody">
          <CardTitle style ={{color: d.fontColor}} className = "experienceCardTitle">{d.company}</CardTitle>
          <CardSubtitle style ={{color: d.fontColor}}   className = "experienceCardSubtitle">{d.title}</CardSubtitle>
          <CardSubtitle style ={{color: d.fontColor}}  className = "experienceCardSubtitle">{d.location}</CardSubtitle>
          <CardSubtitle style ={{color: d.fontColor}}  className = "experienceCardSubtitle">{d.term}</CardSubtitle>
        </CardBody>
      </Card>
    </span>
    
  ))
  return (
    <div className = "homeDiv">
      {experiencesArray}
    </div>
    
  );
};

export default Experiences;
