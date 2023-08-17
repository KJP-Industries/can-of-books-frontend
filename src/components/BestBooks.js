import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NewButton from './NewButton';
import BookModal from './BookModal';
import Book from './Book';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      shouldShowModal: false,
      selectedBook: null,
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

  selectBook = (selectedBook) => {
    this.setState({
      selectedBook,
      shouldShowModal: Boolean(selectedBook),
    });
  };

  addBook = (newBook) => {
    const postUrl = `${process.env.REACT_APP_SERVER_URL}/books`;
    axios
      .post(postUrl, newBook)
      .then((data) => {
        this.setState({ books: [...this.state.books, data] });
      })
      .catch((err) => console.error(err));
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
      .catch((err) => console.error(err));
  };

  toggleModal = () => {
    const { shouldShowModal } = this.state;
    this.setState({
      shouldShowModal: !shouldShowModal,
      selectedBook: this.state.selectedBook ? null : this.state.selectedBook,
    });
  };

  render() {
    return (
      <>
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
        <BookModal
          shouldShowModal={this.state.shouldShowModal}
          modalTitle={'Add Book'}
          toggleModal={this.toggleModal}
          selectedBook={this.state.selectedBook}
          addBook={this.addBook}
          deleteBook={this.deleteBook}
        />
        <NewButton toggleModal={this.toggleModal} btnText={'Add Book'} />
      </>
    );
  }
}

export default BestBooks;
