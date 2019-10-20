import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h3>
          <i className={this.props.icon} /> {this.props.title}
        </h3>
      </nav>
    );
  }
}

export default NavBar;
