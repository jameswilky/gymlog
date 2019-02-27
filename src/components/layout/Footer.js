import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="iconContainer">
          <div>
            <i className="fas fa-dumbbell" />
          </div>
          <div>
            <i className="fas fa-chart-line" />
          </div>
          <div>
            <i className="fas fa-calendar" />
          </div>
        </div>
        <div className="dividerOverlay">
          <div className="divider">|</div>
          <div className="divider">|</div>
          <div className="divider" />
        </div>
      </div>
    );
  }
}

export default Footer;
