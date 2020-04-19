import React, { useReducer, createContext } from 'react';
import Axios from 'axios';
import GitHhbReducer from './githubReducer';
//import GithubContext from './githubContext';
import {
  SET_LOADING,
  SET_USERS,
  SET_FILTERED_USERS,
  SET_SEARCH_TEXT,
} from './types';

export const GithubContext = createContext();

const GitHubStateProvider = (props) => {
  const initialState = {
    users: [],
    filteredUsers: [],
    user: [],
    loading: false,
    searchText: '',
  };

  //the state gets changed by the duspatch calls, and is returned at the end
  const [state, dispatch] = useReducer(GitHhbReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setUsers = (users) => dispatch({ type: SET_USERS, payload: users });

  const onChange = (e) => {
    //FIXME: improve filtered users search

    //let filteredUsers = [];

    //[e.target.name] = [e.target.value];
    let searchText = e.target.value;

    /* filteredUsers = state.users.filter((user) =>
      user.login.includes(searchText)
    );
    setFilteredUsers(filteredUsers);*/
    console.log(searchText);
    setSearchText(searchText);
  };

  const doSearch = async (query) => {
    setLoading();
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setFilteredUsers(res.data.items);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    doSearch(state.searchText);
  };

  const setSearchText = (text) =>
    dispatch({ type: SET_SEARCH_TEXT, payload: text });

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
        searchText: state.searchText,
        getUsers,
        onChange,
        onSubmit,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GitHubStateProvider;
