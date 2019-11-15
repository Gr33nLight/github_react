import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

const UsersList = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-between'
        }}
      >
        {users.map((ele) => {
          return <UserItem item={ele} key={ele.login} />;
        })}
      </div>
    );
  }
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
export default UsersList;
