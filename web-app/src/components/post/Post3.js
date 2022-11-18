import { Link } from "react-router-dom"
import "./post3.css"

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
            The Team
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
            The Bulldogs were crowned the 2021-2022 national champions, beating Alabama
            33-18. This was their first national championship since 1980.
        </p>
      </div>

    </div>
  )
}