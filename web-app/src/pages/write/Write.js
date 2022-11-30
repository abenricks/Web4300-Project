import "./write.css"
import axios from "axios";
import {Context} from "../../context/Context";
import { useContext } from "react";
import {useState } from 'react';
import {useHistory} from 'react-router-dom';

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const {user} = useContext(Context);
  const [isPend, setIsPend] = useState(false);

  const onSubmit = async (e) => {
    if (user.username === "selma") { // checks if user is authorized 
      e.preventDefault();
      const piece = {title, desc, photo, username:user.username};
      setIsPend(true);

      try {
        const res = await axios.post("/posts", piece);
        window.location.replace("/post/" + res.data._id);
      }
      catch (err) {
        console.log(err);
      }
    } 
  }

    return (
        <div className="write">
          <form className="writeForm" onSubmit={onSubmit}>
            <div className="writeFormGroup">
              <input
                className="writeInput"
                placeholder="Title"
                type="text"
                required
                autoFocus={true}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <input
                className="writeInput"
                placeholder="Enter URL for image..."
                type="text"
                required
                autoFocus={true}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                className="writeInput writeText"
                placeholder="Write your blog post..."
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                autoFocus={true}
              />
            </div>
            {!isPend && <button className="writeSubmit" type="submit">Add Post</button>}
            {isPend && <button disabled className="writeSubmit">Adding Post!</button>}
          </form>
        </div>
      );
}

export default Write;
