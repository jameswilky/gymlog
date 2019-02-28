import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./set.module.css";

class Set extends Component {
  state = {};
  render() {
    const { set, reps } = this.props; // later to be pulled from state
    return (
      <tr>
        <td>{set} </td>
        <td>
          <i
            className={`${styles.subtract} fas fa-minus`}
            onClick={() => console.log("remove rep")}
          />
        </td>
        <td> {reps}</td>
        <td>
          <i
            className={`${styles.add} fas fa-plus`}
            onClick={() => console.log("add rep")}
          />
        </td>
        <td>
          <i
            className={`${styles.delete} fas fa-minus`}
            onClick={() => console.log("remove Set")}
          />
        </td>
      </tr>
    );
  }
}

Set.propTypes = {
  set: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired
};

export default Set;
