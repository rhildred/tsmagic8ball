import App from './App';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('react-app')
});