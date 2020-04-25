import React from 'react';
import ProjectCard from "../ProjectCard/ProjectCard";
import {Container,Row,Col} from 'reactstrap';

const Deck = (props) => {

  let deckArray = props.data.map(d => (
      <Col md= "4">
        <ProjectCard title = {d.projectTitle} subtitle = {d.projectIcons} text = {d.projectDescription}/>
        <br></br>
      </Col>
  ));
  return (

    <Container fluid>
      <Row>
          {deckArray}
      </Row>
    </Container>
  );
};

export default Deck;