import React, { Component } from "react";
import firebase from "./firebase";
// import Form from "./Form";

class GroceryList extends Component {
  // function to remove items from grocery list, how to use a font awesome with a span to not have an error
  removeItem = event => {
    const dbRef = firebase.database().ref();
    dbRef.child(event.target.id).remove();
  };
  // function to cross off item on the grocery list
  crossOffItem = event => {
    console.log("li is clicked, format me :)");
  };

  render() {
    // filtering array by category to properly display, filter then map over the array below
    const meatArray = this.props.newItemsArrayProp.filter((item, i) => {
      return item.groceryItem.category === "meat";
    });
    const fruitVegArray = this.props.newItemsArrayProp.filter((item, i) => {
      return item.groceryItem.category === "fruitVeg";
    });
    const dairyArray = this.props.newItemsArrayProp.filter((item, i) => {
      return item.groceryItem.category === "dairy";
    });
    const dryGoodsArray = this.props.newItemsArrayProp.filter((item, i) => {
      return item.groceryItem.category === "dryGoods";
    });
    const freezerItemsArray = this.props.newItemsArrayProp.filter((item, i) => {
      return item.groceryItem.category === "freezerItems";
    });
    const miscArray = this.props.newItemsArrayProp.filter((item, i) => {
      return item.groceryItem.category === "misc";
    });

    return (
      // printing the arays from database in categories

      <div className="groceryList">
        <div className="groceryBox">
          <h2>Your List</h2>
          <h3>Meats:</h3>
          <ul>
            {meatArray.map(item => {
              return (
                <li key={item.id} onClick={this.crossOffItem}>
                  {item.groceryItem.itemName}
                  <span
                    id={item.id}
                    className="removeSpan"
                    onClick={this.removeItem}
                  >
                    🗑
                  </span>
                </li>
              );
            })}
          </ul>

          <h3>Produce:</h3>
          <ul>
            {fruitVegArray.map(item => {
              return (
                <li key={item.id} onClick={this.crossOffItem}>
                  {item.groceryItem.itemName}
                  <span
                    id={item.id}
                    className="removeSpan"
                    onClick={this.removeItem}
                  >
                    🗑
                  </span>
                </li>
              );
            })}
          </ul>

          <h3>Dairy:</h3>
          <ul>
            {dairyArray.map(item => {
              return (
                <li key={item.id} onClick={this.crossOffItem}>
                  {item.groceryItem.itemName}
                  <span
                    id={item.id}
                    className="removeSpan"
                    onClick={this.removeItem}
                  >
                    🗑
                  </span>
                </li>
              );
            })}
          </ul>

          <h3>Pantry Items:</h3>
          <ul>
            {dryGoodsArray.map(item => {
              return (
                <li key={item.id} onClick={this.crossOffItem}>
                  {item.groceryItem.itemName}
                  <span
                    id={item.id}
                    className="removeSpan"
                    onClick={this.removeItem}
                  >
                    🗑
                  </span>
                </li>
              );
            })}
          </ul>

          <h3>Freezer Items:</h3>
          <ul>
            {freezerItemsArray.map(item => {
              return (
                <li key={item.id} onClick={this.crossOffItem}>
                  {item.groceryItem.itemName}{" "}
                  <span
                    id={item.id}
                    className="removeSpan"
                    onClick={this.removeItem}
                  >
                    🗑
                  </span>
                </li>
              );
            })}
          </ul>

          <h3>Miscellaneous:</h3>
          <ul>
            {miscArray.map(item => {
              return (
                <li key={item.id} onClick={this.crossOffItem}>
                  {item.groceryItem.itemName}{" "}
                  <span
                    id={item.id}
                    className="removeSpan"
                    onClick={this.removeItem}
                  >
                    🗑
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default GroceryList;
