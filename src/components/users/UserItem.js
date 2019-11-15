import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ item: { login, avatar_url, html_url } }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '33%',
        height: '200px',
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
      <h3 style={{ flex: '1' }}>{login}</h3>
      <div style={{ flex: '1' }}>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default UserItem;
