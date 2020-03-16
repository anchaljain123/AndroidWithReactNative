import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VideoKYC from './VideoKYC';
import ImageKYC from './ImageKYC';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ImageKYC" component={ImageKYC} />
      <Tab.Screen name="VideoKYC" component={VideoKYC} />
    </Tab.Navigator>
  );
}

export default function NavApp() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
