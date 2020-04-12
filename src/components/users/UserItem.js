import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ item: { login, avatar_url, html_url } }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '200px',
        margin: '10px',
        padding: '10px',
        border: 'solid 1px'
      }}
    >
      <div style={{ width: '100px', flex: '1' }}>
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div style={{ flex: '0.7', textAlign: 'center' }}>
        <h3>{login}</h3>
        <Link to={'/user/' + login} className="btn btn-primary">
          More
        </Link>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default UserItem;
