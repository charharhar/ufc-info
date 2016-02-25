import '../../style/styles.css';
import React, { Component } from 'react';
import HeaderNavbar from './header-navbar';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNavbar />
        {this.props.children}
      </div>
    );
  }
};

export default App;
