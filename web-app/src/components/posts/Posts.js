import Home from "../../pages/home/Home"
import Post from "../post/Post"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Fetch from "../../pages/write/Fetch";
import PostList from "../../pages/write/PostList";
import "./posts.css"

const Posts = () => {

  const {data: pieces, isPend, erro} = Fetch('http://localhost:3000/');

  return (
    <div className="posts">
 
      {/*{erro && <div>{erro}</div>*/}
      {isPend && <div>Loading...</div>}
      <PostList title="test" posts={pieces} />
        <Post img="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg2NjEyNzk3NzQyNzg2MjIy/usatsi_17485351.jpg" />
        <Post2 img="https://upload.wikimedia.org/wikipedia/commons/d/d2/UGA_vs._Notre_Dame_2019.jpg"/>
        <Post3 img="https://sicemdawgs.com/wp/wp-content/uploads/2022/09/UGAFB_PMc091022246-1.jpg"/>
    </div>
  )
}

export default Posts;