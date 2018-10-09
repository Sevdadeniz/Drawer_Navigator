import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
    } from 'react-native';
import {Icon,Container,Header,Content,Left } from 'native-base';

class anasayfa extends Component{
    static navigationOptions ={
        drawerIcon:(
            <Image source={require ('./images/home.png')}
                   style={{height:24, width:24}}
            />
        )
    };


    render() {
        return (
            <Container>
                <Header>
                  <Left>
                      <Icon name='menu' onPress={() =>
                          this.props.navigation.navigate('DrawerOpen')}/>

                  </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Home Screen </Text>
                </Content>
            </Container>
        );
    }
}

export default anasayfa;