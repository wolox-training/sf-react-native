import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { checkboxStyle as styles } from './styles';

export default function Checkbox(props) {
  return (
    <TouchableOpacity onPress={props.onToggle}>
      <View style={styles.box}>{props.isChecked && <View style={styles.inner} />}</View>
    </TouchableOpacity>
  );
}

Checkbox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isChecked: PropTypes.bool
};
