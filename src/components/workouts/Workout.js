import React, { Component } from "react";

import Exercise from "../exercises/Exercise";
import styles from "./workout.module.css";

class Workout extends Component {
  state = {
    showCard: false
  };

  onSelectClick = id => {
    this.props.selectClickHandler(id);
  };

  render() {
    const { showCard, selected } = this.state;
    const { id, name, exercises } = this.props.workout;

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
            <h2>{name}</h2>
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
              <button className="card__add">
                <i className="fas fa-plus"> </i>
                Add
              </button>

              <button className="card__delete">
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
