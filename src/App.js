import React, { Component } from 'react';
import NavBar from './components/NavBar';
import UsersList from './components/users/UsersList';
import Search from './components/Search';
import Axios from 'axios';

export class App extends Component {
  state = {
    users: [],
    filteredUsers: [],
    loading: false,
    searchText: ''
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await Axios.get(
      'https://api.github.com/users?client_id=c09a6e08b1069cc8b2b9&client_secret=10c0bf4d275014dce19c020b4048399aa1323c09'
    );
    this.setState({ loading: false, users: res.data, filteredUsers: res.data });
  }

  onChange = (e) => {
    let filteredUsers = [];

    this.setState({ [e.target.name]: e.target.value }, () => {
      filteredUsers = this.state.users.filter((ele) => {
        return ele.login.includes(this.state.searchText);
      });
      this.setState({ filteredUsers });
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchText);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          title="Github Finder"
          icon="fab fa-github"
          users={this.state.users}
        />
        <Search
          text={this.state.searchText}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <UsersList
          users={this.state.filteredUsers}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

export default App;
