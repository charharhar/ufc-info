import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderNavbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/fighters">Fighters</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/media">Media</Link></li>
        </ul>
      </nav>
    )
  }
}

export default HeaderNavbar
