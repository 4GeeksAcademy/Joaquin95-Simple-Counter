import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {

  const thousands = Math.floor(seconds / 1000) % 10;
  const months = Math.floor(seconds / (3600 * 24 * 30));
  const days = Math.floor((seconds % 3600 *24 * 30) / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds / 3600 * 24 ) / 3600);
  const secs = seconds % 60;

  return (
    <div className="counter-container text-center d-flex justify-content-center align-items-center border border-dark p-3 rounded">
      {" "}
      <i className="fa fa-clock display-3 mx-2 digit-box"></i>
      <div className="digit-box">{thousands}</div>
      <div className="digit-box">{months}</div>
      <div className="digit-box">{days}</div>
      <div className="digit-box">{hours}</div>
      <div className="digit-box">{minutes}</div>
      <div className="digit-box">{secs}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
