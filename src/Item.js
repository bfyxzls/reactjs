import React from "react";

export default class Item extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
    // props是从父模块传入的
  }
}
