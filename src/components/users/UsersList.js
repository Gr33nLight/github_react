import React, { Component } from 'react';
import Axios from 'axios';
import UserItem from './UserItem';

export default class UsersList extends Component {
  state = {
    users: []
  };

  componentDidMount = () => {
    Axios.get('https://api.github.com/users').then((res) => {
      this.setState({ users: res.data });
    });
  };
  render() {
    let users = this.state.users;
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {users.map((ele) => {
          return (
            <div style={{ flex: '0 0 25%' }}>
              {' '}
              <UserItem item={ele} />
            </div>
          );
        })}
      </div>
    );
  }
}
