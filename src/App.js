import React, { Component } from 'react';
import Navbar from './components/Navbar';
import UsersList from './components/users/UsersList';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <UsersList/>
      </React.Fragment>
    );
  }
}

export default App;
