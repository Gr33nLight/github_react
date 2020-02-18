import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class NavBar extends Component {
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

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

export default NavBar;
