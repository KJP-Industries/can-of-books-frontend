import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BestBooks from './components/BestBooks';
import About from './components/About';
import Profile from './components/Profile';
import LoggedOut from './components/LoggedOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={isAuthenticated ? <BestBooks /> : <LoggedOut />}
            />
            <Route
              path="/about"
              element={isAuthenticated ? <About /> : <LoggedOut />}
            />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile /> : <LoggedOut />}
            />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
