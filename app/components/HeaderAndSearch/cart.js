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
// import imgLogo from '../../public/assets/image/logo.png';
export default class Cart extends Component {
  render() {
    return (
      <div id="cart" className="btn-group btn-block">
        <button type="button" className="btn ">
          <span id="cart-total">
            <span>Shopping Cart</span>
            <br />3 item(s) - $254.00
          </span>
        </button>
      </div>
    );
  }
}
