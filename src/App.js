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
    const res = await Axios.get('https://api.github.com/users?client_id=c09a6e08b1069cc8b2b9&client_secret=10c0bf4d275014dce19c020b4048399aa1323c09');
    this.setState({ loading: false, users: res.data });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar title="Github Finder" icon="fab fa-github" users={this.state.users} />
        <UsersList users={this.state.users} loading={this.state.loading} />
      </React.Fragment>
    );
  }
}

export default App;
