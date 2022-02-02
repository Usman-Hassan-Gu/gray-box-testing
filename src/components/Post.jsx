import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Post = ({ posts }) => {
  const params = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const temp = posts.filter((post) => post.id === params.id);
    setPost(temp[0]);
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{post.title}</h1>
      <span>{post.content}</span>
    </div>
  );
};

export default Post;
