import React, { Component } from "react";
import Set from "./sets/Set";

import styles from "./exercise.module.css";
import uuid from "uuid";

class Exercise extends Component {
  state = {
    showExercise: false
  };

  addSet() {
    console.log("Add set");
  }
  render() {
    const { showExercise } = this.state;
    const { name, tags, sets } = this.props.exercise;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h3>{name}</h3>
          </div>
          {!showExercise ? (
            <div className={styles.tagContainer}>
              {tags.map(tag => (
                <div className={styles.tag} key={uuid()}>
                  {tag}
                </div>
              ))}

              <div className={styles.createTagBtn}>
                <i className="fas fa-plus" />
                New Tag
              </div>
            </div>
          ) : (
            <div />
          )}

          <div>
            <i
              className="fas fa-angle-down"
              onClick={() => this.setState({ showExercise: !showExercise })}
            />
          </div>
          <i />
        </div>
        {showExercise ? (
          <div className={styles.body}>
            <hr />
            <table>
              <thead>
                <tr>
                  <th>Set</th>
                  <th />
                  <th>Reps</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {sets.map((reps, set) => (
                  /* Takes in an array, each value represents the number of reps,
                     'set' represents the set order
                  */
                  <Set reps={reps} set={set} key={uuid()} />
                ))}
              </tbody>
            </table>
            <button className={styles.add}>
              <i className="fas fa-plus" onClick={() => this.addSet()}>
                {" "}
              </i>
            </button>

            <hr />
            <div className={styles.tagContainer}>
              {tags.map(tag => (
                <div className={styles.tag} key={uuid()}>
                  {tag}
                </div>
              ))}

              <div className={styles.createTagBtn}>
                <i className="fas fa-plus" />
                New Tag
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Exercise;
