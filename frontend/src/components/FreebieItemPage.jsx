import React, { Component } from "react";


class FreebieItemPage extends Component {
constructor(props){
  super(props);

  this.state = {
    singleFreebie: {},
    singleUser: {}
  }
}
  componentDidMount() {
    const pageURL = window.location.href;
    const freebieId = pageURL.substr(pageURL.lastIndexOf('/') + 1);

    const itemData = {
      item_id: freebieId
    }

    fetch("http://localhost:4001/freebies/one",{
      method: "POST",
      body: JSON.stringify(itemData),
      headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ 
        singleFreebie: res[0] 
      }, () => {
        const userId = {
          user_id: this.state.singleFreebie.user_id
        }
      
      return fetch("http://localhost:4001/freebies/user",{
        method: "POST",
        body: JSON.stringify(userId),
        headers: {
          'Content-Type': 'application/json',
          },
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            singleUser: res
          })
        })
      }); 
    })
      
    }

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={this.state.singleFreebie.image} alt="First slide"/>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-4">
            <div className="card" style={{width: "18rem"}}>
            <h2 className="py-3 mb-0">User Info</h2>
              <img className="rounded-circle center" src={this.state.singleUser.image} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">{this.state.singleUser.first_name} {this.state.singleUser.last_name}</h5>
                <p className="card-text">
                  City: {this.state.singleUser.city} <br/>
                  ZIP-Code: {this.state.singleUser.zip_code} <br/>
                  {/* Active Since: {activeSince} <br/> */}
                
                </p>
                <div className="col-12 d-flex justify-content-center">
                  <a href={"mailto:" + this.state.singleUser.email} target="_blank">
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
          </div>
        </div>
        <div className="container">
          <h1>{this.state.singleFreebie.item}</h1>
          <p>{this.state.singleFreebie.description}</p>

           <div className="d-block d-lg-none">
            <h2>User Info</h2>
            <p>{this.state.singleUser.first_name} {this.state.singleUser.last_name}</p>
            <img className="rounded-circle center pt-4" src={this.state.singleUser.image} alt="First slide"/>
            <p>ZIP Code: {this.state.singleFreebie.zip_code}</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default FreebieItemPage;
