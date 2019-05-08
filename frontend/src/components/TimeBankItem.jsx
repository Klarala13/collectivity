import React, { Component } from 'react';

class TimeBankItem extends Component{
    render() {
        return(
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.time}</td>
            </tr>
        )
    }
}

export default TimeBankItem
