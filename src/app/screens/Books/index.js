import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/Books/actions';

import BooksList from './layout';
import { containerStyle as styles } from './styles';

class Books extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.getBooks());
  }
  render() {
    return (
      <View style={styles.container}>
        <BooksList booksList={this.props.books} navigator={this.props.navigation} />
      </View>
    );
  }
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      title: PropTypes.string,
      genre: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired,
  navigation: PropTypes.func
};

const mapStateToProps = state => ({
  books: state.books.booksList
});

export default connect(mapStateToProps)(Books);
