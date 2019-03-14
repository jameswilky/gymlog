import React, { Component } from "react";
import uuid from "uuid";
import styles from "./exercise.module.css";

export default class ExerciseHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    const {
      id,
      dispatch,
      showExercise,
      tags,
      toggleExerciseHandler,
      isActive
    } = this.props;
    const { name } = this.state;
    return (
      <div className={styles.header}>
        <div>
          <input
            style={{
              textAlign: showExercise ? "center" : "left"
            }}
            type="text"
            name={"name"}
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
            value={name}
            className={`${styles.heading}`}
            onBlur={() => {
              dispatch({
                type: "UPDATE_EXERCISE_NAME",
                payload: { name, id, isActive }
              });
            }}
            onKeyPress={e => {
              // Blur on Enter
              if (e.key === "Enter") {
                e.target.blur();
              }
            }}
          />
        </div>
        {!showExercise ? (
          <div className={styles.tagContainer}>
            {tags.map(tag => (
              <div className={styles.tag} key={uuid()}>
                {tag}
              </div>
            ))}
          </div>
        ) : (
          <div />
        )}

        <div>
          <i
            className="fas fa-angle-down"
            onClick={() => toggleExerciseHandler(showExercise)}
          />
        </div>
        <i />
      </div>
    );
  }
}
