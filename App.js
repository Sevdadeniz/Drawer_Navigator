
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {DrawerNavigator,DrawerItems} from 'react-navigation';
import anasayfa from './anasayfa'
import BarkodOku from './BarkodOku'
import Personel from './Personel'
import Raporlar from './Raporlar'
import SiparisRaporu from './SiparisRaporu'
import TezgahDurumu from './TezgahDurumu'

import {Container, Content, Header, Body, Icon} from 'native-base'
export default  class App extends Component{
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

const MyApp = DrawerNavigator({
     Home: {
         screen : anasayfa
     },
        TezgahD: {
         screen: TezgahDurumu
    },
    SiparisR: {
         screen: SiparisRaporu
    },
    PersonelD: {
         screen: Personel
    },
    RaporlarD: {
         screen: Raporlar
    },
    BarkodO: {
         screen: BarkodOku
    }


},
{
 initialRouteName : 'Home',
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
