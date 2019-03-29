import React, { Component } from "react";

import styles from "./workout.module.css";
import { Consumer } from "../../Context";
import Workout from "../workouts/Workout";

class WorkoutContainer extends Component {
  state = {
    showCard: false,
    name: ""
  };

  componentDidMount() {
    /* On Load pass workout name into local state */
    const { name } = this.props.workout;
    this.setState({
      name
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showCard } = this.state;
    const { id, exercises, name } = this.props.workout;
    const { selected } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card__header">
                <div
                  onClick={() =>
                    dispatch({ type: "SELECT_WORKOUT", payload: { id } })
                  }
                >
                  {selected ? (
                    // If selected
                    <i
                      className={`${styles.circle} ${
                        styles.selected
                      } far fa-check-circle`}
                    />
                  ) : (
                    //If not selected
                    <i className={`${styles.circle} far fa-circle`} />
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name={"name"}
                    onChange={this.onChange}
                    value={name}
                    className={"card__title"}
                    onKeyPress={e => {
                      // Blur on Enter
                      if (e.key === "Enter") {
                        e.target.blur();
                        dispatch({
                          type: "UPDATE_WORKOUT_NAME",
                          payload: { name, id }
                        });
                      }
                    }}
                  />
                </div>
                <div>
                  <i
                    className="fas fa-angle-down"
                    onClick={() => this.setState({ showCard: !showCard })}
                  />
                </div>
              </div>

              {showCard ? (
                <Workout
                  exercises={exercises}
                  id={id}
                  isActive={false}
                  dispatch={dispatch}
                  name={name}
                />
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WorkoutContainer;
