import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Art from "./pages/Art";
import Contact from "./pages/Contact";

class App extends Component{
  render(){
    return(
      <div className = "App">
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/about-me" exact component = {About}></Route>
        <Route path = "/portfolio" exact component = {Portfolio}></Route>
        <Route path = "/skills" exact component = {Skills}></Route>
        <Route path = "/art" exact component = {Art}></Route>
        <Route path = "/contact" exact component = {Contact}></Route>
      </div>  
    )
  }
}
export default App;

