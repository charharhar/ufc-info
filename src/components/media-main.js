import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchMediaAll } from '../actions/index';

class MediaMain extends Component {
  componentWillMount() {
    this.props.fetchMediaAll();
  }

  renderMedia() {
    return this.props.media.map((media) => {
      if (media.type === 'PHOTOGALLERY') {
        return (
          <div key={media.id}>
            <Link to={`/media/${media.id}`}>
              <div className="media-thumbnail">
                <img src={media.thumbnail} />
              </div>
              <div className="media-title">
                <h3>{media.title}</h3>
              </div>
              <div className="media-descript">
                <p>{media.description}</p>
              </div>
            </Link>
          </div>
        )
      }

      if (media.type === 'INTERNALVIDEO') {
        return (
          <div key={media.id}>
            <Link to={`/media/${media.id}`}>
              <div className="media-thumbnail">
                <img src={media.thumbnail} />
              </div>
              <div className="media-title">
                <h3>{media.title}</h3>
              </div>
              <div className="media-descript">
                <p>{media.description}</p>
              </div>
            </Link>
          </div>
        )
      }

    })
  }

  render() {
    return (
      <div>
        {this.renderMedia()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { media: state.media.all }
}

export default connect(mapStateToProps, { fetchMediaAll })(MediaMain);
