import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

class BookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayError: false,
      errorMsg: '',
    };
  }

  handleClose = () => {
    this.props.toggleModal();
  };

  handleDelete = () => {
    this.props.deleteBook(this.props.selectedBook);
    this.handleClose();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ displayError: false, apiError: '' });
    try {
      const form = e.target;
      if (form.bookTitle.value) {
        this.props.addBook({
          title: form.bookTitle.value,
          description: form.bookDesc.value,
          status: form.bookStatus.value,
        });
        this.props.toggleModal();
      } else {
        throw new Error('Book title must not be blank.');
      }
    } catch (err) {
      this.setState({ displayError: true, errorMsg: err.message });
    }
  };

  render() {
    const { shouldShowModal, modalTitle, selectedBook } = this.props;
    const { handleClose } = this;
    return (
      <Modal show={shouldShowModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={selectedBook?.title}
                placeholder="Enter title"
                required
              />
              <Form.Control.Feedback>
                Please enter a title
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                defaultValue={selectedBook?.description}
                placeholder="Enter description"
                required
              />
              <Form.Control.Feedback>
                Please enter a description
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                defaultValue={selectedBook?.status}
                placeholder="Enter status"
                required
              />{' '}
              <Form.Control.Feedback>
                Please enter a status
              </Form.Control.Feedback>
            </Form.Group>
            <div className="row justify-content-between">
              <div className="col">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-5 me-2"
                >
                  Add Book
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="mt-5"
                >
                  Close
                </Button>
              </div>
              <div className="col-md-auto">
                <Button
                  variant="danger"
                  type="button"
                  onClick={this.handleDelete}
                  hidden={!selectedBook}
                  className="mt-5"
                >
                  Delete Book
                </Button>
              </div>
            </div>
          </Form>
          {this.state.displayError && (
            <Alert key="1" variant="danger">
              Error: {this.state.errorMsg}
            </Alert>
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

export default BookModal;
