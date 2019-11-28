import React, { Component } from "react";
import firebase from "./firebase";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      category: "",
      id: ""
      // how to get this category to respond to the radio button chosen, idea is to collect 6 seperate arrays....
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snapshot => {
      const groceryItems = snapshot.val();

      const newGroceryItems = [];
      for (let key in groceryItems) {
        const newGroceryItemObject = {
          id: key
        };
        // console.log(groceryItems[key]);
        // groceryItems[key].update({
        //   id: key
        // });
        newGroceryItems.push(newGroceryItemObject);
      }
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push({
      itemName: this.state.itemName,
      category: this.state.category
    });

    // get all the values and submit to firebase
  };

  handleChangeRadio = event => {
    this.setState({
      category: event.target.value
    });
  };
  handleChangeText = event => {
    this.setState({
      itemName: event.target.value
    });
  };

  render() {
    return (
      <form>
        <input type="text" name="userInput" onChange={this.handleChangeText} />
        <fieldset>
          <legend>Select a category below</legend>
          <label>Meat</label>
          <input
            type="radio"
            name="categoryInput"
            value="meat"
            checked={this.state.category === "meat"}
            onChange={this.handleChangeRadio}
          />
          <label>Fruit and Vegeatables</label>
          <input
            type="radio"
            name="categoryInput"
            value="fruitVeg"
            checked={this.state.category === "fruitVeg"}
            onChange={this.handleChangeRadio}
          />
          <label>Dairy Products</label>
          <input
            type="radio"
            name="categoryInput"
            value="dairy"
            checked={this.state.category === "dairy"}
            onChange={this.handleChangeRadio}
          />
          <label>Dry Goods and Pantry Items</label>
          <input
            type="radio"
            name="categoryInput"
            value="dryGoods"
            checked={this.state.category === "dryGoods"}
            onChange={this.handleChangeRadio}
          />
          <label>Freezer Items</label>
          <input
            type="radio"
            name="categoryInput"
            value="freezerItems"
            checked={this.state.category === "freezerItems"}
            onChange={this.handleChangeRadio}
          />
          <label>Miscellaneous</label>
          <input
            type="radio"
            name="categoryInput"
            value="misc"
            checked={this.state.category === "misc"}
            onChange={this.handleChangeRadio}
          />
        </fieldset>
        <button type="submit" onClick={this.handleFormSubmit}>
          Submit Item
        </button>
      </form>
    );
  }
}

export default Form;
