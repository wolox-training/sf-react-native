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
  addItem = item => {
    this.props.dispatch(actionCreators.addItem(item));
  };

  removeItem = index => {
    this.props.dispatch(actionCreators.removeItem(index));
  };

  toggleItemCompleted = index => {
    this.props.dispatch(actionCreators.toggleItemCompleted(index));
  };

  removeCompletedItems = () => {
    this.props.dispatch(actionCreators.removeCompletedItems());
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Input placeholder={strings.placeholder} onSubmitEditing={this.addItem} />
          <List
            list={this.props.todos}
            onRemoveItem={this.removeItem}
            onToggleItemCompleted={this.toggleItemCompleted}
          />
        </View>
        <Footer onRemoveCompleted={this.removeCompletedItems} />
      </View>
    );
  }
}

Home.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      completed: PropTypes.bool
    })
  )
};

const mapStateToProps = state => ({
  todos: state.todoList.todos
});

export default connect(mapStateToProps)(Home);
