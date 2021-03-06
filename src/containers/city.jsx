import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import action
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    // const classes = this.props.city === this.props.selectedCity ? 'active-city' : ';'
    return (
      <div className="list-group-item" onClick={this.handleClick} >
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity }, dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (City);
