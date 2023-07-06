import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffee } = props;

  function HandleEditCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onEditCoffee({
      name: e.target.name.value,
      amount: parseInt(e.target.amount.value),
      price: parseFloat(e.target.price.value),
      description: e.target.description.value,
      id: coffee.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={HandleEditCoffeeFormSubmission}
      buttonText="Update Coffee" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;