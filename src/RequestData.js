import React from "react";
import "./RequestData.css";

export default class RequestData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemList: [] };
  }
  componentWillMount() {
    //componentWillMount render之前执行
    //componentDidMount render之后执行
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => {
        this.setState({ itemList: data });
        console.log(data);
      });
  }

  render() {
    console.log(this.state.itemList);

    return this.state.itemList.map((i, index) => (
      <p className="red" key={index}>
        name:{i.name},age:{i.age}
      </p>
    ));
  }
}
