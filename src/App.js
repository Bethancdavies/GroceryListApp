import React, { Component } from "react";
// import firebase from "./firebase";
import Header from "./Header";
import Form from "./Form";
import LeftOutput from "./LeftOutput";
import RightOutput from "./RightOutput";
import Footer from "./Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header />
        <Form />
        <div class="flex">
          <LeftOutput />
          <RightOutput />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
