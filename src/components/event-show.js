import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions/index';
import { Link } from 'react-router';

class EventShow extends Component {
  componentWillMount() {
    this.props.fetchEvent(this.props.params.id);
  }

  renderMatch() {
    return this.props.event.map((match) => {
      console.log(match);
      return (
        <li className="list-group-item" key={match.id}>
          {match.event_id}
        </li>
      )
    })
  }

  render() {
    const { event } = this.props;

    return (
      <div>
        <ul className="list-group">
          {this.renderMatch()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { event: state.events.event }
}

export default connect(mapStateToProps, { fetchEvent })(EventShow);
