import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import '../../list_style_fix.css';

export class UsersList extends Component {
  state = {
    searchText: '',
    users: []
  };

  onChange = (e) => {
    let usersfiltered = [];

    this.setState({ [e.target.name]: e.target.value }, () => {
      usersfiltered = this.props.users.filter((ele) => {
        return ele.login.includes(this.state.searchText);
      });
      this.setState({ users: usersfiltered });
    });
  };

  componentWillReceiveProps(props) {
    this.setState({ users: props.users });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchText);
  };

  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              name="searchText"
              placeholder="Search"
              aria-label="Search"
              onChange={this.onChange}
              value={this.state.searchText}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div
            className="list"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {this.state.users.map((ele) => {
              return <UserItem item={ele} key={ele.login} />;
            })}
          </div>
        </React.Fragment>
      );
    }
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
export default UsersList;
