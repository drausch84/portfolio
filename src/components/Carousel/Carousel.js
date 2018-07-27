import React from "react";
import ClickGame from "./Clicky-Game.png";
import Hamburger from "./Hamburger.png";
import FriendFinder from "./FriendFinder.png";
import TriviaGame from "./TriviaGame.png";
import Giphy from "./GiphyProject.png";
import Bamazon from "./bamazon.jpg";
import Liri from "./Liri.png";

function Carousel(){
        return <div>
            <ul className="slider">
                <li>
                    <a href = "https://damp-sierra-29013.herokuapp.com" target = "_blank">
                    <input type="radio" id="slide1" name="slide" checked/>
                    <label for="slide1"></label>
                    <img src= {ClickGame} alt="Panel 1"/>
                    <h6>South Park Memory Game</h6>
                    <h8>Made with ReactJS and MaterializeCSS</h8>
                    </a>
                </li>
                 <li>
                    <a href = "https://afternoon-refuge-63972.herokuapp.com" target = "_blank">
                    <input type="radio" id="slide2" name="slide"/>
                    <label for="slide2"></label>
                    <img src= {Hamburger} alt="Panel 2"/>
                    <h6>Eat-Da-Burger</h6>
                    <h8>Made with Node.js, Express.js, MySQL, Handlebars.js, JS and MaterializeCSS</h8>
                    </a>
                </li>
                <li>
                    <a href = "https://lit-temple-87580.herokuapp.com" target = "_blank">
                    <input type="radio" id="slide3" name="slide"/>
                    <label for="slide3"></label>
                    <img src= {FriendFinder} alt="Panel 3"/>
                    <h6>Friend Finder App</h6>
                    <h8>Made with Node.js, JS, Express.js, jQuery, and MaterializeCSS</h8>
                    </a>
                </li>
                <li>
                    <a href="https://drausch84.github.io/TriviaGame/" target = "_blank">
                    <input type="radio" id="slide4" name="slide"/>
                    <label for="slide4"></label>
                    <img src= {TriviaGame} alt="Panel 4"/>
                    <h6>Breaking Bad Trivia Game</h6>
                    <h8>Made with JS, jQuery, and BootstrapCSS</h8>
                    </a>
                </li>
                <li>
                    <a href="https://drausch84.github.io/Giphy-Project/" target = "_blank">
                    <input type="radio" id="slide5" name="slide"/>
                    <label for="slide4"></label>
                    <img src= {Giphy} alt="Panel 5"/>
                    <h6>Giphy TV Search</h6>
                    <h8>Made with API integration, JS, jQuery, and BootstrapCSS</h8>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=VP7JfELPBxc&t=192s" target = "_blank">
                    <input type="radio" id="slide6" name="slide"/>
                    <label for="slide4"></label>
                    <img src= {Bamazon} alt="Panel 6"/>
                    <h6>Bamazon Shopping App</h6>
                    <h8>Made with MySQL and Node.js</h8>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=3H4b1NIrjt4&t=181s" target = "_blank">
                    <input type="radio" id="slide7" name="slide"/>
                    <label for="slide4"></label>
                    <img src= {Liri} alt="Panel 7"/>
                    <h6>LIRI(Siri clone) App</h6>
                    <h8>Made with API integration and Node.js</h8>
                    </a>
                </li>

            </ul>
            </div>
    };
     

export default Carousel;

