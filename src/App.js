import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BestBooks from './components/BestBooks';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<BestBooks />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
