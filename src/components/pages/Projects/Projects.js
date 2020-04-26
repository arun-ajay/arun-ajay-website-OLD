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
                <ProjectCard title = {d.projectTitle} projectIcons = {d.projectIcons} text = {d.projectDescription} url = {d.projectURL}/>
            ));
            return(
            <div className = "homeDiv">
                {deckArray}
            </div>

        )
}
}

export default Projects;