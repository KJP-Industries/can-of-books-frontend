import React from 'react';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import BookModal from './BookModal';
import Book from './Book';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      shouldShowModal: false,
      selectedBook: null,
      errorMsg: null,
    };
  }

  componentDidMount = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books`;
    axios
      .get(url)
      .then(({ data: books }) => {
        this.setState({ books });
      })
      .catch((err) => this.setErrorMsg(err.message));
  };

  selectBook = (selectedBook) => {
    this.setState({
      selectedBook,
      shouldShowModal: Boolean(selectedBook),
      errorMsg: null,
    });
  };

  addBook = (newBook) => {
    const postUrl = `${process.env.REACT_APP_SERVER_URL}/books`;
    axios
      .post(postUrl, newBook)
      .then((data) => {
        this.setState({ books: [...this.state.books, data] });
      })
      .catch(() =>
        this.setErrorMsg(
          'There was an error adding your book. Please try again.'
        )
      );
  };

  deleteBook = (deleteBook) => {
    const deleteUrl = `${process.env.REACT_APP_SERVER_URL}/books/${deleteBook._id}`;
    axios
      .delete(deleteUrl, deleteBook)
      .then(() => {
        const oldBooks = this.state.books;
        const books = oldBooks.filter((book) => book._id !== deleteBook._id);
        this.setState({ books });
      })
      .catch(() =>
        this.setErrorMsg(
          'An error occurred deleting this book. Please try again.'
        )
      );
  };

  toggleModal = () => {
    const { shouldShowModal } = this.state;
    this.setState({
      shouldShowModal: !shouldShowModal,
      selectedBook: this.state.selectedBook ? null : this.state.selectedBook,
      errorMsg: null,
    });
  };

  setErrorMsg = (errorMsg = null) => {
    this.setState({ errorMsg });
  };

  render = () => {
    const TOAST_TIMEOUT = 5000;

    return (
      <main className="h-100">
        <section>
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
          {this.state.books.length > 0 ? (
            <Carousel wrap touch pause="hover" interval={5000}>
              {this.state.books.map((book) => (
                <Carousel.Item
                  key={book._id}
                  onClick={() => this.selectBook(book)}
                >
                  <Book book={book} />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <h3>{'No Books Found :('}</h3>
          )}
          <Button
            className="position-relative start-50 translate-middle w-25"
            onClick={this.toggleModal}
          >
            Add a book
          </Button>
        </section>
        <BookModal
          shouldShowModal={this.state.shouldShowModal}
          modalTitle={'Add Book'}
          toggleModal={this.toggleModal}
          selectedBook={this.state.selectedBook}
          addBook={this.addBook}
          deleteBook={this.deleteBook}
          errorMsg={this.state.errorMsg}
          setErrorMsg={this.setErrorMsg}
        />
        <ToastContainer
          className="p-3 mb-5"
          position="bottom-center"
          style={{ zIndex: 1 }}
        >
          <Toast
            bg="danger"
            show={this.state.errorMsg}
            delay={TOAST_TIMEOUT}
            autohide
            onClose={() => this.setErrorMsg()}
          >
            <Toast.Body className="text-white">
              {this.state.errorMsg}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </main>
    );
  };
}

export default BestBooks;
