import React, { Component } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Content />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
