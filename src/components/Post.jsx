import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import POSTS from "../posts";
const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({ id: "", title: "", content: "" });
  useEffect(() => {
    const temp = POSTS.filter((post) => post.id === params.id);
    setPost(temp[0]);
  }, []);

  return (
    <>
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <h1 id="post-title">{post.title}</h1>
        <span id="post-content">{post.content}</span>
      </div>
    </>
  );
};

export default Post;
