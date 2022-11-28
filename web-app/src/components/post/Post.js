import { Link } from "react-router-dom"
import "./post.css"

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (
      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
      )}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">
              {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postDesc">
            {post.desc}
        </p>
      </div>

    </div>
  )
}
