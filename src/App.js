import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="calc">React JS</h1>
        <p>Awesome Heh!</p>
      </div>
    );
  }
}

export default App;
