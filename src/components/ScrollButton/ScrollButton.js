import React, {Component} from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import "./ScrollButton.css";

class ScrollButton extends Component {
  render() {
    return (
      <div>
        <ScrollUpButton />
      </div>
    );
  }
}
   

  export default ScrollButton;