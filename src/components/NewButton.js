import React from 'react';
import Button from 'react-bootstrap/Button';

class NewButton extends React.Component {
  render() {
    const { toggleModal, btnText } = this.props;
    return (
      <Button onClick={ toggleModal }>{ btnText }</Button>
    );
  }
}

export default NewButton;
