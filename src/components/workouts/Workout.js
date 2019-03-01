import React, { Component } from "react";

import Exercise from "../exercises/Exercise";
import styles from "./workout.module.css";

class Workout extends Component {
  state = {
    showCard: false,
    name: ""
  };

  componentDidMount() {
    /* On Load pass workout name into local state */
    console.log(this.props);
    const { name } = this.props.workout;
    this.setState({
      name
    });
  }

  onSelectClick = id => {
    this.props.selectClickHandler(id);
  };
  onAddExerciseClick = id => {
    this.props.addExerciseHandler(id);
  };
  onDeleteWorkoutClick = id => {
    this.props.deleteWorkoutHandler(id);
  };

  onChange = e => {
    /* Update local state on each click*/
    /* @todo look up focus/blur to submit after clicking away */

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showCard, name } = this.state;
    const { id, exercises } = this.props.workout;
    const { selected } = this.props;

    return (
      <div className="card">
        <div className="card__header">
          <div onClick={() => this.onSelectClick(id)}>
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
              className={`${styles.heading}`}
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
                onClick={() => this.onAddExerciseClick(id)}
              >
                <i className="fas fa-plus"> </i>
                Add
              </button>

              <button
                className="card__delete"
                onClick={() => this.onDeleteWorkoutClick(id)}
              >
                <i className="fas fa-trash" />
                Delete
              </button>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Workout;
