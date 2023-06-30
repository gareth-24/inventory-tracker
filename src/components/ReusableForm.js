import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>
          Name: 
          <input
            type='text'
            name='name'
            placeholder="Peets's Coffee Big Bang " />
        </label><br/>
        <label>
          Amount (lbs)
          <input
            type='number'
            min='0'
            name='amount'
            placeholder='130' />
        </label><br/>
        <label>
          Price ($) 
          <input
            type='number'
            step='0.01'
            min='0'
            name='price'
            placeholder='8.99' />
        </label><br/>
        <label>
          Description:
          <textarea
            name='description'
            placeholder='Medium Roast, USDA certified organic Latin American beans' />
        </label><br/>
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