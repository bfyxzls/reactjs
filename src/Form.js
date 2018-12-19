import React from "react";

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello Runoob!" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <h4>{this.state.value}</h4>
      </div>
    );
  }
}
