import React from 'react';
import { StyleSheet, View } from 'react-native';

import VideoKYC from './VideoKYC';
import ImageKYC from './ImageKYC';

import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import NavigationService from './services/NavigationService';
import store from './redux/createStore';


import { VideoKYCScreenWithoutTabs } from './screens';

export default class App extends React.Component {
    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <VideoKYC />
    //         </View>
    //     )
    // }
    render() {
        console.disableYellowBox = true;
        const AppWrapper = createAppContainer(VideoKYCScreenWithoutTabs);
        return (
            <Provider store={store}>
                <AppWrapper ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
            </Provider>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    }
});

