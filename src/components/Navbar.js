import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) =>{
    return (
      <nav className="navbar bg-primary">
        <h3>
          <i className={props.icon} /> {props.title}
        </h3>
      </nav>
    );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

export default NavBar;
