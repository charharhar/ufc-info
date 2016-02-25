import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MediaMain extends Component {
  render() {
    return (
      <div>
        Media main
      </div>
    )
  }
}

export default connect()(MediaMain);
