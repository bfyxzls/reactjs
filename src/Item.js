import React from "react";
import "./Item.css";

export default class Item extends React.Component {
  render() {
    return (
      <li className="list">
      <span>
        {this.props.item.name}
        </span>
        <span>
        {this.props.item.age}
        </span>
      </li>
    );
    // props是从父模块传入的
  }
}
