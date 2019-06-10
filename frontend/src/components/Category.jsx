import React, { Component } from "react";

// const option = React.forwardRef((props, ref) => (
//   <option ref={ref} {...props} />
// ));
class Category extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     catRef: React.createRef(option)
  //   };
  // }

  render() {
    const option = this.props;
    console.log(option);
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
          <option value="House_Garden" ref={this.props}>
            House_Garden
          </option>
          <option value="Fashion" ref={this.catRef}>
            Fashion
          </option>
          <option value="Motors" ref={this.catRef}>
            Motors
          </option>
          <option value="Entertainment" ref={this.catRef}>
            Entertainment
          </option>
          <option value="Electronics" ref={this.catRef}>
            Electronics
          </option>
          <option value="Art_Collectibles" ref={this.catRef}>
            Art_Collectibles
          </option>
          <option value="Sports" ref={this.catRef}>
            Sports
          </option>
          <option value="Toys" ref={this.catRef}>
            Toys
          </option>
          <option value="Media" ref={this.catRef}>
            Media
          </option>
          <option value="Others" ref={this.catRef}>
            Others
          </option>
          <option value="Pets" ref={this.catRef}>
            Pets
          </option>
        </select>
      </div>
    );
  }
}
export default Category;
