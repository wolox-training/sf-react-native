import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';

import { booksListStyles as styles } from './styles';
import defaultImage from './defaultImage.jpeg';

class BooksList extends Component {
  renderItem = (item, i) => (
    <View key={i} style={styles.book}>
      <Image style={styles.image} source={item.image_url ? { uri: item.image_url } : defaultImage} />
      <View style={styles.details}>
        <CustomText bold>{item.title}</CustomText>
        <CustomText>{item.author}</CustomText>
      </View>
    </View>
  );

  render() {
    return <ScrollView>{this.props.booksList.map(this.renderItem)}</ScrollView>;
  }
}

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      title: PropTypes.string,
      genre: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.number,
      image_url: PropTypes.string
    })
  ).isRequired
};

export default BooksList;
