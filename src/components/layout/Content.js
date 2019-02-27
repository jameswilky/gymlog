import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="card">
            <div className="card__header">
              <div>
                <h3>Workout 1</h3>
              </div>
              <div>
                <i className="fas fa-pencil-alt" />
              </div>
              <div>
                <i className="fas fa-trash" />
              </div>
              <div>
                <i className="fas fa-angle-down" />
              </div>
            </div>
            <div className="card__body">
              <div>Excercise 1</div>
              <div>Excercise 2</div>
              <div>Excercise 3</div>
            </div>
          </div>
          <div className="card" />
          <div className="card" />
        </div>
      </div>
    );
  }
}

export default Content;
