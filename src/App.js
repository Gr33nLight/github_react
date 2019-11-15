import React, { Component } from 'react';
import NavBar from './components/NavBar';
import UsersList from './components/users/UsersList';
import Axios from 'axios';

export class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await Axios.get('https://api.github.com/users');
    this.setState({ loading: false, users: res.data });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar title="Github Finder" icon="fab fa-github" />
        <UsersList users={this.state.users} loading={this.state.loading} />
      </React.Fragment>
    );
  }
}

export default App;
