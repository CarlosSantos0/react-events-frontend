import React, { Component } from "react";
import PostButton from "./PostButton";
import PostList from "./PostList";
import "../App.css";
import binoculars from "../img/binoculars.svg";

class Header extends Component {
  state = {
    category: "The lineup",
  };

  GetDate = () => {
    var time = new Date();

    return time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  updateLineup = (category) => {
    this.setState({ category: category });
  };

  render() {
    return (
      <header>
        <div class="container">
          <p class="hour">{this.GetDate()}</p>
          <h2>{this.state.category}</h2>
          <PostList
            updateOverlay={this.props.updateOverlay}
            updateLineup={this.updateLineup}
          />
          <PostButton />
          <a className="button-explore_ship" href="/exploreship">
            <img src={binoculars} />
            Explore The Ship
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
