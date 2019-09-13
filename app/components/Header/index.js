// eslint-disable-next-line
import React, { Component } from 'react';
import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  UncontrolledDropdown,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.currencyToggle = this.currencyToggle.bind(this);
    this.languageToggle = this.languageToggle.bind(this);
    this.myAccountToggle = this.myAccountToggle.bind(this);
    this.state = {
      isOpen: false,
      currencyDropdownOpen: false,
      languageDropdownOpen: false,
      myAccoutDropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  languageToggle() {
    this.setState(prevState => ({
      languageDropdownOpen: !prevState.languageDropdownOpen,
    }));
  }

  currencyToggle() {
    this.setState(prevState => ({
      currencyDropdownOpen: !prevState.currencyDropdownOpen,
    }));
  }

  myAccountToggle() {
    this.setState(prevState => ({
      myAccoutDropdownOpen: !prevState.myAccoutDropdownOpen,
    }));
  }

  render() {
    return (
      <header className="header-top">
        <Container>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar className="pull-left">
                  <DropdownToggle nav caret>
                    <span>English</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Arabic</DropdownItem>
                    <DropdownItem>English</DropdownItem>
                    <DropdownItem>French</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className="pull-left">
                  <DropdownToggle nav caret>
                    <span>Euro</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Euro</DropdownItem>
                    <DropdownItem>Pound</DropdownItem>
                    <DropdownItem>USD</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i className="fa fa-user" aria-hidden="true" />{' '}
                    <span>My Account</span> <span className="caret" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="a">
                      <a href="register.html">Register</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag="a">
                      <a href="login.html">Login</a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">
                    <i className="fa fa-heart" aria-hidden="true" />{' '}
                    <span>Wish List</span>
                    <span> (0)</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}
