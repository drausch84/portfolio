import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";
import Carousel from "../components/Carousel";
import "./Portfolio.css";

class Portfolio extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Row>
                <Col l = {12}>
                    <h1 className = "portfolio-header">Portfolio Projects</h1>
                </Col>
            </Row>
            <hr width = "75%" />
            <Row>
                <Col l = {12}>
                <p className = "portfolio-p">These are a few projects(most done during my time in the University of Denver Coding Boot Camp) to showcase my 
                abilities using different technologies. Each displayed project will list the technologies that went into its creation.  This list of projects 
                will continue to grow as there are a few projects that are nearing completion, and my restless nature doesn't allow me to rest on my laurels 
                and I practice my ABCs(Always Be Coding).</p>
                </Col>
            </Row> 
                <Footer />
            </div>    
        );
    };
};

export default Portfolio;