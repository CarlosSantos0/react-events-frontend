import React, { Component } from "react";

class Post extends Component {
  onclick = () => {
    this.props.updateOverlay(this.props.post);
    this.props.updateLineup(this.props.post.category);
  };

  render() {
    return (
      <div class="post" onClick={this.onclick}>
        <img src={this.props.post.picture} width="65px" alt="event-image" />
        <div class="post-details">
          <h4>{this.props.post.title}</h4>
          <p>{this.props.post.place}</p>
          <p>
            {this.props.post.duration} | {this.props.post.category}
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
