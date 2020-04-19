import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserDetail from './components/users/UserDetail';
import About from './components/About';
import { GithubContext } from './context/GithubContextProvider';
import Home from './components/Home';

class App extends Component {
  static contextType = GithubContext;

  async componentDidMount() {
    this.context.getUsers();
  }
  static test = () => {};

  render() {
    return (
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
    );
  }
}

export default App;
