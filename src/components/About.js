import React, { Component } from 'react';
import {GithubContext} from '../context/GithubStateProvider';

//This class is a component instead of function for testing purposes
export class About extends Component {
  static contextType = GithubContext;

  render() {
    return <div>This is the about page</div>;
  }
}
export default About;
