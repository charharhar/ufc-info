import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        UFC/MMA info 2016 copyright Charles Lee
      </div>
    )
  }
}

export default connect()(Footer);
