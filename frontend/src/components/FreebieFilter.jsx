import React, { Component } from 'react';

class FreebieFilter extends Component{
    filters=['All', 'House+Garden', 'Fashion', 'Motors', 'Entertainment', 'Electronics', 'Art/Collectibles', 'Sports', 'Toys', 'Media', 'Others', 'Pets']
    
    render() {
        return(
            <div className="freebie-filters text-right">
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Set a filter to show items"
            >
              {this.filters.map(filter => (
                <button
                  type="button"
                  className={`btn btn-light ${
                    this.props.activeFilter === filter ? "active" : ""
                  }`}
                  onClick={e => {
                    this.props.setFilter(filter);
                  }}
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )
    }
}

export default FreebieFilter