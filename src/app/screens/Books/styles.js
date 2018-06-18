import { StyleSheet } from 'react-native';

export const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});

export const booksListStyles = StyleSheet.create({
  book: {
    flexDirection: 'row',
    marginTop: 10
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 5
  },
  details: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});
