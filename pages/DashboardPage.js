import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class DashboardPage extends Component{

  static navigationOptions = {
    drawerLabel: "Dashboard",
  };


  render(){
    return(
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
