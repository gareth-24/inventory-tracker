import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){


  return (
    <React.Fragment>

    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;