import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingBuy, onClickingRestock } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>{coffee.name}</h3>
      <ul>
        <li>Current Stock: {coffee.amount} lbs</li>
        <li>Price per pound: ${coffee.price}</li>
        <li><em>{coffee.description}</em></li>
      </ul>
      {
        coffee.amount > 0? ( 
          <Button onClick={ ()=> onClickingBuy(coffee.id) }>Buy</Button>
        ) : (
          <p class="alert alert-danger">Sorry, {coffee.name} is currently out of stock.</p>
        )
      }
      <br/><br/>
      <Button onClick={ () => onClickingRestock(coffee.id) }>Restock</Button>
      <br/><br/>
      <Button onClick={ props.onClickingEdit }>Update Coffee</Button>
      <Button variant="warning" onClick={ ()=> onClickingDelete(coffee.id) }>Delete Coffee</Button>
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