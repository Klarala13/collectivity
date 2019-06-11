import React, { Component } from 'react';

class Rating extends Component{
    render() {
        if(this.props.rating === 0) {
            document.getElementById("rating-1").style.color = "#ddd"
            document.getElementById("rating-2").style.color = "#ddd"
            document.getElementById("rating-3").style.color = "#ddd"
            document.getElementById("rating-4").style.color = "#ddd"
            document.getElementById("rating-5").style.color = "#ddd"
        }
        if(this.props.rating === 1) {
            document.getElementById("rating-1").style.color = "#ffc107"
            document.getElementById("rating-2").style.color = "#ddd"
            document.getElementById("rating-3").style.color = "#ddd"
            document.getElementById("rating-4").style.color = "#ddd"
            document.getElementById("rating-5").style.color = "#ddd"
        }
        if(this.props.rating === 2) {
            document.getElementById("rating-1").style.color = "#ffc107"
            document.getElementById("rating-2").style.color = "#ffc107"
            document.getElementById("rating-3").style.color = "#ddd"
            document.getElementById("rating-4").style.color = "#ddd"
            document.getElementById("rating-5").style.color = "#ddd"
        }
        if(this.props.rating === 3) {
            document.getElementById("rating-1").style.color = "#ffc107"
            document.getElementById("rating-2").style.color = "#ffc107"
            document.getElementById("rating-3").style.color = "#ffc107"
            document.getElementById("rating-4").style.color = "#ddd"
            document.getElementById("rating-5").style.color = "#ddd"
        }
        if(this.props.rating === 4) {
            document.getElementById("rating-1").style.color = "#ffc107"
            document.getElementById("rating-2").style.color = "#ffc107"
            document.getElementById("rating-3").style.color = "#ffc107"
            document.getElementById("rating-4").style.color = "#ffc107"
            document.getElementById("rating-5").style.color = "#ddd"
        }
        if(this.props.rating === 5) {
            document.getElementById("rating-1").style.color = "#ffc107"
            document.getElementById("rating-2").style.color = "#ffc107"
            document.getElementById("rating-3").style.color = "#ffc107"
            document.getElementById("rating-4").style.color = "#ffc107"
            document.getElementById("rating-5").style.color = "#ffc107"
        }
        return(
            <div className="d-flex justify-content-center mt-3">
                <i id="rating-1" className="fas fa-1x fa-star rating-star" />
                <i id="rating-2" className="fas fa-1x fa-star rating-star" />
                <i id="rating-3" className="fas fa-1x fa-star rating-star" />
                <i id="rating-4" className="fas fa-1x fa-star rating-star" />
                <i id="rating-5" className="fas fa-1x fa-star rating-star" />
            </div>
        )
    }
}

export default Rating