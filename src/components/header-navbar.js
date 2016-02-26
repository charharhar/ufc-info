import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderNavbar extends Component {
  render() {
    return (
      <nav className="navbar-main">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/events"><li>Events</li></Link>
          <Link to="/fighters"><li>Fighters</li></Link>
          <Link to="/news"><li>News</li></Link>
          <Link to="/media"><li>Media</li></Link>
        </ul>
      </nav>
    )
  }
}

export default HeaderNavbar
