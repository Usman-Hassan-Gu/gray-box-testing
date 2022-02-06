import React from "react";
import { Link } from "react-router-dom";
const Posts = ({ posts }) => {
  const cleanString = (str) => {
    return str
      .replace(/[^A-Za-z|0-9|\s|/]/g, "")
      .replace(/\s/g, "-")
      .toLowerCase();
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <Link
              className="post-link"
              to={`/post/${cleanString(post.title)}/${post.id}`}
            >
              {post.title}
            </Link>
            <br />
            <span className="description">
              {post.content.substring(0, 100)}...
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
