import React, { Component } from "react";


class FreebieItemPage extends Component {
constructor(props){
  super(props);

  this.state = {
    singleFreebie: {}
  }
}
  componentWillMount = () => {
    const pageURL = window.location.href;
    const freebieId = pageURL.substr(pageURL.lastIndexOf('/') + 1);

    const data = {
      item_id: freebieId
    }

    fetch("http://localhost:4001/freebies/one",{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ singleFreebie: res[0] });
    })
    
    }
  render() {
console.log(this.state.singleFreebie.item)
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div id="carouselExampleControls" className="carousel slide mt-2 mb-5" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={this.state.singleFreebie.image} alt="First slide"/>
                </div>
        {/*        <div className="carousel-item">
                  <img className="d-block w-100" src="..." alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="..." alt="Third slide"/>
                </div> */}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">

          </div>
        </div>

       <h1>{this.state.singleFreebie.item}</h1>
       <p>{this.state.singleFreebie.description}</p>
      </div>
    );
  }
}

export default FreebieItemPage;
