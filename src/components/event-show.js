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
      return (
        <table className="table table-hover" key={match.id}>
          <thead>
            <tr>
              <th>{match.fighter1_first_name} {match.fighter1_last_name}</th>
              <th>vs</th>
              <th>{match.fighter2_first_name} {match.fighter2_last_name}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><img src={match.fighter1_profile_image} className="fighter-profile left" /></td>
              <td>&nbsp;</td>
              <td><img src={match.fighter2_profile_image} className="fighter-profile right" /></td>
            </tr>
            <tr>
              <td>{match.fighter1record}</td>
              <td>Record</td>
              <td>{match.fighter2record}</td>
            </tr>
            <tr>
              <td>{match.fighter1height}</td>
              <td>Height</td>
              <td>{match.fighter2height}</td>
            </tr>
            <tr>
              <td>{match.fighter1weight}</td>
              <td>Weight</td>
              <td>{match.fighter2weight}</td>
            </tr>
            <tr>
              <td>{match.fighter1reach}</td>
              <td>Reach</td>
              <td>{match.fighter2reach}</td>
            </tr>
          </tbody>
        </table>
      )
    })
  }

  render() {
    return (
      <div className="match-container">
        {this.renderMatch()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { event: state.events.event }
}

export default connect(mapStateToProps, { fetchEvent })(EventShow);
