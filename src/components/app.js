import '../../style/styles.css';
import React, { Component } from 'react';
import HeaderNavbar from './header-navbar';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNavbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
};

export default App;
