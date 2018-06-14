import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { red } from '../../../../constants/colors';

import Checkbox from './Checkbox';

const styles = StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke'
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: red,
    fontSize: 26
  },
  completed: {
    backgroundColor: 'whitesmoke'
  }
});

export default class List extends Component {
  renderItem = (item, i) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props;
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;

    return (
      <View key={i} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox isChecked={item.completed} onToggle={() => onToggleItemCompleted(i)} />
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return <ScrollView>{this.props.list.map(this.renderItem)}</ScrollView>;
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      completed: PropTypes.bool
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};
