import React, { Component } from 'react';
import dateformat from "dateformat";

class UserCard extends Component{
    render() {
        function propsHandler(props){
            if (props.freebies) {
                return <p className="pl-3 pt-3">Who owns this item?</p>
            }
    
            if (props.timebanks) {
                return <p className="pl-3 pt-3">Who is offering this skill?</p>
            }
        }

        const date = this.props.singleUser.registration_date
        const parsedDate = dateformat(date, "mmmm dS, yyyy");

        return (
            <div className="card" style={{ width: "18rem" }}>
                {propsHandler(this.props)}
                <h2 className="py-3 mb-0">
                {this.props.singleUser.first_name}{" "}
                {this.props.singleUser.last_name}
                </h2>
                <img
                className="center"
                src={this.props.singleUser.image}
                alt="Card user"
                />
                <span className="w-100 text-center mt-3">joined on {parsedDate}</span>
                <div className="card-body">
                <h5 className="card-title font-weight-bold">

                </h5>
                <p className="card-text">
                    City: {this.props.singleUser.city} <br />
                    ZIP-Code: {this.props.singleUser.zip_code} <br />
                </p>
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