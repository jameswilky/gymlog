import React, { Component } from "react";
import Set from "./Set";

import "./exercise.css";

class Exercise extends Component {
  state = {
    showExercise: false
  };

  addSet() {
    console.log("Add set");
  }
  render() {
    const { showExercise } = this.state;
    return (
      <div className="exercise__container">
        <div className="exercise__header">
          <div>
            <h3>Squat</h3>
          </div>
          {!showExercise ? (
            <div className="tag__container__header">
              <div className="tag"> Low Bar</div>
              <div className="tag"> Paused </div>
              <div className="tag"> Wide Stance </div>

              <div className="newTag">
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
          <div className="exercise__body">
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
                <Set reps={5} set={1} />
                <Set reps={5} set={2} />
                <Set reps={5} set={3} />
                <Set reps={5} set={4} />
              </tbody>
            </table>
            <button className="addSet">
              <i className="fas fa-plus" onClick={() => this.addSet()}>
                {" "}
              </i>
            </button>

            <hr />
            <div className="tag__container__body">
              <div className="tag"> Low Bar</div>
              <div className="tag"> Paused </div>
              <div className="tag"> Wide Stance </div>

              <div className="newTag">
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
