import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import App from './src/App';
import NavApp from './src/NavApp';

class HelloUser extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavApp />
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
