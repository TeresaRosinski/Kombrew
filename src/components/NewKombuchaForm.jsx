import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKombuchaForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Kombucha Name</label>
              </td>
              <td>
                <input type="text" name="name" placeholder="Kombucha Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Kombucha Brand</label>
              </td>
              <td>
                <input type="text" name="brand" placeholder="Kombucha Brand" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Flavor</label>
              </td>
              <td>
                <input
                  type="text"
                  name="flavor"
                  placeholder="Kombucha Flavor"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Price</label>
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  placeholder="Price Per Pint"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Alcohol Content</label>
              </td>
              <td>
                <input
                  type="number"
                  name="alcoholContent"
                  placeholder="Alcohol Content"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-light">
          Add Me
        </button>
      </form>
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
