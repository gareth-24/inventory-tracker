import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingBuy, onClickingRestock } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>{coffee.name}</h3>
      <h5>Current Stock: {coffee.amount} lbs</h5>
      <h5>Price per pound: ${coffee.price}</h5>
      <p><em>{coffee.description}</em></p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={ ()=> onClickingDelete(coffee.id) }>Delete Coffee</button> 

      {
        coffee.amount > 0? ( 
          <button onClick={ ()=> onClickingBuy(coffee.id) }>Buy</button>
        ) : (
          <h1>Sorry, {coffee.name} is currently out of stock.</h1>
        )
      }
      <button onClick={ () => onClickingRestock(coffee.id) }>Restock</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default CoffeeDetail;