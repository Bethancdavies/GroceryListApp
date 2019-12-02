import React, { Component } from "react";
import IndividualItem from "./IndividualItem";

class GroceryList extends Component {
  constructor() {
    super();
    this.state = {
      listClass: "null"
    };
  }

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
                <IndividualItem
                  itemNameProp={item.groceryItem.itemName}
                  itemIdProp={item.id}
                />
              );
            })}
          </ul>

          <h3>Produce:</h3>
          <ul>
            {fruitVegArray.map(item => {
              return (
                <IndividualItem
                  itemNameProp={item.groceryItem.itemName}
                  itemIdProp={item.id}
                />
              );
            })}
          </ul>

          <h3>Dairy:</h3>
          <ul>
            {dairyArray.map(item => {
              return (
                <IndividualItem
                  itemNameProp={item.groceryItem.itemName}
                  itemIdProp={item.id}
                />
              );
            })}
          </ul>

          <h3>Pantry Items:</h3>
          <ul>
            {dryGoodsArray.map(item => {
              return (
                <IndividualItem
                  itemNameProp={item.groceryItem.itemName}
                  itemIdProp={item.id}
                />
              );
            })}
          </ul>

          <h3>Freezer Items:</h3>
          <ul>
            {freezerItemsArray.map(item => {
              return (
                <IndividualItem
                  itemNameProp={item.groceryItem.itemName}
                  itemIdProp={item.id}
                />
              );
            })}
          </ul>

          <h3>Miscellaneous:</h3>
          <ul>
            {miscArray.map(item => {
              return (
                <IndividualItem
                  itemNameProp={item.groceryItem.itemName}
                  itemIdProp={item.id}
                />
              );
            })}
          </ul>
        </div>
        {/* clear list button still need to be functional */}
        <button type="submit" className="clearList" onClick={this.clearList}>
          Clear List
        </button>
      </div>
    );
  }
}

export default GroceryList;
