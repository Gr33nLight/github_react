import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import { GithubContext } from '../../context/GithubContextProvider';

import '../../list_style_fix.css';

function UsersList() {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
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
          {githubContext.filteredUsers.map((ele) => {
            return <UserItem item={ele} key={ele.login} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default UsersList;
