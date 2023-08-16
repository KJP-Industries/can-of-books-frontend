import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayError: false,
      apiError: ''
    };
  }

  handleClose = () => {
    this.props.toggleModal();
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ displayError: false, apiError: '' });
    const form = e.target;
    this.props.addBook({
      title: form.bookTitle.value,
      description: form.bookDesc.value,
      status: form.bookStatus.value
    });
    this.props.toggleModal();
  };

  render() {
    const { shouldShowModal, modalTitle } = this.props;
    const { handleClose } = this;
    return (
      <Modal show={ shouldShowModal } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>{ modalTitle }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={ (e) => { this.handleSubmit(e); }}>
            <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter status"
              />
            </Form.Group>

            <Button variant="primary" type="submit">Add Book</Button>
            <Button variant="secondary" onClick={ handleClose }>Close</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default BookModal;
