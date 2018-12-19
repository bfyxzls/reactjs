import React from "react";
import Item from "./Item";

export default class ItemList extends React.Component {
  render() {
    let data = ["一", "二", 3, 4, 5];
    return data.map(val => <Item item={val} />);
  }
}
