import {
  SET_LOADING,
  SET_USERS,
  SET_FILTERED_USERS,
  SET_SEARCH_TEXT,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_FILTERED_USERS:
      return {
        ...state,
        filteredUsers: action.payload,
        loading: false,
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};
