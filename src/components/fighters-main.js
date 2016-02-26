import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchFighters } from '../actions/index';

class FightersMain extends Component {
  componentWillMount() {
    this.props.fetchFighters();
  }

  renderFighters() {
    return this.props.fighters.map((fighter) => {
      return (
        <div className="fighter-box" key={fighter.id}>
          <div className="fighter-image">
            <img src={fighter.profile_image} />
          </div>
          <div className="fighter-name">
            <p>{fighter.first_name} {fighter.last_name}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="fighters-container">
        <div className="search-bar">
          <input
            value={this.props.fighters}
          />
        </div>
        {this.renderFighters()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { fighters: state.fighters.all };
}

export default connect(mapStateToProps, { fetchFighters })(FightersMain);
