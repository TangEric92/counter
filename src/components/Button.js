import React from "react";

class Button extends React.Component {
  render = () => {
    return (
      <div>
        <button onClick={this.props.action}>{this.props.name}</button>
      </div>
    );
  };
}

export default Button;
