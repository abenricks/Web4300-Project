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

    <div id="articles">
      <div class="mainArticle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <Router>
            <div class="mainImg">
                <Link to="/test">
                    <img src={mainImg} alt="Bulldawg" id="img1"/>
                </Link>
            </div>
            </Router>
            </div>
      </div>
    </div>
  );
}

export default App;
