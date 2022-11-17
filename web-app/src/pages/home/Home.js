import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Home() {
  return (
    <>
        <Header/>
        <div className="home">
            <Posts/>
        </div>
    </>
  )
}
