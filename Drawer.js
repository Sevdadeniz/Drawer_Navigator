
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {DrawerItems} from 'react-navigation';
import anasayfa from './anasayfa';
import BarkodO from './BarkodO';
import PersonelD from './PersonelD';
import RaporlarD from './RaporlarD';
import SiparisR from './SiparisR';
import TezgahD from './TezgahD';

import {Container, Content, Header, Body, Icon} from 'native-base'
export default  class Drawer extends Component{
    render() {
        return (
            <MyApp/>

        );
    }
}
const CustomDrawerContentComponent = (props)=> (
    <Container style={{backgroundColor:'white'}}>
        <Header style={{height:200,backgroundColor: 'white'}}>
            <Body>
            <Text style={styles.text}>welcome</Text>
            </Body>
        </Header>

        <Content>
            <DrawerItems {...props}/>
        </Content>

    </Container>
);

const MyApp = Drawer({
        Anasayfa: {
            screen : anasayfa
        },
        TezgahDurumu: {
            screen: TezgahD
        },
        SiparisRaporu: {
            screen: SiparisR
        },
        PersonelDurumu: {
            screen: PersonelD
        },
        Raporlar: {
            screen: RaporlarD
        },
        BarkodOku: {
            screen: BarkodO
        }


    },
    {
        initialRouteName : 'Anasayfa',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',

    }

);

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        color: 'black',
        fontSize:25,
        borderRadius:75,

    }

});




