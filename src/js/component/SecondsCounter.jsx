import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="counter-container text-center">
      <i className="fas fa-clock"></i>
      <div className="d-inline display-4 mx-3">{seconds}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter; // Make sure to export the component
