import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

function CoffeeList(props){

  return (
    <React.Fragment>
      {props.coffeeList.map((coffee) =>
        <Coffee
          whenCoffeeClicked = { props.onCoffeeSelection }
          name={coffee.name}
          amount={coffee.amount}
          price={coffee.price}
          description={coffee.description}
          id={coffee.id}
          key={coffee.id}/>
      )}
    </React.Fragment>
  )
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;