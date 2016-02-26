import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/index';

class NewsShow extends Component {
  componentWillMount() {
    this.props.fetchNews(this.props.params.id);
  }

  renderNews() {
    return this.props.news.map((news) => {
      return (
        <div>
          {news.id}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        News Show
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { news: state.news.news }
}

export default connect(mapStateToProps, { fetchNews })(NewsShow);
