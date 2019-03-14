import React, { Component } from "react";
import styles from "./calendar.module.css";
import Month from "./Month";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const now = Date.now();
    const currentMonthIndex = new Date(now).getMonth();
    this.setState({ currentMonthIndex: currentMonthIndex });
  }
  render() {
    const { currentMonthIndex } = this.state;
    return (
      <div className="content">
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <i class="fas fa-caret-left" />
            </div>
            <div>
              {" "}
              <h1>Current Date</h1>
            </div>
            <div>
              <i class="fas fa-caret-right" />
            </div>
          </div>
          <div className={styles.body}>
            <Month month={currentMonthIndex} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
