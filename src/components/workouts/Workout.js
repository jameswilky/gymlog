import React, { Component } from "react";

import Exercise from "../exercises/Exercise";

class Workout extends Component {
  state = {
    showCard: false // set to false on deploy
  };

  render() {
    const { showCard } = this.state;

    return (
      <div className="card">
        <div className="card__header">
          <div>
            <i className="far fa-circle" />
          </div>
          <div>
            <h2>Push Day</h2>
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
              <Exercise />
              <Exercise />
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Workout;
