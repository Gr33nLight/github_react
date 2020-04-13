import React, { useReducer } from 'react';
import Axios from 'axios';
import GitHhbReducer from './githubReducer';
import GithubContext from './githubContext';
import { SET_LOADING, SET_USER, SET_FILTERED_USERS } from './types';

const GitHubState = (props) => {
  const initialState = {
    users: [],
    filteredUsers: [],
    user: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHhbReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setUsers = (users) => dispatch({ type: SET_USER, payload: users });

  const setFilteredUsers = (filteredUsers) =>
    dispatch({ type: SET_FILTERED_USERS, payload: filteredUsers });

  const getUsers = async () => {
    setLoading();
    const res = await Axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setFilteredUsers(res.data);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        filteredUsers: state.filteredUsers,
        loading: state.loading,
        getUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GitHubState;
