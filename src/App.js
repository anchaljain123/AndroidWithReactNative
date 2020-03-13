import React from 'react';
import { StyleSheet, View } from 'react-native';

import VideoKYC from './VideoKYC';
import ImageKYC from './ImageKYC';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageKYC />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    }
});

