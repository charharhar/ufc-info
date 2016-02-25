import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class FightersMain extends Component {
  render() {
    return (
      <div>
        Fighters main
      </div>
    )
  }
}

export default connect()(FightersMain);
