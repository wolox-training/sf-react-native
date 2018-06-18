import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import * as Routes from '../../../constants/routes';
import CustomText from '../../components/CustomText';

import { booksListStyles as styles } from './styles';
import defaultImage from './defaultImage.jpeg';

class BooksList extends Component {
  handlePressBook = item => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: Routes.BookDetails, params: { profile: item } })
    );
  };

  renderItem = item => (
    <TouchableOpacity key={item.id} onPress={this.handlePressBook}>
      <View style={styles.book}>
        <Image style={styles.image} source={item.image_url ? { uri: item.image_url } : defaultImage} />
        <View style={styles.details}>
          <CustomText bold>{item.title}</CustomText>
          <CustomText>{item.author}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
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
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired
};

export default connect()(BooksList);
