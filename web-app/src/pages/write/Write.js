import "./write.css"
import {useState } from 'react';
import {useHistory} from 'react-router-dom';

const Write = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isPend, setIsPend] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const piece = { title, text};
    setIsPend(true);

    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {  "Content-Type": "application/json" },
      body: JSON.stringify(piece)
    }).then (() => {
      setIsPend(false);
      history.goBack();
    })
  }



    return (
        <div className="write">
          <img
            className="writeImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" 
          />
          <form  onSubmit={onSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
              </label>
              <div className="insert">Upload a picture to post</div>
              <input id="fileInput" type="file" style={{ display: "none" }} />
              <input
                className="writeInput"
                placeholder="Title"
                type="text"
                required
                autoFocus={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                className="writeInput writeText"
                placeholder="Write your blog post..."
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus={true}
              />
            </div>
            {!isPend && <button className="writeSubmit">Add Post</button>}
            {isPend && <button disabled className="writeSubmit">Adding Post!</button>}
          </form>
        </div>
      );
}

export default Write;
