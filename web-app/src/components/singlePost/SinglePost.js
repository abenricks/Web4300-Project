import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./singlePost.css";
import {Context} from "../../context/Context";
import { useContext } from "react";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const {user} = useContext(Context);
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

useEffect (() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async()=>{
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: {username:user.username},
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async ()=>{
    try {
      await axios.put(`/posts/${post._id}`, {
        username:user.username, title:title, desc:desc,
      });
      window.location.reload();
    } catch (err) {}
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />
        )}{
          update ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/> : (
            <h1 className="singlePostTitle">
              {post.title}
                <div className="singlePostEdit">
                   <i className="singlePostIcon far fa-edit" onClick={()=>setUpdate(true)}></i>
                   <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
               </div>
            </h1>
          )
        }
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {post.username}
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {update ? (
          <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/> 
        )  : (
          <p className="singlePostDesc">
          {post.desc}
          </p>
        )}
        {update && (
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )}
      </div>
    </div>
  );
}