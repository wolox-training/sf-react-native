import { StyleSheet } from 'react-native';

import { red } from '../../../../../constants/colors';

export const listStyle = StyleSheet.create({
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
    marginBottom: 5,
    color: red
  },
  completed: {
    backgroundColor: 'whitesmoke'
  }
});
