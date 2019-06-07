import React, { Component } from "react";

// const category = React.forwardRef((props, ref) => (
//   <option ref={ref} {...props} />
// ));
class Category extends Component {
  render() {
    return (
      <div className="form-group category">
        <label htmlFor="select">Category</label>
        <select
          className="mdb-select md-form center form-control"
          name="category"
          id="category"
          required
        >
          <option value="">Make a selection</option>
          <option value="House_Garden" ref="House_Garden">
            House_Garden
          </option>
          <option value="Fashion">Fashion</option>
          <option value="Motors">Motors</option>
          <option value="Entertainment" ref="Entertainment">
            Entertainment
          </option>
          <option value="Electronics" ref="Electronics">
            Electronics
          </option>
          <option value="Art_Collectibles" ref="Art_Collectibles">
            Art_Collectibles
          </option>
          <option value="Sports" ref="Sports">
            Sports
          </option>
          <option value="Toys" ref="Toys">
            Toys
          </option>
          <option value="Media" ref="Media">
            Media
          </option>
          <option value="Others" ref="Others">
            Others
          </option>
          <option value="Pets" ref="Pets">
            Pets
          </option>
        </select>
      </div>
    );
  }
}
export default Category;
