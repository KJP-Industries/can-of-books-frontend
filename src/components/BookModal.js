import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookModal extends React.Component {
  handleClose = () => {
    this.props.toggleModal();
  };

  handleDelete = () => {
    this.props.deleteBook(this.props.selectedBook);
    this.handleClose();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    this.props.addBook({
      title: form.bookTitle.value,
      description: form.bookDesc.value,
      status: form.bookStatus.value,
    });
    this.handleClose();
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
                defaultValue={ selectedBook ? selectedBook.status : '' }
                placeholder="Enter status"
                required
              />{' '}
              <Form.Control.Feedback>
                Please enter a status
              </Form.Control.Feedback>
            </Form.Group>
            <div className="row justify-content-between mt-5">
              <div className="col">
                <Button
                  variant="primary"
                  type="submit"
                  className="me-2"
                >
                  {this.props.priModalBtnTxt}
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
              <div className="col-md-auto">
                <Button
                  variant="danger"
                  type="button"
                  onClick={this.handleDelete}
                  hidden={!this.props.selectedBook}
                >
                  Delete Book
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default BookModal;
