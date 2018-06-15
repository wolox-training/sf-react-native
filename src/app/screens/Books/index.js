import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CustomText from '../../components/CustomText';

import styles from './styles';

// eslint-disable-next-line
class Books extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomText>Books List</CustomText>
      </View>
    );
  }
}

export default connect()(Books);
