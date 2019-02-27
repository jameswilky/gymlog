import React, { Component } from "react";

import Card from "./Card";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <Card />
        </div>
      </div>
    );
  }
}

export default Content;
