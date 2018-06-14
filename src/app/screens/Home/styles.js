import { StyleSheet } from 'react-native';

import { green } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  mainButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3
  }
});
