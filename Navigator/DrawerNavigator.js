import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DashboardPage from '../pages/DashboardPage';
import AttendanceHistoryPage from '../pages/AttendanceHistoryPage';
import DataEmployeePage from '../pages/DataEmployeePage';
import DPOPage from '../pages/DPOPage'

export default class DrawerNavigator extends Component{
    render(){
        return(
            <AppContainerNavigator/>
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {screen: DashboardPage},
    AttendanceHistory: {screen: AttendanceHistoryPage},
    DataEmployee: {screen: DataEmployeePage},
    DPO: {screen: DPOPage}
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