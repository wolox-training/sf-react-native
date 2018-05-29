import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Square;
