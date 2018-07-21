import React from 'react';
import "./Hero.css";
import Picture from "./me.jpg";

function Hero (){
    return <img src = {Picture} className = "profile-pic"/>
}

export default Hero;