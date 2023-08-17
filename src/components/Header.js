import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className='sticky-top'>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem>
            <Link to='/' className='nav-link text-light ms-4'>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/about' className='nav-link text-light ms-4'>
              About
            </Link>
          </NavItem>
        </Navbar>
      </header>
    );
  }
}

export default Header;
