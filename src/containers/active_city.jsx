import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    let city = <h3></h3>;
    if (this.props.activeCity) {
      city = (
        <React.Fragment>
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={this.props.activeCity.imageUrl} alt=""/>
        </React.Fragment>
      );
    }
    return (
      <div className="active-city">
        {city}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
