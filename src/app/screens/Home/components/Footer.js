import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../components/CustomText';
import { red } from '../../../../constants/colors';

import { strings } from './strings';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    paddingVertical: 15,
    width: '100%'
  },
  remove: {
    color: red
  }
});

export default function Footer(props) {
  return (
    <TouchableOpacity style={styles.footer} onPress={props.onRemoveCompleted}>
      <CustomText style={styles.remove}>{strings.footerText}</CustomText>
    </TouchableOpacity>
  );
}

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func
};
