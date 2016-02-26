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
        <div className="news-article col-md-3 col-sm-6" key={news.id}>
          <Link to={`/news/${news.id}`}>
            <div className="news-card">
              <div className="news-image">
                <img src={news.thumbnail} />
              </div>
              <div className="news-heading">
                <h3>{news.title}</h3>
              </div>
            </div>
          </Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="news-container row">
        {this.renderNews()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { news: state.news.all };
}

export default connect(mapStateToProps, { fetchNewsAll })(NewsMain);
