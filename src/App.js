import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Output from "./Output";
import Footer from "./Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Form />
        <div className="flex">
          <Output />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
