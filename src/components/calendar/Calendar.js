import React, { Component } from "react";
import styles from "./calendar.module.css";
import Month from "./Month";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    this.setCalendar();
  }
  setCalendar() {
    const now = Date.now();
    const today = new Date(now).getDate();
    const month = new Date(now).getMonth();
    const year = new Date(now).getFullYear();
    const nDays = new Date(month, year, 0).getDate();
    const date = { today, month, year, nDays };

    this.setState({ date: date });
  }
  getMonthName() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return monthNames[this.state.date.month];
  }
  getNextYear(i) {
    console.log(this);
    return this.state.date.year + i;
  }
  getNextMonth(i) {
    let nextYear;
    let nextMonth = this.state.date.month + i;
    if (nextMonth < 0) {
      nextMonth = 11;
      nextYear = this.getNextYear(-1);
    } else if (nextMonth > 11) {
      nextMonth = 0;
      nextYear = this.getNextYear(1);
    } else {
      nextYear = this.state.date.year;
    }
    this.setState({
      ...this.state,
      date: { ...this.state.date, month: nextMonth, year: nextYear }
    });
  }
  render() {
    const { date } = this.state;
    return (
      <div className="content">
        <div className={styles.container}>
          <div className={styles.header}>
            <div onClick={() => this.getNextMonth(-1)}>
              <i className="fas fa-caret-left" />
            </div>
            <div>
              {" "}
              <h1>
                {this.getMonthName()}, {date.year}
              </h1>
            </div>
            <div onClick={() => this.getNextMonth(1)}>
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
