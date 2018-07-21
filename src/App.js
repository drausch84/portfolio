import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import {Col, Row} from "react-materialize";
import Header from "./components/Header";
import LeftBrain from "./components/LeftBrain";
import RightBrain from "./components/RightBrain";
import Code from "./components/Code";

const App = () => (
  <Router>
    <div>
      <Nav />
      
      
      <Row>
        <Col l = {12}>
          <Hero />
        </Col>
      </Row>    
      <hr width = "50%"/>
      <Row>
        <Col l = {12}>
          <Header />
        </Col>  
      </Row>
      <hr width = "75%" />
      <Row>
        <Col l = {2}>
        </Col>
        <Col l = {3}>
          <LeftBrain />
        </Col>
        <Col l = {2}>
          <Code /> 
        </Col>  
        <Col l = {3}>
          <RightBrain />
        </Col>
        <Col l = {2}>
        </Col>  
      </Row>    
      <br />
      <br />
      <Row>
        <Col l = {5}>

        </Col>
      </Row>  
      <Footer />
      </div>
    
   </Router>
   
);
export default App;

