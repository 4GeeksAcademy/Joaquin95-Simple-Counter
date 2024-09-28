import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {

    const thousands = Math.floor(seconds / 1000) % 10;
    const hundreds = Math.floor(seconds / 100) % 10;
    const tens = Math.floor(seconds / 10) % 10;
    const ones = seconds % 10;

  return (
    <div className="counter-container text-center d-flex justify-content-center align-items-center border border-dark p-3 rounded">
      {" "}
      <i className="fa fa-clock display-3 mx-2 digit-box"></i>
            <div className="digit-box bg-dark text-white mx-1 p-3 rounded">{0}</div>
            <div className="digit-box bg-dark text-white mx-1 p-3 rounded">{0}</div>
            <div className="digit-box bg-dark text-white mx-1 p-3 rounded">{thousands}</div>
            <div className="digit-box bg-dark text-white mx-1 p-3 rounded">{hundreds}</div>
            <div className="digit-box bg-dark text-white mx-1 p-3 rounded">{tens}</div>
            <div className="digit-box bg-dark text-white mx-1 p-3 rounded">{ones}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
