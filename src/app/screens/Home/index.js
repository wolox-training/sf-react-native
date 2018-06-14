import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/TODOList/actions';

import { strings } from './components/strings';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';
import styles from './styles';

class Home extends Component {
  onAddItem = item => {
    this.props.dispatch(actionCreators.addItem(item));
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Input placeholder={strings.placeholder} onSubmitEditing={this.onAddItem} />
          <List list={this.props.todos} />
        </View>
        <Footer />
      </View>
    );
  }
}

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  todos: state.todoList.todos
});

export default connect(mapStateToProps)(Home);
