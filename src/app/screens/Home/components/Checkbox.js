import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'rgba(0,0,0,0.8)'
  }
});

export default function Checkbox(props) {
  return (
    <TouchableOpacity onPress={props.onToggle}>
      <View style={styles.box}>{props.isChecked && <View style={styles.inner} />}</View>
    </TouchableOpacity>
  );
}

Checkbox.propTypes = {
  onToggle: PropTypes.func,
  isChecked: PropTypes.bool
};
