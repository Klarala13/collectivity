import React, { Component } from 'react';
import Item from "./FreebieItem";

class FreebieList extends Component{
    filteredItems = () => {
        const filtered = [];
    
        for (const id in this.props.items) {
          const item = this.props.items[id];
    
          if (
            this.props.filter === "all" ||
            (this.props.filter === "Motors" && item.tags === "Motors") ||
            (this.props.filter === "Fashion" && item.tags === "Fashion")
          ) {
            filtered.push(item);
          }
        }
    
        return filtered;
    };
    render() {
        return(
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Header</th>
                    </tr>
                </thead>
                <tbody>
                    {this.filteredItems().map(item => (
                        <Item 
                        key={this.props.items.id} 
                        data={item}/>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default FreebieList


