import React from "react";
import "./Button.css";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
   
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;