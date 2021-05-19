import React, { Component, Fragment } from "react";
import Post from "./Post";
import "../App.css";
import Backend from "../Post.json";

class PostList extends Component {
  state = {
    Posts: this.Posts,
  };

  render() {
    let helper = 0;
    return (
      <div class="post-list">
        {this.state.Posts.slice(0, 10).map((post, index) => {
          if (index == 0) {
            helper = post.date;
            return (
              <Fragment>
                <p style={{ fontWeight: "bold" }}>{helper}</p>
                <Post
                  post={post}
                  updateOverlay={this.props.updateOverlay}
                  updateLineup={this.props.updateLineup}
                />
              </Fragment>
            );
          } else if (helper != post.date) {
            helper = post.date;
            return (
              <Fragment>
                <p style={{ fontWeight: "bold" }}>{helper}</p>
                <Post
                  post={post}
                  updateOverlay={this.props.updateOverlay}
                  updateLineup={this.props.updateLineup}
                />
              </Fragment>
            );
          }

          console.log(helper);
          return (
            <Post
              post={post}
              updateOverlay={this.props.updateOverlay}
              updateLineup={this.props.updateLineup}
            />
          );
        })}
      </div>
    );
  }

  state = {
    Posts: Backend,
  };
}

export default PostList;
