import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './styles.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

// Square.propTypes = {
//   value: PropTypes.number
// };

export default Square;
