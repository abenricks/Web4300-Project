import "./home.css"
import Header from "../../components/header/Header"
import {BrowserRouter as Router, Link} from 'react-router-dom';
import mainImg from '../../images/bulldog.jpg';

export default function Home() {
  return (
    <div className="home">
        <Header/>
        <div className="App">

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
    </div>
  )
}
