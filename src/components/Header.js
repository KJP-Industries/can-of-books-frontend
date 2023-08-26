import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <header className="sticky-top">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="d-flex justify-content-between px-3"
        >
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem>
            <Link to="/" className="nav-link text-light ms-4">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link text-light ms-4">
              About
            </Link>
          </NavItem>
          <NavItem className="flex-grow-1">
            <Link to="/profile" className="nav-link text-light ms-4">
              Profile
            </Link>
          </NavItem>

          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
      </header>
    );
  }
}

export default withAuth0(Header);
