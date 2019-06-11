import React, { Component } from 'react';

class Rating extends Component{
    constructor(props){
        super(props);
        this.ratingOne = React.createRef();
        this.ratingTwo = React.createRef();
        this.ratingThree = React.createRef();
        this.ratingFour = React.createRef();
        this.ratingFive = React.createRef();
    }
    
    render() {
        if(this.props.rating === 0) {
            this.ratingOne.current.style.color = "#ddd"
            this.ratingTwo.current.style.color = "#ddd"
            this.ratingThree.current.style.color = "#ddd"
            this.ratingFour.current.style.color = "#ddd"
            this.ratingFive.current.style.color = "#ddd"
        }
        if(this.props.rating === 1) {
            this.ratingOne.current.style.color = "#ffc107"
            this.ratingTwo.current.style.color = "#ddd"
            this.ratingThree.current.style.color = "#ddd"
            this.ratingFour.current.style.color = "#ddd"
            this.ratingFive.current.style.color = "#ddd"
        }
        if(this.props.rating === 2) {
            this.ratingOne.current.style.color = "#ffc107"
            this.ratingTwo.current.style.color = "#ffc107"
            this.ratingThree.current.style.color = "#ddd"
            this.ratingFour.current.style.color = "#ddd"
            this.ratingFive.current.style.color = "#ddd"
        }
        if(this.props.rating === 3) {
            this.ratingOne.current.style.color = "#ffc107"
            this.ratingTwo.current.style.color = "#ffc107"
            this.ratingThree.current.style.color = "#ffc107"
            this.ratingFour.current.style.color = "#ddd"
            this.ratingFive.current.style.color = "#ddd"
        }
        if(this.props.rating === 4) {
            this.ratingOne.current.style.color = "#ffc107"
            this.ratingTwo.current.style.color = "#ffc107"
            this.ratingThree.current.style.color = "#ffc107"
            this.ratingFour.current.style.color = "#ffc107"
            this.ratingFive.current.style.color = "#ddd"
        }
        if(this.props.rating === 5) {
            this.ratingOne.current.style.color = "#ffc107"
            this.ratingTwo.current.style.color = "#ffc107"
            this.ratingThree.current.style.color = "#ffc107"
            this.ratingFour.current.style.color = "#ffc107"
            this.ratingFive.current.style.color = "#ffc107"
        }
        return(
            <div className="d-flex justify-content-center mt-3">
                <i ref={this.ratingOne} className="fas fa-1x fa-star rating-star" />
                <i ref={this.ratingTwo} className="fas fa-1x fa-star rating-star" />
                <i ref={this.ratingThree} className="fas fa-1x fa-star rating-star" />
                <i ref={this.ratingFour} className="fas fa-1x fa-star rating-star" />
                <i ref={this.ratingFive} className="fas fa-1x fa-star rating-star" />
            </div>
        )
    }
}

export default Rating