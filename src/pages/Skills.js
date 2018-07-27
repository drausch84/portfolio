import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";

class Skills extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Footer />
            </div>
        );
    };
};

export default Skills;