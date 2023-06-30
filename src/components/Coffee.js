import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>{props.amount}</h5>
        <h5>{props.price}</h5>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;