import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import JumboIntro from '../../JumboIntro/JumboIntro'
import "./Home.css";

const Home = (props) => {

        return(
            <div className = "homeDiv">
                <JumboIntro></JumboIntro>
            </div>

        )
}


export default Home;