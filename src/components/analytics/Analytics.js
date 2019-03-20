import React from "react";
import Graph from "../graphs/Graph";

export default function Analytics() {
  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <Graph>Test</Graph>
        </div>
      </div>
      <div className="main__button red">
        <i className="fas fa-plus" />
      </div>
    </div>
  );
}
