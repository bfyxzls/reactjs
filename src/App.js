import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./ButtonPanel";
import ItemList from "./ItemList";
import RequestData from "./RequestData";
import Form from "./Form";

class App extends Component {
  handleClick = buttonName => {
    console.log("buttonName:" + buttonName);
  };

  // 这个语法确保了 `this` 绑定在  handleClick 中
  // 这里只是一个测试
  handleClick1 = () => {
    console.log("this is:", this);
  };
  handleClick2 = o => {
    //o是一个参数
    console.log("that is:", o);
  };
  handleClick3 = () => {
    this.handleClick2("lind");
  };
  render() {
    return (
      <div className="component-app">
        <h1>hello world!</h1>
        <ButtonPanel clickHandler={this.handleClick} />
        <button onClick={this.handleClick1}>Click me1</button>
        <button onClick={this.handleClick3}>Click me2</button>
        <ItemList />
        <RequestData url="/test.json" />
        <Form />
      </div>
    );
  }
}

export default App;
