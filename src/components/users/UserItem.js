import React, { Component } from 'react';

export default class UserItem extends Component {
  render() {
    let { login, avatar_url, html_url } = this.props.item;
    return (
      <div className="card text-center" style={{margin:'5px'}}>
        <p>
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '60px' }}
          />
          <h3>{login}</h3>
          <div>
            <a href={html_url} className="btn btn-dark btn-sm my-1">
              More
            </a>
          </div>
        </p>
      </div>
    );
  }
}
