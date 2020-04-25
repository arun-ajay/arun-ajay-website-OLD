import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import "./Projects.css";
import ProjectCard from "../../ProjectCard/ProjectCard"
import Deck from "../../Deck/Deck";

class Projects extends React.Component {
    state = {
        data: [
            {
                "projectTitle": "Project Title",
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