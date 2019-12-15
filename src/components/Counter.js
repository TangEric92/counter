import React from "react";
import Button from "./Button";

class Counter extends React.Component {
  state = { counter: 0 };

  incrementCounter = () => {
    const newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  };
  decrementCounter = () => {
    const newCounter = this.state.counter - 1;
    this.setState({ counter: newCounter });
  };

  render = () => {
    return (
      <div>
        <Button action={this.incrementCounter} name="+" />
        {this.state.counter}
        <Button action={this.decrementCounter} name="-" />
      </div>
    );
  };
}

export default Counter;
