import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DashboardPage from '../pages/DashboardPage';
import AttendanceLogPage from '../pages/AttendanceLogPage';

export default class DrawerNavigator extends Component{
    render(){
        return(
            <AppContainerNavigator/>
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {screen: DashboardPage},
    AttendanceLog: {screen: AttendanceLogPage},
},{
    initialRouteName: 'Dashboard',
    drawerWidth : 304,
    drawerPosition : 'left',
    drawerBackgroundColor : '#D3D3D3',
    drawerType : 'front',
    contentOptions : {
        activeTintColor : '#2A4580',
        activeBackgroundColor : '#FFFFFF',
        inactiveTintColor : '#2A4580',
        inactiveBackgroundColor : '#D3D3D3',
    }
})

const AppContainerNavigator = createAppContainer(AppDrawerNavigator);