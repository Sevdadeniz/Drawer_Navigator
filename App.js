import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Login from './Login';
import Drawer from './Drawer';
import Home from './anasayfa';
import BarkodO from './BarkodO';
import PersonelD from './PersonelD';
import RaporlarD from './RaporlarD';
import SiparisR from './SiparisR';
import TezgahD from './TezgahD';


const Navigation = StackNavigator({
    Login:{screen:Login},
    second: {screen: Drawer},
    Home: {screen: Home},
    BarkodO: {screen: BarkodO},
    TezgahDurumu: {screen: TezgahD},
    SiparisRaporu: {screen: SiparisR},
    PersonelDurumu: {screen: PersonelD},
    Raporlar: {screen: RaporlarD},
});
export default Navigation;

