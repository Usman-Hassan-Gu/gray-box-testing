import { Link } from "react-router-dom";
const Posts = ({ posts }) => {
  return (
    <div className="post-component">
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <Link to={`/post/${post.title}/${post.id}`}>{post.title}</Link>
            <br />
            <span className="description">
              {post.content.substring(0, 100)}...
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
