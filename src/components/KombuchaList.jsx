import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kombuchaList.map((kombucha) => (
        <Kombucha
          whenKombuchaClicked={props.onKombuchaSelection}
          name={kombucha.name}
          flavor={kombucha.flavor}
          brand={kombucha.brand}
          alcoholContent={kombucha.alcoholContent}
          price={kombucha.price}
          id={kombucha.id}
          key={kombucha.id}
          pints={kombucha.pints}
        />
      ))}
    </React.Fragment>
  );
}
KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  onKombuchaSelection: PropTypes.func,
};
export default KombuchaList;
