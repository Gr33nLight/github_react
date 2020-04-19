import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Spinner from '../Spinner';
import Repos from '../Repos';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UserDetail = ({
  //Extracting username from the match object passed in the props from the url ex. path="/user/:username"
  match: {
    params: { username },
  },
}) => {
  const [repos, setRepos] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    const repos = await Axios.get(
      'https://api.github.com/users/' +
        username +
        `/repos?per_page=10&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setRepos(repos.data);
  };

  const fetchUser = async () => {
    const user = await Axios.get(
      'https://api.github.com/users/' +
        username +
        `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setUserDetail(user.data);
  };

  useEffect(() => {
    setLoading(true);
    fetchUser();
    fetchRepos();
    // eslint-disable-next-line
  }, []);

  let { login, avatar_url, name, location, bio } = userDetail;
  if (loading) {
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
              <Repos repos={repos} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default UserDetail;
