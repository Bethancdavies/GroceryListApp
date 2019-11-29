import React, { Component } from "react";
import firebase from "./firebase";

class Form extends Component {
  // SETS STATE OF INPUTS BY USER
  constructor() {
    super();
    this.state = {
      itemName: "",
      category: "",
      newItemsArray: []
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snapshot => {
      const groceryItems = snapshot.val();
      const newItems = [];

      for (let key in groceryItems) {
        const individualGroceryItem = {
          id: key,
          groceryItem: groceryItems[key]
        };
        newItems.push(individualGroceryItem);
        // console.log(newItems);
      }
      this.setState({
        newItemsArray: newItems
      });
    });
  }
  // ON SUBMIT ITEM NAME AND CATEGORY ARE SENT TO FIREBASE
  handleFormSubmit = event => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push({
      itemName: this.state.itemName,
      category: this.state.category
    });

    // console.log(newItems);
    // get all the values and submit to firebase
  };
  // ASSESSES WHICH RADIO BUTTON IS CLICKED
  handleChangeRadio = event => {
    this.setState({
      category: event.target.value
    });
  };
  // ESTABLISHES A CHANGE IN THE TEXT INPUT
  handleChangeText = event => {
    this.setState({
      itemName: event.target.value
    });
  };

  render() {
    console.log(this.state.newItemsArray);
    return (
      <form>
        <input
          type="text"
          name="userInput"
          autoComplete="off"
          onChange={this.handleChangeText}
        />
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
