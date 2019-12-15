import React from "react";
import Counter from "./Counter";

class Counters extends React.Component {
  state = { counterA: 0, counterB: 0, counterC: 0 };

  render = () => {
    let addButtonA = (
      <button
        onClick={() => {
          this.setState({ counterA: this.state.counterA + 1 });
        }}
      >
        +
      </button>
    );
    let removeButtonA = (
      <button
        onClick={() => {
          this.setState({ counterA: this.state.counterA - 1 });
        }}
      >
        -
      </button>
    );

    let addButtonB = (
      <button
        onClick={() => {
          this.setState({ counterB: this.state.counterB + 1 });
        }}
      >
        +
      </button>
    );
    let removeButtonB = (
      <button
        onClick={() => {
          this.setState({ counterB: this.state.counterB - 1 });
        }}
      >
        -
      </button>
    );

    let addButtonC = (
      <button
        onClick={() => {
          this.setState({ counterC: this.state.counterC + 1 });
        }}
      >
        +
      </button>
    );
    let removeButtonC = (
      <button
        onClick={() => {
          this.setState({ counterC: this.state.counterC - 1 });
        }}
      >
        -
      </button>
    );
    if (this.state.counterA >= 10) {
      addButtonA = null;
    } else if (this.state.counterA < 0) {
      removeButtonA = null;
    }

    if (this.state.counterB >= 10) {
      addButtonB = null;
    } else if (this.state.counterB < 0) {
      removeButtonB = null;
    }

    if (this.state.counterC >= 10) {
      addButtonC = null;
    } else if (this.state.counterC < 0) {
      removeButtonC = null;
    }

    let somme = this.state.counterA + this.state.counterB + this.state.counterC;
    if (somme >= 18) {
      addButtonA = null;
      addButtonB = null;
      addButtonC = null;
    }
    return (
      <div class="counter">
        <span>{this.state.counterA}</span>
        {addButtonA}
        {removeButtonA}
        <br />
        <span>{this.state.counterB}</span>
        {addButtonB}
        {removeButtonB}
        <br />
        <span>{this.state.counterC}</span>
        {addButtonC}
        {removeButtonC}
        <br />
        Somme : {somme}
      </div>
    );
  };
}

export default Counters;
