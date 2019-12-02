import React, { Component } from "react";
import firebase from "./firebase";

class IndividualItem extends Component {
  constructor() {
    super();
    this.state = {
      listClass: "null"
    };
  }
  crossOffItem = () => {
    const crossy = this.state.listClass;
    this.setState({
      listClass: !crossy
    });
  };
  removeItem = event => {
    const dbRef = firebase.database().ref();
    dbRef.child(event.target.id).remove();
  };

  render() {
    return (
      <li
        Key={this.props.itemIdProp}
        onClick={this.crossOffItem}
        className={this.state.listClass ? "null" : "crossedOut"}
      >
        {this.props.itemNameProp}
        <span
          id={this.props.itemIdProp}
          className="removeSpan"
          onClick={this.removeItem}
        >
          🗑
        </span>
      </li>
    );
  }
}
export default IndividualItem;
