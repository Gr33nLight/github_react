import React from 'react';
import PropTypes from 'prop-types';

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
        <a href={'/user/'+login} className="btn btn-dark btn-sm my-1">
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
