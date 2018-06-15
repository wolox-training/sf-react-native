import { StyleSheet } from 'react-native';

import { red } from '../../../../../constants/colors';

export const footerStyle = StyleSheet.create({
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
