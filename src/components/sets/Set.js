import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./set.module.css";
import { Consumer } from "../../Context";

class Set extends Component {
  render() {
    const { set, reps, id, isActive } = this.props; // later to be pulled from state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className={styles.set}>
              <div>{set}</div>

              <div className={styles.rep}>
                <div>
                  {" "}
                  <i
                    className={`${styles.adjust} fas fa-minus`}
                    onClick={() =>
                      dispatch({
                        type: "DECREMENT_REP",
                        payload: { set, id, isActive }
                      })
                    }
                  />
                </div>
                <div>{reps}</div>
                <div>
                  <i
                    className={`${styles.adjust} fas fa-plus`}
                    onClick={() =>
                      dispatch({
                        type: "INCREMENT_REP",
                        payload: { set, id, isActive }
                      })
                    }
                  />
                </div>
              </div>
              {isActive ? (
                <div>
                  <input type="number" />
                </div>
              ) : null}
              <div>
                {" "}
                <i
                  className={`${styles.delete} fas fa-minus`}
                  onClick={() =>
                    dispatch({
                      type: "DELETE_SET",
                      payload: { set, id }
                    })
                  }
                />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Set.propTypes = {
  set: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired
};

export default Set;
