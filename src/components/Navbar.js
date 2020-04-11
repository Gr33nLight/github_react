import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar as BNav } from 'react-bootstrap';

export class NavBar extends Component {
  render() {
    return (
      <BNav>
        <BNav.Brand>
          <h3>
            <i className={this.props.icon} /> {this.props.title}
          </h3>
        </BNav.Brand>

        <BNav.Collapse id="basic-BNav-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
        </BNav.Collapse>
      </BNav>
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
