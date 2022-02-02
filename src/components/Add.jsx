import { useState } from "react";

const Add = ({ addNew, posts }) => {
  const initial = {
    title: "",
    content: "",
  };
  const [post, setPost] = useState(initial);

  const add = () => {
    addNew([...posts, { ...post, id: `${posts.length + 1}` }]);
    setPost(initial);
  };
  return (
    <div className="add-component">
      <label>Title:</label>
      <input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
      />
      <label>Content:</label>
      <textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        cols={10}
        rows={10}
      />
      <button onClick={() => add()}>Post</button>
    </div>
  );
};

export default Add;
