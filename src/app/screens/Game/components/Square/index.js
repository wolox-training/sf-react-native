import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Square extends PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <button className="square" onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Square;
