import React, { Component } from "react";
// import Form from "./Form";

class GroceryList extends Component {
  render() {
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
    console.log(miscArray);

    return (
      <div className="GroceryList">
        <h2>Your List</h2>
        <h3>Meats</h3>
        <ul>
          {meatArray.map((item, key) => {
            return <li id={key}>{item.groceryItem.itemName}</li>;
          })}
        </ul>
        <h3>Fruits and vegeatables</h3>
        <ul>
          {fruitVegArray.map((item, key) => {
            return <li id={key}>{item.groceryItem.itemName}</li>;
          })}
        </ul>
        <h3>Dairy </h3>
        <ul>
          {dairyArray.map((item, key) => {
            return <li id={key}>{item.groceryItem.itemName}</li>;
          })}
        </ul>
        <h3>Dry Goods and Pantry Items</h3>
        <ul>
          {" "}
          {dryGoodsArray.map((item, key) => {
            return <li id={key}>{item.groceryItem.itemName}</li>;
          })}
        </ul>
        <h3>Freezer Items</h3>
        <ul>
          {" "}
          {freezerItemsArray.map((item, key) => {
            return <li id={key}>{item.groceryItem.itemName}</li>;
          })}
        </ul>

        <h3>Miscellaneous</h3>
        <ul>
          {" "}
          {miscArray.map((item, key) => {
            return <li id={key}>{item.groceryItem.itemName}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default GroceryList;
