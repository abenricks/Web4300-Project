import mainImg from './images/bulldog.jpg';
import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*Change name of webpage*/}
    <div class="menuTitle">
      <h1>The Dawg Blog</h1>
    </div>

    {/*Links need to be added or open components through router maybe*/}
    <nav>
      <ul class="menu">
        <li class="menuItem">Home</li>
        <li class="menuItem">About</li>
        <li class="menuItem">Football Schedule</li>
        <li class="menuItem">Contact</li>
        <li class="menuItem">Login</li>
		  </ul>
    </nav>

    {/*Intro banner and text about the site. With current img text looks funky but we can change this*/}
    <div class="intro">

    </div>

    <div id="topArticle">
      <div class="mainArticle">
            Main summary and Description with link for more info. The image is also a clickable route.
            <Router>
            <div class="mainImg">
                <Link to="/test">
                    <img src={mainImg} alt="Bulldawg" id="img1"/>
                </Link>
            </div>
            </Router>
            </div>,
      </div>
    </div>
  );
}

export default App;
