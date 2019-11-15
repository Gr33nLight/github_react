import React from 'react';
import '../spinner_animation.css';

const Spinner = () => {
  let spinner_style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-30px',
    marginLeft: '-30px',
    zIndex: '999'
  };

  return (
    <div style={spinner_style}>
      <svg
        className="spinner"
        width="60px"
        height="60px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
};

export default Spinner;
