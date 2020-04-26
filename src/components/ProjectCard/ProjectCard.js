import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button, CardFooter, CardSubtitle
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import "./ProjectCard.css";

const ProjectCard = (props) => {
  var url = props.url
  var iconData = props.projectIcons
  let icons = iconData.map(d =>(
    <FontAwesomeIcon icon = {d} size="2x" className = "projectCardIcon"/> 
  ))
  return (
    <div>
      <Card className = "projectCard">
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{icons}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button onClick = {() => window.open(url,"_blank")} className = "projectButton"><FontAwesomeIcon icon = {faGithub} size="2x" className = "projectButtonIcon"/></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
