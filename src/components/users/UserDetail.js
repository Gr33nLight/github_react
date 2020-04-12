import React, { Component } from 'react';
import Axios from 'axios';
import Spinner from '../Spinner';
import { Container, Row, Col } from 'react-bootstrap';

export class UserDetail extends Component {
  state = {
    loading: false,
    userDetail: [],
    username: ''
  };

  async componentDidMount() {
    this.setState({ loading: true });
    let username = this.props.match.params.username;
    console.log(username);
    const res = await Axios.get(
      'https://api.github.com/users/' +
        username +
        '?client_id=c09a6e08b1069cc8b2b9&client_secret=10c0bf4d275014dce19c020b4048399aa1323c09'
    );
    this.setState({ loading: false, userDetail: res.data });
  }

  render() {
    let { login, avatar_url, name, location, bio } = this.state.userDetail;
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <Container>
          <Row>
            <Col>
              <img src={avatar_url} alt="" width="300px" />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <h3>
                {name} ({login})
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <span
                className="fa fa-location-arrow"
                style={{ marginRight: '5px', verticalAlign: 'middle' }}
              />
              <span>{location}</span>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default UserDetail;
