import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import "./Projects.css";
import ProjectCard from "../../ProjectCard/ProjectCard"
import Deck from "../../Deck/Deck";

class Projects extends React.Component {
    state = {
        data: [
            {
                "projectTitle": "Reddi-lert",
                "projectIcons": "Icons",
                "projectDescription": "Notifies a user if specified content from a subreddit has just been posted.",
                "projectURL": "https://github.com/arun-ajay/Reddi-lert"
            },
            {
                "projectTitle": "Stuntin' Shunt",
                "projectIcons": "Icons",
                "projectDescription": "Description"
            }

        ]
    }

        render(){
            return(
            <div className = "homeDiv">
                <Container style = {{border: "5px solid red"}}>
                    <Row>
                        <Deck data = {this.state.data}></Deck>
                    </Row>
                </Container>
            </div>

        )
}
}


export default Projects;