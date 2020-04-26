import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import "./Projects.css";
import ProjectCard from "../../ProjectCard/ProjectCard";
import {projectData} from "./data";
class Projects extends React.Component {
    state = {
        data: projectData
    }
 
        render(){
            var deckArray = this.state.data.map(d => (
                <Col sm = "3">
                    <br></br>
                    <ProjectCard title = {d.projectTitle} projectIcons = {d.projectIcons} text = {d.projectDescription} url = {d.projectURL}/>
                    <br></br>
                </Col>
            ));
            return(
            <div className = "homeDiv">
                <Container fluid> 
                    <Row>
                        {deckArray}
                    </Row>
                </Container>
            </div>

        )
}
}

export default Projects;