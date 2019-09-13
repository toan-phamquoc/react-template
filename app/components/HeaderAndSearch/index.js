// eslint-disable-next-line
import React, { Component } from 'react';
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Container,
} from 'reactstrap';
import imgLogo from '../../public/assets/image/logo.png';
import Cart from './cart';
export default class Header extends Component {
  render() {
    return (
      <header>
        <br />
        <Container style={{ height: '400px', backgroundColor: '' }}>
          <Row>
            <Col md="4" sm="12" xs="12">
              <div id="logo">
                <a href="#">
                  <img
                    src={imgLogo}
                    title="E-Commerce"
                    alt="E-Commerce"
                    className="img-responsive"
                  />
                </a>
              </div>
            </Col>

            <Col md="5" sm="12" xs="12">
              <InputGroup className="input-group-seach">
                <Input placeholder="and..." bsSize="lg" />
                <InputGroupAddon addonType="append">
                  <Button size="lg" color="success">
                    Search
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md="3" sm="12" xs="12" style={{ backgroundColor: 'blue' }}>
              <Cart />
            </Col>
          </Row>
        </Container>
        <br />
      </header>
    );
  }
}
