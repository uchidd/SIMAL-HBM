import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import { Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header} headerIconBars>
          <View style={styles.headerIconBars}>
            <Icon style={styles.icon} name={'bars'} color={'#F8F9FA'} size={24} onPress={this.props.pressIconBars} />
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.textHeader}>{this.props.title}</Text>
          </View>
          <View style={styles.headerIconSearch}>
            <Icon style={styles.icon} name={'search'} color={this.props.iconSearchColor} size={24} onPress={this.props.pressIconSearch} />
          </View>
          <View style={styles.headerIconEllipsis}>
            <Menu>
              <MenuTrigger >
                <Icon style={styles.icon} name={'ellipsis-v'} color={'#F8F9FA'} size={24} />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption style={styles.menuContent} value={"Logout"} onSelect={value => alert(`You Clicked : ${value}`)}>
                  <Text style={styles.menuText}>Logout</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    elevation: 10
  },
  header: {
    flexDirection: "row",
    backgroundColor: '#2A4580',
    height: 56,
  },
  headerIconBars: {
    backgroundColor: 'transparent',
    height: 56,
    width: 56
  },
  headerTitle: {
    flex: 1,
    justifyContent: "center"
  },
  headerIconSearch: {
    backgroundColor: 'transparent',
    height: 56
  },
  headerIconEllipsis: {
    backgroundColor: 'transparent',
    height: 56,
  },
  icon: {
    margin: 16
  },
  textHeader: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 16
  },
  menuContent: {
    justifyContent: "center",
    backgroundColor: '#FFFFFF',
  },
  menuText: {
    fontSize: 16,
    color: "#2A4580",
    margin: 16
  }
})