import React, { Component } from "react";
class Card extends Component {
  state = {
    showCard: true // set to false on deploy
  };

  render() {
    const { showCard } = this.state;

    return (
      <div className="card">
        <div className="card__header">
          <div>
            <h3>Workout 1</h3>
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
              <table>
                <thead>
                  <th> Excercise</th>
                  <th> Reps </th>
                  <th> Sets </th>
                  <th> Weight</th>
                </thead>
                <tbody>
                  <tr>
                    <td> Squats </td>
                    <td> 5 </td>
                    <td> 5 </td>
                    <td> 120 </td>
                  </tr>
                  <tr>
                    <td> Deadlift </td>
                    <td> 5 </td>
                    <td> 5 </td>
                    <td> 120 </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card__footer">
              <button className="card__Add">
                <i className="fas fa-plus"> </i>
                Add
              </button>

              <button className="card__edit">
                <i className="fas fa-pencil-alt"> </i>
                Edit
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

export default Card;
