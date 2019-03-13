import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./set.module.css";
import { Consumer } from "../../Context";

class Set extends Component {
  constructor(props) {
    console.log("constructing");
    console.log(props.weight);
    super(props);
    this.state = { weight: props.weight };
  }

  render() {
    const { set, reps, id, isActive, dispatch } = this.props;
    return (
      <Consumer>
        {value => {
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
                  <input
                    type="number"
                    name="weight"
                    value={this.state.weight}
                    onChange={e => {
                      this.setState({ [e.target.name]: e.target.value });
                    }}
                    onBlur={() => {
                      const { weight } = this.state;
                      console.log(`Weight after blur from state ${weight}`);
                      this.props.dispatch({
                        type: "UPDATE_WEIGHT",
                        payload: { weight, id, set }
                      });
                    }}
                  />
                </div>
              ) : null}
              <div>
                {" "}
                <i
                  className={`${styles.delete} fas fa-minus`}
                  onClick={() =>
                    dispatch({
                      type: "DELETE_SET",
                      payload: { set, id, isActive }
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
