import React, { Component } from "react";
import "../App.css";

class Overlay extends Component {
  render() {
    return (
      <div
        class="overlay"
        style={{
          backgroundImage: this.props.overlay.picture
            ? `url("${this.props.overlay.picture}")`
            : "",
        }}
      >
        <div class="overlay-description">
          <h3>{this.props.overlay.place}</h3>
          <h1 class="display">{this.props.overlay.title}</h1>
          <h3>
            <a href="/explorebars" className="d-flex">
              Explore Bars<span class="circle"></span>
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default Overlay;
