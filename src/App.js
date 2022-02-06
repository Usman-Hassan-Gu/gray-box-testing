import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/Post";
import POSTS from "./posts";
const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(POSTS);
  }, []);
  return (
    <div className="container">
      <div data-testid="right-panel" className="right-panel">
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="posts-component">
                <h1>Posts List</h1>
                <Posts posts={posts} />
              </div>
            </Route>
            <Route exact path="/post/:slug/:id">
              <Post posts={posts} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
