// // import {Text, View, Button} from 'react-native';
// const { Text, View, Button } = require('react-native');
// import React from 'react';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// export default function DetailScreen(){
//     return(
//         <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
//             <Text>Detail!</Text>
//         </View>
//     );
// }
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Detail!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
