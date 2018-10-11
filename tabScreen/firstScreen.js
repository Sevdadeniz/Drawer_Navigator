import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class FirstScreen extends Component {

        render() {
            return <View
            style={
                {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }
            }>
                <Text style={{fontSize:30}}>
                    This is tab 1
                </Text>

            </View>
        }
}