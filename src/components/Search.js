import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          name="searchText"
          placeholder="Search"
          aria-label="Search"
          onChange={this.props.onChange}
          value={this.props.text}
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
