import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UsersList from './components/users/UsersList';
import UserDetail from './components/users/UserDetail';
import Search from './components/Search';
import About from './components/About';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

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
      filteredUsers = this.state.users.filter((ele) =>
        ele.login.includes(this.state.searchText)
      );
      this.setState({ filteredUsers });
    });
  };

  doSearch = async (query) => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      users: res.data.items,
      filteredUsers: res.data.items
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.doSearch(this.state.searchText);
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar
            title="Github Finder"
            icon="fab fa-github"
            users={this.state.users}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Container>
                  <Row>
                    <Col>
                      <Search
                        text={this.state.searchText}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <UsersList
                        users={this.state.filteredUsers}
                        loading={this.state.loading}
                      />
                    </Col>
                  </Row>
                </Container>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route path="/user/:username" component={UserDetail} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
