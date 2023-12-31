import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookModal extends React.Component {
  handleDelete = () => {
    this.props.deleteBook(this.props.selectedBook);
    this.handleClose();
  };

  handleClose = () => {
    this.props.toggleModal();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedBook } = this.props;
    const form = e.target;
    let bookObj = {
      title: form.title.value,
      description: form.bookDesc.value,
      status: form.bookStatus.value,
    };
    if (selectedBook) {
      bookObj.id = selectedBook._id;
    }
    this.props.submitFunction(bookObj);
    this.handleClose();
  };

  render() {
    const { shouldShowModal, title, primaryBtnTxt, selectedBook } = this.props;
    const { handleClose } = this;
    return (
      <Modal show={shouldShowModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <Form.Group className="mb-3" controlId="title">
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
              />
              <Form.Control.Feedback>
                Please enter a status
              </Form.Control.Feedback>
            </Form.Group>
            <div className="row justify-content-between mt-5">
              <div className="col">
                <Button variant="secondary" type="submit" className="me-2">
                  {primaryBtnTxt}
                </Button>
              </div>
              <div className="col-md-auto">
                <Button
                  variant="danger"
                  type="button"
                  onClick={this.handleDelete}
                  hidden={!selectedBook}
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
