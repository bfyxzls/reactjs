import React from "react";
import { item } from "./Item";

export default class ItemList extends React.Component {
  render() {
    let data = [
      { name: "zzl", age: 35 },
      { name: "zql", age: 39 },
      { name: "zhz", age: 9 }
    ]; //方法内部定义
    return data.map((val, index) => <item key={index} item={val} />);
  }
}
