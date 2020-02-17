import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DashboardPage from '../pages/DashboardPage';
<<<<<<< HEAD
import AttendanceLogPage from '../pages/AttendanceLogPage';
=======
import AttendanceHistoryPage from '../pages/AttendanceHistoryPage';
import DataEmployeePage from '../pages/DataEmployeePage';
import DPOPage from '../pages/DPOPage'
>>>>>>> 3321968517855bd27a9d6bd691ba5d7d46d368ca

export default class DrawerNavigator extends Component{
    render(){
        return(
            <AppContainerNavigator/>
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {screen: DashboardPage},
<<<<<<< HEAD
    AttendanceLog: {screen: AttendanceLogPage},
=======
    AttendanceHistory: {screen: AttendanceHistoryPage},
    DataEmployee: {screen: DataEmployeePage},
    DPO: {screen: DPOPage}
>>>>>>> 3321968517855bd27a9d6bd691ba5d7d46d368ca
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