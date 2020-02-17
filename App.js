import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import DrawerNavigator from './navigator/DrawerNavigator';
import AttendanceHistory from './pages/AttendanceHistoryPage';
=======
import DrawerNavigator from './Navigator/DrawerNavigator'
>>>>>>> 6f943836525f29925760968f319865cccc25fa4c

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
