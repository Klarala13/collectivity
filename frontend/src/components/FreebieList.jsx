import React, { Component } from 'react';
import Item from "./FreebieItem";

class FreebieList extends Component{
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
                {Object.keys(this.props.items).map(id => (
                <Item key={this.props.items.id} data={this.props.items[id]}/>
                ))}
                </tbody>
            </table>
        )
    }
}

export default FreebieList