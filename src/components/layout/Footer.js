import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="iconContainer">
          <div className="dividerOverlay">
            <div className="divider">|</div>
            <div className="divider">|</div>
            <div className="divider" />
          </div>
          {/* todo - check if active workout and redirect to active workout if available */}
          <Link to={{ pathname: "/" }}>
            <div>
              <i className="fas fa-dumbbell" />
            </div>
          </Link>

          <div>
            <i className="fas fa-chart-line" />
          </div>
          <Link to={{ pathname: "/history" }}>
            <div onClick={() => console.log("history")}>
              <i className="fas fa-calendar" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
