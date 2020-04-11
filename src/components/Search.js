import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export class Search extends Component {
  render() {
    return (
      <Container style={{ marginTop: '5px' }}>
        <Row>
          <Col>
            <Form onSubmit={this.props.onSubmit}>
              <input
                className="form-control mr-sm-2"
                type="search"
                name="searchText"
                placeholder="Search"
                aria-label="Search"
                onChange={this.props.onChange}
                value={this.props.text}
              />
              <Button type="submit" block style={{ marginTop: '5px' }}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
