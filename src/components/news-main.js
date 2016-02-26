import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNewsAll } from '../actions/index';

class NewsMain extends Component {
  componentWillMount() {
    this.props.fetchNewsAll();
  }

  renderNews() {
    return this.props.news.map((news) => {
      return (
        <li className="list-group-item">{news.id}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderNews()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { news: state.news.all };
}

export default connect(mapStateToProps, { fetchNewsAll })(NewsMain);
