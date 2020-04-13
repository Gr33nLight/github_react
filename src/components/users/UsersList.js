import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import '../../list_style_fix.css';

function UsersList({ loading, users }) {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <div
          className="list"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {users.map((ele) => {
            return <UserItem item={ele} key={ele.login} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UsersList;
