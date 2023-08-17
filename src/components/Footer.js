import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <footer className="fixed-bottom">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Code Fellows</Navbar.Brand>
        </Navbar>
      </footer>
    );
  }
}

export default Footer;
