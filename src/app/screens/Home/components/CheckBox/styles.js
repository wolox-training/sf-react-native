import { StyleSheet } from 'react-native';

import { black } from '../../../../../constants/colors';

const boxSize = 20;

export const checkboxStyle = StyleSheet.create({
  box: {
    height: boxSize,
    width: boxSize,
    borderWidth: 2,
    borderColor: 'black'
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: black
  }
});
