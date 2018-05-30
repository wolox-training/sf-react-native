import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick(props.index)}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Square;
