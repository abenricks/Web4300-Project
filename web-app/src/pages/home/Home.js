import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      console.log(res);
      setPosts(res.data);
    }
    fetchPosts();
  }, []);

  return (
    <>
        <Header/>
        <div className="home">
            <Posts posts={posts} />
        </div>
    </>
  )
}
