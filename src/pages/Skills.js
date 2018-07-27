import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";

class Skills extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Row>
                    <Col l = {12}>
                        <h1 className = "skills-header">Skills</h1>
                    </Col>
                    <hr width = "75%" />
                </Row>
                <Footer />
            </div>
        );
    };
};

export default Skills;