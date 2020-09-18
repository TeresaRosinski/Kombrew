import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
