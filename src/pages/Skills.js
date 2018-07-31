import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";
import BarGraph from "../components/BarGraph";
import "./Skills.css";

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
                <Row>
                    <Col l = {12}>
                    <h2 className = "dev-skills">Development Skills</h2>
                    <p className = "dev-p">NOTE: This chart is merely a guideline of my skills as I am constantly updating my knowledge daily</p>
                    </Col>
                </Row>
                <Row>
                   <Col l = {2}></Col>
                    <Col l = {6}>
                        <div className = "barChart" data-aos = "zoom-out" data-aos-duration="2000">
                            <BarGraph />
                        </div>
                    </Col>
                    <Col l = {2}></Col>
                    
                </Row>
                <Row></Row>
                <Row></Row>
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <Footer />
            </div>
        );
    };
};

export default Skills;