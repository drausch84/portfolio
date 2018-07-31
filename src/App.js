import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
// import {CSSTransition, TransitionGroup, Switch} from "react-transition-group";
// import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";

class App extends Component{
  render(){
    return(
      <div className = "App">
        <Switch>
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/about-me" exact component = {About}></Route>
        <Route path = "/portfolio" exact component = {Portfolio}></Route>
        <Route path = "/skills" exact component = {Skills}></Route>
        <Route path = "/art" exact component = {Art}></Route>
        <Route path = "/contact" exact component = {Contact}></Route>
        <Route path = "*" exact component = {PageNotFound}></Route>
        </Switch>
      </div> 
      

    )
  }
}
export default App;

