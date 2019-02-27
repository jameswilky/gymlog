import React, { Component } from "react";

import "./exercise.css";

class Exercise extends Component {
  state = {
    showExercise: true
  };
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
                <tr className="rep">
                  <td> 1 </td>
                  <td>
                    <i className="fas fa-minus minusRep" />
                  </td>
                  <td> 5</td>
                  <td>
                    <i className="fas fa-plus addRep" />
                  </td>
                  <td>
                    <i className="fas fa-minus minusSet" />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />

            <button className="addSet">
              <i className="fas fa-plus"> </i>
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
