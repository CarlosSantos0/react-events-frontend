import React, { Component } from "react";
import "../App.css";
import HomeButton from "./HomeButton";

class BlankPage extends Component {
  render() {
    return (
      <div className="blankpage">
        <h1>{this.props.title}</h1>
        <br />
        <HomeButton />
      </div>
    );
  }
}

export default BlankPage;
