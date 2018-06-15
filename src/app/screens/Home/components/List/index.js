import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { strings } from '../strings';
import Checkbox from '../CheckBox';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';

import { listStyle as styles } from './styles';

export default class List extends Component {
  renderItem = (item, i) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props;
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;

    return (
      <View key={i} style={itemStyle}>
        <CustomText> {item.label} </CustomText>
        <View style={styles.rightSection}>
          <Checkbox isChecked={item.completed} onToggle={() => onToggleItemCompleted(i)} />
          <CustomButton
            onPress={() => onRemoveItem(i)}
            title={strings.times}
            textStyle={styles.remove}
            big
            center
          />
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
