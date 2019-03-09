import React, { Component } from "react";
import * as math from "mathjs";

import "./App.css";

import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import ClearButton from "./Components/ClearButton/ClearButton";
import AboutMe from "./Components/AboutMe/AboutMe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleClear = this.handleClear.bind(this);
    this.addToInput = this.addToInput.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleClear() {
    this.setState({
      input: ""
    });
  }

  addToInput(value) {
    this.setState({
      input: this.state.input + value
    });
  }

  handleEqual() {
    this.setState({
      input: this.state.input ? math.eval(this.state.input) : ""
    });
  }

  render() {
    return (
      <div className="app">
        <div className="cal-wrapper">
          <div className="cal-row">
            <AboutMe />
          </div>
          <Input input={this.state.input} />
          <div className="cal-row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="cal-row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="cal-row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="cal-row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="cal-row">
            <ClearButton handleClear={this.handleClear}>CLEAR</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
