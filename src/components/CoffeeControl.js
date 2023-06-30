import React from "react";
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from './EditCoffeeForm';
import Button from "react-bootstrap/Button";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  handleBuyClick = () => {
    //reduces inventory amount by 1 lb of coffee beans
    const selectedCoffee = this.state.selectedCoffee;

    if (selectedCoffee.amount > 0) {
      this.setState({
        mainCoffeeList: this.state.mainCoffeeList.filter(coffee => coffee.id !== selectedCoffee.id).concat({...selectedCoffee, amount: selectedCoffee.amount - 1}),
        selectedCoffee: null
      });
    }
  }

  handleRestockClick = () => {
    //increases inventory amount by 1 burlap sack (130 lbs of beans)
    const selectedCoffee = this.state.selectedCoffee;
    this.setState({
      mainCoffeeList: this.state.mainCoffeeList.filter(coffee => coffee.id !== selectedCoffee.id).concat({...selectedCoffee, amount: selectedCoffee.amount + 130}),
      selectedCoffee: null
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = 
      <EditCoffeeForm
        coffee = {this.state.selectedCoffee}
        onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";

    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = 
      <CoffeeDetail
        coffee = {this.state.selectedCoffee}
        onClickingDelete = {this.handleDeletingCoffee}
        onClickingEdit = {this.handleEditClick}
        onClickingBuy = {this.handleBuyClick}
        onClickingRestock = {this.handleRestockClick} />;
      buttonText = "Return to Coffee List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewCoffeeForm
        onNewCoffeeCreation = {this.handleAddingNewCoffeeToList} />;
      buttonText = "Return to Coffee List";

    } else {
      currentlyVisibleState = 
      <CoffeeList 
        coffeeList = {this.state.mainCoffeeList} 
        onCoffeeSelection={this.handleChangingSelectedCoffee} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }

}

export default CoffeeControl;