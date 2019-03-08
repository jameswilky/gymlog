import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./set.module.css";
import { LoaderConsumer } from "../../LoaderContext";

class Set extends Component {
  render() {
    const { set, reps, id } = this.props; // later to be pulled from state

    return (
      <LoaderConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <tr>
              <td>{set} </td>
              <td>
                <i
                  className={`${styles.subtract} fas fa-minus`}
                  onClick={() =>
                    dispatch({
                      type: "DECREMENT_REP",
                      payload: { set, id }
                    })
                  }
                />
              </td>
              <td> {reps}</td>
              <td>
                <i
                  className={`${styles.add} fas fa-plus`}
                  onClick={() =>
                    dispatch({
                      type: "INCREMENT_REP",
                      payload: { set, id }
                    })
                  }
                />
              </td>
              <td>
                <i
                  className={`${styles.delete} fas fa-minus`}
                  onClick={() =>
                    dispatch({
                      type: "DELETE_SET",
                      payload: { set, id }
                    })
                  }
                />
              </td>
            </tr>
          );
        }}
      </LoaderConsumer>
    );
  }
}

Set.propTypes = {
  set: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired
};

export default Set;
