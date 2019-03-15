import React, { Component } from "react";
import styles from "./calendar.module.css";
import Month from "./Month";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateCalendar() {
    const now = Date.now();
    const today = new Date(now).getDate();
    const month = new Date(now).getMonth();
    const year = new Date(now).getFullYear();
    const nDays = new Date(month, year, 0).getDate();
    const date = { today, month, year, nDays };

    this.setState({ date: date });
  }
  componentWillMount() {
    this.updateCalendar();
  }
  render() {
    const { date } = this.state;
    return (
      <div className="content">
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <i className="fas fa-caret-left" />
            </div>
            <div>
              {" "}
              <h1>Current Date</h1>
            </div>
            <div>
              <i className="fas fa-caret-right" />
            </div>
          </div>
          <div className={styles.body}>
            <Month date={date} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
