import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' />
        <input
          type='number'
          min='0'
          name='amount'
          placeholder='Amount (lbs)' />
        <input
          type='number'
          step='0.01'
          min='0'
          name='price'
          placeholder='Price ($)' />
        <textarea
          name='description'
          placeholder='Coffee Description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;