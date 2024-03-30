// import {Text, View, Button} from 'react-native';
const { Text, View, Button } = require('react-native');
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function ProfileScreen(){
    return(
        <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
            <Text>Profile!</Text>
        </View>
    );
}