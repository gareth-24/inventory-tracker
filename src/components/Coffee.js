import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <ul>
          <li>Current Stock: {props.amount} lbs</li>
          <li>Price: ${props.price} / lb</li>
          <li><em>{props.description}</em></li>
        </ul>

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