'use strict';

import React from 'react-native';
import SearchBooks from './SearchBooks';

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

export default class Search extends Component {
  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
        title: 'Search Books',
        component: SearchBooks
      }}/>
    );
  }
}
