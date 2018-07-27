import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";
import Click from "./images/click.png";
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
            <Row></Row>
            <br />
            <Row>
                <Col l = {6}>
                    <div className = "image-1"></div>
                </Col>
                <Col l = {6}>
                    <div className = "project-info">
                        <h4>South Park Memory Game</h4>
                        <hr width = "75%"/>
                        <h6>Made with React and MaterializeCSS</h6>
                        <p className = "link">View<a href = "https://damp-sierra-29013.herokuapp.com" target = "_blank"><img src = {Click} className = "click-btn"/></a></p>
                    </div>
                </Col>
            </Row>
            
            <Row>
                <Col l = {6}>
                    <h4>FriendFinder App</h4>
                    <hr width = "75%"/>
                    <h6>Made with Node.js, JS, Express.js, MaterializeCSS, and jQuery</h6>
                    <p className = "link">View <a href = "https://lit-temple-87580.herokuapp.com" target = "_blank"></a></p>   
                </Col>
                <Col l ={6}>
                    <div className = "image-2"></div>      
                </Col>
            </Row>

            <Row>
                <Col l = {6}>
                    <div className = "image-3"></div>
                </Col>
                <Col l = {6}>
                    <h4>Bamazon</h4>
                    <hr width = "75%"/>
                    <h6>Made with Node.js and MySQL</h6>
                    <p className = "link">View<a href = "https://www.youtube.com/watch?v=VP7JfELPBxc&t=4s" target = "_blank"></a></p>
                </Col>
            </Row>

            <Row>
                <Col l = {6}>
                    <h4>Giphy Gif Project</h4>
                    <hr width = "75%"/>
                    <h6>Made with API integration, JS, and BootstrapCSS</h6>   
                    <p className = "link">View<a href = "https://drausch84.github.io/Giphy-Project/" target = "_blank"></a></p>  
                </Col>
                <Col l = {6}>
                    <div className = "image-4"></div>
                </Col>
            </Row>

            <Row>
                <Col l = {6}>
                    <div className = "image-5"></div>
                </Col>
                <Col l = {6}>
                    <h4>Eat Da Burger App</h4>
                    <hr width = "75%"/>
                    <h6>Made with Node.js, Express.js, MySQL, Handlebars.js, JS, and MaterializeCSS</h6>   
                    <p className = "link">View<a href = "https://afternoon-refuge-63972.herokuapp.com" target = "_blank"></a></p>       
                </Col>
            </Row>

            <Row>
                <Col l = {6}>
                    <h4>LIRI App</h4>
                    <hr width = "75%"/>
                    <h6>Made with API integration and Node.js</h6>
                    <p className = "link">View<a href = "https://www.youtube.com/watch?v=3H4b1NIrjt4&t=3s" target = "_blank"></a></p>   
                    
                </Col>
                <Col l = {6}>
                    <div className = "image-6"></div>
                </Col>
            </Row>

            <Row>
                <Col l = {6}>
                    <div className= "image-7"></div>
                </Col>
                <Col l = {6}>
                    <h4>Breaking Bad Trivia Game</h4>
                    <hr width = "75%"/>
                    <h6>Made with JS and jQuery</h6>    
                    <p className = "link">View<a href = "https://drausch84.github.io/TriviaGame/" target = "_blank"></a></p>                           
                </Col>
            </Row>
            <br />
            <Row></Row>
            <Row></Row>
            <br />
            <Row></Row>
            <Row></Row>
                <Footer />
            </div>    
        );
    };
};

export default Portfolio;