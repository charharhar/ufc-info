import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchEvents } from '../actions/index';

class FightsIndex extends Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  renderEvents() {
    function formatDate(date) {
      let formatDate = new Date(date);
      return (
       `${formatDate.getMonth() + 1}/${formatDate.getDate()}/${formatDate.getFullYear()}`
      );
    }

    return this.props.events.reverse().map((event) => {
      formatDate(event.event_date);
      if ( Date.parse(event.event_date) > Date.now() ) {
        return (
          <li className="list-group-item" key={event.id}>
            <Link to={`/events/${event.id}`}>
              <strong>{event.base_title}</strong>
              <p className="">{event.title_tag_line}</p>
              <p className="">{formatDate(event.event_dategmt)}</p>
              <img src={event.feature_image} />
            </Link>
          </li>
        )
      }
    })
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, { fetchEvents })(FightsIndex);
