import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default class Book extends Component {
  render() {
    const {
      book: { title, description, status },
    } = this.props;

    return (
      <>
        <Image
          src={`https://picsum.photos/seed/${title}/1400/300?blur=4`}
          className="w-100"
          fluid
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{description}</p>
          <h6>{status}</h6>
        </Carousel.Caption>
      </>
    );
  }
}
