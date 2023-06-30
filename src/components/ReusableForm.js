import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler} id="reusable-form">
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder="Peets's Coffee Big Bang " />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount (lbs):</Form.Label>
            <Form.Control
              type='number'
              min='0'
              name='amount'
              placeholder='130' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price ($):</Form.Label>
          <Form.Control
            type='number'
            step='0.01'
            min='0'
            name='price'
            placeholder='8.99' />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            name='description'
            placeholder='Medium Roast, USDA certified organic Latin American beans' />
        </Form.Group>
        <Button variant="primary" type='submit'>{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;