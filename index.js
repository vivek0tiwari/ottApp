/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppConfigContextProvider from './src/AppContext';

AppRegistry.registerComponent(
  appName,
  () => props =>
    (
      <AppConfigContextProvider>
        <App {...props} />
      </AppConfigContextProvider>
    ),
  () => App,
);
