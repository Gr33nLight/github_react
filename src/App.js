import React, { Component } from 'react';
import NavBar from './components/NavBar';
import UsersList from './components/users/UsersList';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar title="Github Finder" icon="fab fa-github" />
        <UsersList />
      </React.Fragment>
    );
  }
}

export default App;
