import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/Post";
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Gray Box Testing",
      content:
        "Gray Box testing is the combination of White Box testing and Black Box testing",
    },
    {
      id: "2",
      title: "White Box Testing",
      content:
        "White Box testing is the processes of testing the internal structure of an application",
    },
    {
      id: "3",
      title: "Black Box Testing",
      content:
        "Black Box testing is the processes of testing the presentation layer of an application",
    },
  ]);
  const addNew = (post) => {
    setPosts(post);
  };
  return (
    <div className="container">
      <div className="left-panel">
        <Add addNew={addNew} posts={posts} />
      </div>
      <div className="right-panel">
        <Router>
          <Switch>
            <Route exact path="/">
              <Posts posts={posts} />
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
