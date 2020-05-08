import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import "./Projects.css";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {projectData} from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const Projects = (props) => {

    var projectsArray = projectData.map(d =>(
        <Col md = "auto" sm = "auto" xs = "auto" className="projectCol">
            <Card className = "projectCard">
                <CardBody className = "projectCardBody">
                    <CardTitle className = "projectCardTitle">{d.projectTitle}</CardTitle>
                    <CardSubtitle>{d.projectIcons.map(d =>(
                        <FontAwesomeIcon style = {{color: d.color}} icon = {d.icon} size="2x" className = "projectCardIcon"/> 
                        ))}
                    </CardSubtitle>
                    <CardText>{d.projectDescription}</CardText>
                    <Button onClick = {() => window.open(d.projectURL,"_blank")} className = "projectButton"><FontAwesomeIcon icon = {faGithub} size="2x" className = "projectButtonIcon"/></Button>
                </CardBody>
            </Card>
        </Col>

    ))
 
            return(
            <div className = "homeDiv">
                <Container fluid = "xs">
                    <Row className = "projectsRow">
                        {projectsArray}
                    </Row>
                </Container>
            </div>

        )
}

export default Projects;