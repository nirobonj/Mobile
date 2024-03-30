// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from '../screens/home';
// import SettingsScreen from '../screens/setting';

// import { Ionicons } from "@expo/vector-icons";
// // import SettingsScreen from '../screens/setting';

// const Tab = createBottomTabNavigator();

// export default function MyTabs2({ handleGoBack }) {
//     return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerStyle: {
//             backgroundColor: '#f4511e'
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold'
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           tabBarIcon: ({ color }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Settings') {
//               iconName = 'settings-sharp';
//             }
//             return <Ionicons name={iconName} color={color} size={25} />;
//           }
  
//         })}
//       >
  
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'หน้าหลัก',
//             // initialParams: { handleGoBack: handleGoBack }
            
//             // initialParams: { handleGoBack: handleGoBack } // ส่ง handleGoBack ผ่าน initialParams
//             }}
//             initialParams={{ handleGoBack: handleGoBack }}
//             // initialParams={({ handleGoBack: handleGoBack })}

//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             title: 'ตั้งค่า'
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }


// import React from 'react';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// const Tab = createBottomTabNavigator();

// export default function MyTabs2({ handleGoBack }) {
//     return (
//       <Tab.Navigator>
        
        
//       </Tab.Navigator>
//     );
//   }

import React from 'react';
const { Text, View, Button } = require('react-native');
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/home2';
import SettingsScreen from '../screens/setting2';

const Tab = createBottomTabNavigator();

export default function MyTabs2({ handleGoBack }) {
    return (
      // <Tab.Navigator>
      //   <Tab.Screen name="Home" component={HomeScreen} />
      //   <Tab.Screen name="Settings" component={SettingsScreen} />
      // </Tab.Navigator>
      <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}
