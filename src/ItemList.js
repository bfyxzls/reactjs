import React from "react";
import Item from "./Item";

export default class ItemList extends React.Component {
  render() {
    let data = ["一", "二", 3, 4, 5];//方法内部定义
    return data.map((val, index) => <Item key={index} item={val} />);
  }
}
