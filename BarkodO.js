import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Icon, Button,Container,Header,Content,Left } from 'native-base';

class BarkodO extends Component{

    static navigationOptions ={
        drawerIcon:(
            <Image source={require ('./images/locator.png')}
                   style={{height:24, width:24}}
            />
        )
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                </Header>
                <Content>
                    <Text>BO Screen   </Text>
                </Content>
            </Container>
        );
    }
}
export default BarkodO;