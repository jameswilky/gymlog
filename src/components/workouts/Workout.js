import React, { Component } from "react";

import Exercise from "../exercises/Exercise";
import styles from "./workout.module.css";
import { LoaderConsumer } from "../../LoaderContext";

class Workout extends Component {
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
    const { showCard, name } = this.state;
    const { id, exercises } = this.props.workout;
    const { selected } = this.props;
    return (
      <LoaderConsumer>
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
                <React.Fragment>
                  <div className="card__body">
                    {exercises.map(exercise => (
                      <Exercise key={exercise.id} exercise={exercise} />
                    ))}
                  </div>

                  <div className="card__footer">
                    <button
                      className="card__add"
                      onClick={() =>
                        dispatch({ type: "ADD_EXERCISE", payload: { id } })
                      }
                    >
                      <i className="fas fa-plus"> </i>
                      Add
                    </button>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
          );
        }}
      </LoaderConsumer>
    );
  }
}

export default Workout;
