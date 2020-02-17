import React, { Component } from "react";
import { DrawerActions } from "react-navigation-drawer";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import RNPickerSelect from "react-native-picker-select";
import { TouchableOpacity } from "react-native-gesture-handler";

const placeholderMonth = {
  label: 'Select a month...',
};

const placeholderYear = {
  label: 'Select a year...',
};

export default class AttendanceHistoryPage extends Component {
  static navigationOptions = {
    drawerLabel: "Attendance Log"
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      PickerSelectedValue: ""
    };
  }

  // componentDidMount(){
  //   return fetch('http://sales.hexaon.id/api/getOption',
  //   {method: 'POST'})
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.clients,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={"Attendance Log"}
          pressIconBars={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
        <View style={styles.filterView}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3"
  },
  filterView: {
    backgroundColor: "#FFFFFF",
    height: 56,
    flexDirection: "row",
    padding: 3
  },
});

