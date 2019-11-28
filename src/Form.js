import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" name="userInput" id="InputtedFoodItem" />
        <fieldset>
          <legend>Select a category below</legend>
          <label>Meat</label>
          <input type="radio" name="categoryInput" id="meat" />
          <label>Fruit and Vegeatables</label>
          <input type="radio" name="categoryInput" id="fruitVeg" />
          <label>Dairy Products</label>
          <input type="radio" name="categoryInput" id="dairy" />
          <label>Dry Goods and Pantry Items</label>
          <input type="radio" name="categoryInput" id="dryGoods" />
          <label>Freezer Items</label>
          <input type="radio" name="categoryInput" id="freezerItems" />
          <label>Miscellaneous</label>
          <input type="radio" name="categoryInput" id="misc" />
        </fieldset>
        <button type="submit">Submit Item</button>
      </form>
    );
  }
}

export default Form;
