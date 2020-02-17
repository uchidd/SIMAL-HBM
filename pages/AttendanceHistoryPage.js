import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { DrawerActions } from 'react-navigation-drawer';
import { Header } from "../components/Header";

export default class AttendanceHistoryPage extends Component {

  static navigationOptions = {
    drawerLabel: "AttendanceHistory",
  };

  constructor(props) {
    super(props);
    this.state = {
      searchview: false,
      headerview: true,
      isLoading: true,
      text: "",
      dataSource: [],
      isActionButtonVisible: true
    };
    this._listViewOffset = 0;
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
            title={"Client"}
            pressIconBars={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
            pressIconSearch={() => this._showSearch()}
            iconSearchColor={"#FFFFFF"}
          />

        <ScrollView
        onScroll={this._onScroll}
        >
          <FlatList
          style={{marginTop: 3, marginBottom: 3}}
            // data={this.state.dataSource}
            // renderItem={}
            // enableEmptySections={true}
            // keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3"
  },
});