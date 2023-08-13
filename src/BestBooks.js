import axios from 'axios';
import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_SERVER_URL || "https://can-of-books-backend-g0qc.onrender.com"}/books`;
    axios
      .get(url)
      .then(({ data: books }) => {
        this.setState({ books });
      })
      .catch((err) => console.error(err));
  }

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel wrap touch pause="hover" interval={5000}>
            {this.state.books.map(({ title, description, status }, idx) => (
              <Carousel.Item key={title}>
                <Image
                  src={`https://picsum.photos/1400/300?random=${idx}`}
                  className="w-100"
                  fluid
                />
                <Carousel.Caption>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
