import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Square;
