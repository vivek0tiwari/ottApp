/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/home';
import {SearchScreen} from './src/search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BestGameEver from './src/games/demo1/index.ios';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const getStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={({route}) => ({title: route.name + ' Header'})}
      />
    </Stack.Navigator>
  );
};
const getTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Game" component={BestGameEver} />
    </Tab.Navigator>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={DarkTheme}>
      {getTabNavigator()}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0008',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    height: 64,
    zIndex: 2,
    elevation: 2,
  },
});

export default App;
