import React, { Component } from "react";
import "../App.css";

class PostButton extends Component {
  render() {
    return (
      <div>
        <a class="post-button" href="/posts">
          See all Events
        </a>
      </div>
    );
  }
}

export default PostButton;
