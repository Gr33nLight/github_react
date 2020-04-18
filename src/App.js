import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserDetail from './components/users/UserDetail';
import About from './components/About';
import Axios from 'axios';
import GitHubState from './context/GithubState';
import Home from './components/Home';

export class App extends Component {
  state = {
    users: [],
    filteredUsers: [],
    loading: false,
    searchText: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data, filteredUsers: res.data });
  }

  render() {
    return (
      <GitHubState>
        <Router>
          <React.Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/user/:username" component={UserDetail} />
            </Switch>
          </React.Fragment>
        </Router>
      </GitHubState>
    );
  }
}

export default App;
