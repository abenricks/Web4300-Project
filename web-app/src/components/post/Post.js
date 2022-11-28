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
        <span className="postTitle">
            {post.title}
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className="postDesc">
            {post.desc}
        </p>
      </div>

    </div>
  )
}
