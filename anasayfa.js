
import {Icon} from 'react-native-vector-icons/FontAwesome';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';
import Dimensions from 'Dimensions';
//import DrawerNavigator from 'Drawer';
import DrawerNavigator from "./Drawer";
import firstScreen from "./tabScreen/firstScreen";
import secondScreen from "./tabScreen/secondScreen";
import thirdScreen from "./tabScreen/thirdScreen";
import fourthScreen from "./tabScreen/fourthScreen";
import fifthScreen from "./tabScreen/fifthScreen";
import {Body, Header} from "native-base";
import {Image, Text} from "react-native";
import React from "react";



var MainScreenNavigator = TabNavigator({


        first: {
            screen: StackNavigator({
                    initialPage: {screen: firstScreen},


                },
                {
                    headerMode: 'null',
                }
            ),

        },

        second: {
            screen: StackNavigator({
                initialPage: {screen: secondScreen}},
                {headerMode: 'null'})},


        third: {
            screen: StackNavigator({
                    initialPage: {screen: thirdScreen},
                },
                {
                    headerMode: 'null'
                }
            ),
        },
        fourth: {
            screen: StackNavigator({
                    initialPage: {screen: fourthScreen},
                },
                {
                    headerMode: 'null'
                }
            ),
        },

        fifth: {
            screen: StackNavigator({
                    initialPage: {screen: fifthScreen},

                },
                {
                    headerMode: 'null'
                }
            ),
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {

            activeTintColor: 'rgb(223, 220, 148)',
            inactiveTintColor: 'white',
            inactiveBackgroundColor: 'rgb(172, 151, 138)',
            style: {
                backgroundColor: 'rgb(126, 13, 16)',

            },
            labelStyle: {fontSize: Dimensions.get('window').width / 43,},
        },
    }
);

MainScreenNavigator.navigationOptions = {header: null ,title:"Tab Example"};

export default MainScreenNavigator;


