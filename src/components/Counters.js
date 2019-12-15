import React from "react";
import Counter from "./Counter";

class Counters extends React.Component {
  state = { counterA: 0, counterB: 0, counterC: 0 };

  render = () => {
    return (
      <div>
        <Counter />
      </div>
    );
  };
}

export default Counters;
