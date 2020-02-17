import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Header extends Component {

    render(){
        return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.header} headerIconBars>
                <View style={styles.headerIconBars}>
                  <Icon style={styles.icon} name={'bars'} color={'#FFFFFF'} size={24} onPress={this.props.pressIconBars}/>
                </View>
                <View style={styles.headerTitle}>
                  <Text style={styles.textHeader}>{this.props.title}</Text>
                </View>
                <View style={styles.headerIconEllipsis}>
                  <Icon style={styles.icon} name={'ellipsis-v'} color={'#FFFFFF'} size={24}/>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'transparent',
    elevation: 10
  },
  header : {
    flexDirection : "row",
    backgroundColor : '#2A4580',
    height : 56,
  }, 
  headerIconBars : {
    backgroundColor : 'transparent',
    height : 56,
    width : 56
  },
  headerTitle : {
    flex : 1,
    justifyContent : "center"
  },
  headerIconSearch : {
    backgroundColor : 'transparent',
    height : 56
  },
  headerIconEllipsis : {
    backgroundColor : 'transparent',
    height : 56,
  },
  icon : {
    margin : 16
  },
  textHeader : {
    fontSize : 22,
    color : "#FFFFFF",
    marginLeft  : 16
  },
  menuContent : {
    justifyContent : "center",
    backgroundColor : '#FFFFFF',
    },
  menuText : {
    fontSize : 16, 
    color : "#2A4580",
    margin : 16
  }
})