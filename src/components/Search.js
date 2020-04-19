import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {GithubContext} from '../context/GithubContextProvider';

const Search = () => {
  const githubContext = useContext(GithubContext);

  return (
    <Container style={{ marginTop: '5px' }}>
      <Row>
        <Col>
          <Form onSubmit={githubContext.onSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              name="searchText"
              placeholder="Search"
              aria-label="Search"
              onChange={githubContext.onChange}
              value={githubContext.searchText}
            />
            <Button type="submit" block style={{ marginTop: '5px' }}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
