'use strict';

import React from 'react-native';
import Featured from './Featured';
import Search from './Search';

const {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class BookSearch extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'featured'
      };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          systemIcon='featured'
          onPress={() => {
              this.setState({
                  selectedTab: 'featured'
              });
          }}>
          <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'search'}
          systemIcon='search'
          onPress={() => {
              this.setState({
                  selectedTab: 'search'
              });
          }}>
          <Search/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);