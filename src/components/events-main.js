import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchEvents } from '../actions/index';

class EventsMain extends Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  renderEvents() {
    const ALT_IMG = "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffeatures%252F019907_WEB_EventPlaceholderRebrand_PPV.jpg?-mw500-mh500-tc1";
    function formatDate(date) {
      let formatDate = new Date(date);
      return (
       `${formatDate.getMonth() + 1}/${formatDate.getDate()}/${formatDate.getFullYear()}`
      );
    }

    function renderImage(img) {
      if (img) {
        return img;
      } else {
        return ALT_IMG;
      }
    }

    return this.props.events.reverse().map((event) => {
      formatDate(event.event_date);
      if ( Date.parse(event.event_date) > Date.now() ) {
        return (
          <div className="events-link" key={event.id}>
            <Link to={`/events/${event.id}`}>
              <li className="list-group-item">
                <div className="events-image">
                  <img src={renderImage(event.feature_image)} />
                </div>
                <div className="events-heading">
                  <h1>{event.base_title}</h1>
                  <h2>{event.title_tag_line}</h2>
                  <h3>{`${formatDate(event.event_date)} @ ${event.event_time_text}`}</h3>
                </div>
                <div style={{clear: 'both'}}></div>
              </li>
            </Link>
          </div>
        )
      }
    })
  }

  render() {
    return (
      <div className="events-main">
        <h3>Events</h3>
        <ul className="list-group">
          {this.renderEvents()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { events: state.events.all };
}

export default connect(mapStateToProps, { fetchEvents })(EventsMain);
