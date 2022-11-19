import { Link } from 'react-router-dom';

const PostList = ({pieces, text, title}) => {

    return (
        <div className="post-list">
            
      <div className="postInfo">
        <span className="postTitle">
            {title}
        </span>

        <p className="postDesc">
            {text}
        </p>
      </div>

        </div>
    )
}

export default PostList;