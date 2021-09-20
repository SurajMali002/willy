import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SearchScreen from './Screens/SearchScreen';
import TransactionScreen from './Screens/BookTransactionScreen';
import { render } from 'react-dom';

export default class App extends React.Component {
    render(){
      return(
          <AppContainer/>
          
      );
    }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {Screens:TransactionScreen},
  Search:{Screen:SearchScreen},  
});

const AppContainer = createAppContainer(TabNavigator);