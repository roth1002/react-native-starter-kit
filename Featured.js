'use strict';

import React from 'react-native';
import BookList from './BookList';

const {
  StyleSheet,
  NavigatorIOS,
  Component
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
      title: 'Featured Books',
      component: BookList
      }}/>
    );
  }
}

