import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import "./Projects.css";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {CardDeck} from 'reactstrap';
import ProjectCard from "../../ProjectCard/ProjectCard";

class Projects extends React.Component {
    state = {
        data: [
            {
                "projectTitle": "Reddi-lert",
                "projectIcons": [faGithub],
                "projectDescription": "Notifies a user if specified content from a subreddit has just been posted.",
                "projectURL": "https://github.com/arun-ajay/Reddi-lert"
            },
            {
                "projectTitle": "Stuntin' Shunt",
                "projectIcons": [faGithub],
                "projectDescription": "An arduino system that monitors shunt activity and notifies a physician when a potential blockage has occurred",
                "projectURL": "https://github.com/arun-ajay/stuntin-shunt"
            }

        ]
    }
 
        render(){
            var deckArray = this.state.data.map(d => (
                <ProjectCard title = {d.projectTitle} projectIcons = {d.projectIcons} text = {d.projectDescription} url = {d.projectURL}/>
            ));
            return(
            <div className = "homeDiv">
                <CardDeck>
                    {deckArray}
                </CardDeck>
            </div>

        )
}
}

export default Projects;