import React from 'react';
import "./Home.css";
import { Jumbotron, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {mediaData} from "./data"

const Home = (props) => {

    var mediaArray = mediaData.map(d =>(
        <span>
          <Button onClick = {() => window.open(d.url,"_blank")} className = "jumboButton"><FontAwesomeIcon icon = {d.icon} size="3x" className = "jumboIcon"/></Button>
          <div className = "divider"></div>
        </span>
        
      ))

        return(
            <div className = "homeDiv">
                <Jumbotron>
                    <h1 className = "name">Arun Ajay</h1>
                    <p className = "title">Engineer and Aspiring Software Developer</p>
                    <Container>
                        <Row>
                            <Col>
                            {mediaArray}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>

        )
}


export default Home;