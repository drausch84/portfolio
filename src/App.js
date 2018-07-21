import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import {Col, Row} from "react-materialize";

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
      </Row>
      <Row>
        <Col l = {5}>

        </Col>
      </Row>  
      <Footer />
      </div>
    
   </Router>
   
);
export default App;

