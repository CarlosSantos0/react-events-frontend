import { Component, Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BlankPage from "./components/BlankPage";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import PostsContainer from "./components/PostsContainer";

class App extends Component {
  state = {
    overlay: {
      title: "Fanci a drink?",
      place: "AHOY, SAILOR!",
      duration: "8-9AM",
      date: "Today",
      category: "Fun",
      picture: "",
    },
  };

  updateOverlay = (Post) => {
    this.setState({ overlay: Post });
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Header updateOverlay={this.updateOverlay} />
              <Overlay overlay={this.state.overlay} />
            </Fragment>
          )}
        />
        <Route path="/posts" render={() => <PostsContainer />} />
        <Route
          path="/exploreship"
          render={() => <BlankPage title="Explore The Ship - Blank Page" />}
        />
        <Route
          path="/explorebars"
          render={() => <BlankPage title="Explore Bars - Blank Page" />}
        />
      </Router>
    );
  }
}

export default App;
