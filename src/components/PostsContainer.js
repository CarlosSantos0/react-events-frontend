import React, { Component } from "react";
import Backend from "../Post.json";
import Post from "./Post";

class PostsContainer extends Component {
  updateOverlay = () => {};

  render() {
    return (
      <div>
        <div className="post-container-elements">
          <a href="/" className="button">
            Back to Home
          </a>
          <h1>Posts</h1>
          <h3>Published Posts: {this.state.Posts.length}</h3>
        </div>
        <div className="posts-container">
          {this.state.Posts.map((post) => (
            <Post post={post} updateOverlay={this.updateOverlay} />
          ))}
        </div>
      </div>
    );
  }

  state = {
    Posts: Backend,
  };
}

export default PostsContainer;
