import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { inputStyle as styles } from './styles';

export default class Input extends Component {
  state = {
    text: ''
  };

  onChangeText = text => this.setState({ text });

  onSubmitEditing = () => {
    const { text } = this.state;

    if (!text) return; // Don't submit if empty

    this.props.onSubmitEditing(text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        value={this.state.text}
        placeholder={this.props.placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        blurOnSubmit={false}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onSubmitEditing: PropTypes.func.isRequired
};
