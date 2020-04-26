import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button, CardFooter
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import "./ProjectCard.css";

const ProjectCard = (props) => {
  var url = props.url
  var iconData = props.projectIcons
  let icons = iconData.map(d =>(
    <FontAwesomeIcon icon = {d} size="2x" className = "icon"/>
  ))
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <Button onClick = {() => window.open(url,"_blank")}><FontAwesomeIcon icon = {faGithub} size="2x" className = "icon"/></Button>
        </CardBody>
        {icons}
      </Card>
    </div>
  );
};

export default ProjectCard;
