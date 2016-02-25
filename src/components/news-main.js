import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NewsMain extends Component {
  render() {
    return (
      <div>
        News main
      </div>
    )
  }
}

export default connect()(NewsMain);
