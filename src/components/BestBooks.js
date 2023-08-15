import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import Book from './Book';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_SERVER_URL}/books`;
    axios
      .get(url)
      .then(({ data: books }) => {
        this.setState({ books });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel wrap touch pause="hover" interval={5000}>
            {this.state.books.map((book, idx) => (
              <Carousel.Item key={book.title}>
                <Book book={book} idx={idx} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>{'No Books Found :('}</h3>
        )}
        <Button hidden>Add your favorite book</Button>
      </>
    );
  }
}

export default BestBooks;
