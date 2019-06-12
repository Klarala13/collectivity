import React, { Component } from 'react';
import dateformat from "dateformat";
import Rating from "./Rating";

class UserCard extends Component{
    render() {
        function propsHandler(props){
            if (props.freebies) {
                return <span className="text-center pt-3">Who owns this item?</span>
            }
    
            if (props.timebanks) {
                return <span className="text-center pt-3">Who is offering this skill?</span>
            }
        }

        const date = this.props.singleUser.registration_date
        const parsedDate = dateformat(date, "mmmm dS, yyyy");

        return (
            <div className="card" style={{ width: "18rem" }}>
                {propsHandler(this.props)}
                <h2 className="py-3 mb-0 card-title">
                {this.props.singleUser.first_name}{" "}
                {this.props.singleUser.last_name}
                </h2>
                <img
                className="center mb-3"
                src={this.props.singleUser.image}
                alt="Card user"
                />
                <Rating rating={this.props.singleUser.rating}/>
                <div className="card-body">
                    <div className="container">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-right">City</th>
                                    <td className="text-center">{this.props.singleUser.city} ({this.props.singleUser.zip_code})</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-right">Joined</th>
                                    <td className="text-center">{parsedDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                        <a
                        href={"mailto:" + this.props.singleUser.email}
                        target="_blank"
                        >
                        <i
                            className="far fa-envelope text-primary fa-2x"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Contact User"
                        />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default UserCard;