import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMedia } from '../actions/index';

class MediaShow extends Component {
  componentWillMount() {
    this.props.fetchMedia(this.props.params.id);
  }

  renderPhotos() {
    return this.props.media.photos.map((photo) => {
      return (
        <div className="media-gallery-photo-absolute" key={photo.id}>
          <div className="media-gallery-photo">
            <img src={photo.path} />
            <p>{photo.caption}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    const { media } = this.props;
    console.log(media);

    if (!media) {
      return <div>Loading...</div>;
    }

    return (
      <div className="media-gallery-container">
        <h2>{media.title}</h2>
        <div className="media-gallery">
          {this.renderPhotos()}
        </div>
        <h4>{media.description}</h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { media: state.media.media };
}

export default connect(mapStateToProps, { fetchMedia })(MediaShow);
