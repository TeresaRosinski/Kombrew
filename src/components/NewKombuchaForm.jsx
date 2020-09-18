import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKombuchaForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKombuchaFormSubmission}
        buttonText="Add Me!"
      />
    </React.Fragment>
  );
  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      id: v4(), //this was missing
      pints: 124, //Add pre-detemined quantity of pints to decrement
    });
  }
}
NewKombuchaForm.propTypes = { onNewKombuchaCreation: PropTypes.func };
export default NewKombuchaForm;
