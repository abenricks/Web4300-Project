import { Link } from "react-router-dom"
import "./post2.css"

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
            Sanford Stadium
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
            Sanford Stadium is the home to the Georgia Bulldogs. With a capacity of 92,746 seats,
            each game is filled with roaring fans. After opening in 1929, Sanford Stadium is now
            one of the largest on campus stadiums in the U.S. in college football. For more information, click <a href="https://www.collegegridirons.com/stadiums/sanford-stadium/">here.</a>
        </p>
      </div>

    </div>
  )
}