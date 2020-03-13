import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import App from './src/App';

class HelloUser extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {  
    flex: 1
  }
});

AppRegistry.registerComponent('AwesomeReactApp', () => HelloUser);
