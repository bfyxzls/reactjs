import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./ButtonPanel";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null
    };
  }
  handleClick = buttonName => {
    this.setState("ok");
  };

  render() {
    return (
      <div className="component-app">
        <h1>hello world!</h1>
        <p>总数：{this.state.total}</p>
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
