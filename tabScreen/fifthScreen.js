import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class fifthScreen extends Component {

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
                This is tab 5
            </Text>

        </View>
    }
}