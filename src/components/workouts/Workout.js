import React, { Component } from "react";

import Exercises from "../exercises/Exercise";
import Exercise from "../exercises/Exercise";

class Workout extends Component {
  state = {
    showCard: true // set to false on deploy
  };

  render() {
    const { showCard } = this.state;

    return (
      <div className="card">
        <div className="card__header">
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
              <Exercises>
                <Exercise />
              </Exercises>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Workout;
