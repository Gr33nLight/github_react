import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import UsersList from './users/UsersList';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col>
          <UsersList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
