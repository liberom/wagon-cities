import React, { Component } from 'react';

class City extends Component {
  render() {
    // const classes = this.props.city === this.props.selectedCity ? 'active-city' : ';'
    return (
      <div className="list-group-item" >
        {this.props.city.name}
      </div>
    );
  }
}

export default City;
