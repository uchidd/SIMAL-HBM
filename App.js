import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigator/DrawerNavigator';
import AttendanceHistory from './pages/AttendanceHistoryPage';

export default class App extends Component{
  render(){
    return(
      <DrawerNavigator/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
