import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15
  }
});

export default class List extends Component {
  renderItem = text => (
    <TouchableOpacity style={styles.item}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );

  render() {
    return <View>{this.props.list.map(this.renderItem)}</View>;
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
};
