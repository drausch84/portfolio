import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

class App extends Component{
  render(){
    return(
      <div className = "App">
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/about-me" exact component = {About}></Route>
        <Route path = "/portfolio" exact component = {Portfolio}></Route>
      </div>  
    )
  }
}
export default App;

