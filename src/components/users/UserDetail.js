import React, { Component } from 'react';
import Axios from 'axios';
import Spinner from '../Spinner';
import Repos from '../Repos';
import { Container, Row, Col, Card } from 'react-bootstrap';

export class UserDetail extends Component {
  state = {
    loading: false,
    userDetail: [],
    repos: [],
    username: ''
  };

  async componentDidMount() {
    this.setState({ loading: true });
    let username = this.props.match.params.username;
    const user = await Axios.get(
      'https://api.github.com/users/' +
        username +
        `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const repos = await Axios.get(
      'https://api.github.com/users/' +
        username +
        `/repos?per_page=10&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, userDetail: user.data, repos: repos.data });
  }

  render() {
    let { login, avatar_url, name, location, bio } = this.state.userDetail;
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <Container fluid>
          <Row>
            <Col sm={12} md={4}>
              <Card className="p-4 mt-4">
                <Row>
                  <img
                    src={avatar_url}
                    alt=""
                    className="mx-auto d-block"
                    width="200px"
                  />
                </Row>

                <h3 className="mt-2">
                  {name} ({login})
                </h3>

                {location && (
                  <div>
                    <span
                      className="fa fa-location-arrow"
                      style={{ marginRight: '5px', verticalAlign: 'middle' }}
                    />
                    <span>{location}</span>
                  </div>
                )}
                {bio && <span>{bio}</span>}
              </Card>
            </Col>
            <Col sm={12} md={{ span: 5, offset: 2 }}>
              <Card className="p-4 mt-4">
                <h3>Repositories</h3>
                <Repos repos={this.state.repos} />
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default UserDetail;
