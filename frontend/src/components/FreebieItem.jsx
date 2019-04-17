import React, { Component } from 'react';

class Item extends Component{
    render() {
        return(
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>
                    <img src={this.props.data.imageUrl} 
                    style={{width: "100px"}} 
                    alt={this.props.data.name}/>
                </td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.header}</td>
            </tr>
        )
    }
}

export default Item