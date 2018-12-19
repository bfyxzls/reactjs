import React from "react";

class Welcome extends React.Component {
  constructor() {
    super();
    this.props = {
      value: null //相当于一个默认值，可以为空，在app.js里去调用它
    };
  }

  render() {
    return <h1> Hello, {this.props.value} </h1>;
  }
}
export default Welcome;
