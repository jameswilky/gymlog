import React, { Component } from "react";

class Set extends Component {
  state = {};
  render() {
    const { set, reps } = this.props; // later to be pulled from state
    return (
      <tr className="set">
        <td>{set} </td>
        <td>
          <i
            className="fas fa-minus minusRep"
            onClick={() => console.log("remove rep")}
          />
        </td>
        <td> {reps}</td>
        <td>
          <i
            className="fas fa-plus addRep"
            onClick={() => console.log("add rep")}
          />
        </td>
        <td>
          <i
            className="fas fa-minus minusSet"
            onClick={() => console.log("remove Set")}
          />
        </td>
      </tr>
    );
  }
}

export default Set;
