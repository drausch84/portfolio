import React from "react";
import ClickGame from "./Clicky-Game.png";
import Hamburger from "./Hamburger.png";
import FriendFinder from "./FriendFinder.png";
import TriviaGame from "./TriviaGame.png";
import Giphy from "./GiphyProject.png";
import Bamazon from "./bamazon.jpg";
import Liri from "./Liri.png";
import {Carousel} from "react-materialize";

function ProjectCarousel(){
        return <Carousel images={[
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Macaca_sinica_-_01.jpg/220px-Macaca_sinica_-_01.jpg',
            'https://ichef.bbci.co.uk/news/624/cpsprodpb/8C06/production/_102564853_gettyimages-148406869.jpg',
            'https://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png',
            'https://nylon-img.imgix.net/featured_images/attachments/000/027/629/original/aaronpaul.jpg?auto=format&ch=Width%2CDPR&q=75&w=640&ixlib=js-1.1.1&cs=strip&crop=&s=b0085f7eab544991c7e4c5ebf48cf3c3'
          ]} />

        
    };
     

export default ProjectCarousel;

