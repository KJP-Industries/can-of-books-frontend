import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookModal extends React.Component {

  handleClose = () => {
    // set shouldShowModal to false
    this.props.toggleModal();
    console.log('Modal closed.');
  };

  handleSubmit = async () => {

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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" />
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder="Enter status" />
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
