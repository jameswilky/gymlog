import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div>
          <i className="fas fa-dumbbell" />
          <span className="divider">|</span>
        </div>
        <div>
          <i className="fas fa-chart-line" />
          <span className="divider">|</span>
        </div>
        <div>
          <i className="fas fa-calendar" />
          <span className="divider">|</span>
        </div>
      </div>
    );
  }
}

export default Footer;
