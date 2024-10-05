// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from '../screens/home';
// import SettingsScreen from '../screens/setting';
// import { Ionicons } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// export default function MyTabs({ handleGoBack }) {
//     return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerStyle: {
//             backgroundColor: '#6a5acd'
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold'
//           },
//           tabBarActiveTintColor: '#6a5acd',
//           tabBarInactiveTintColor: 'gray',
//           tabBarIcon: ({ color }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Settings') {
//               iconName = 'settings-sharp';
//             }
//             else if (route.name === 'Profile') {
//               iconName = 'settings-sharp';
//             }
//           } 
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
  
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from '../screens/home';
// import SettingsScreen from '../screens/setting';
// import ProfileScreen from '../screens/profile';
// import StarScreen from '../screens/star';
// // import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome } from '@expo/vector-icons';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import MyTabs2 from '../tabs/mytabs2';
// const Tab = createBottomTabNavigator();

// export default function MyTabs({ handleGoBack }) {
//     return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerStyle: {
//             backgroundColor: '#6a5acd'
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold'
//           },
//           tabBarActiveTintColor: '#6a5acd',
//           tabBarInactiveTintColor: 'gray',
//           // tabBarIcon: ({ color }) => {
//           //   let iconName;
//           //   if (route.name === 'Home') {
//           //     iconName = 'home';
//           //   } else if (route.name === 'Settings') {
//           //     iconName = 'settings';
//           //   }
//           //   else if (route.name === 'Profile') {
//           //     iconName = 'user';
//           //   }
//           //   // return <Ionicons name={iconName} color={color} size={25} />;
//           //   return <SimpleLineIcons name="home" size={24} color="black" />;
//           // }
//           tabBarIcon: ({ color }) => {
//             let iconComponent;
//             if (route.name === 'Home') {
//                 iconComponent = <SimpleLineIcons name="home" size={24} color={color} />;
//             } else if (route.name === 'Settings') {
//                 iconComponent = <SimpleLineIcons name="settings" size={24} color={color} />;
//             } else if (route.name === 'Profile') {
//                 iconComponent = <SimpleLineIcons name="user" size={24} color={color} />;
//             }
//             else if (route.name === 'Star') {
//                 iconComponent = <AntDesign name="staro" size={24} color={color} />;
//             }
//             return iconComponent;
//           }

//         })}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'หน้าหลัก',
//             // initialParams: { handleGoBack: handleGoBack }
//           }}initialParams={{ handleGoBack: handleGoBack }}
//         />
//         <Tab.Screen
//           name="Star"
//           component={StarScreen}
//           options={{
//             title: 'รายการโปรด'
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             title: 'ประวัติส่วนตัว'
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             title: 'ตั้งค่า'
//           }}
//         />
//         {/* <Tab.Screen
//           name="MyTabs2"
//           component={MyTabs2}
//           options={{
//             title: 'หน้าหลัก',
//           }}
//         /> */}
        
//       </Tab.Navigator>
//     );
//   }
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/setting';
import ProfileScreen from '../screens/profile';
import StarScreen from '../screens/star';
import { FontAwesome, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import DetailScreen from '../screens/detail';

const Tab = createBottomTabNavigator();

export default function MyTabs({ handleGoBack }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
            backgroundColor: '#6a5acd'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        tabBarActiveTintColor: '#6a5acd',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color }) => {
          let iconComponent;
          if (route.name === 'Home') {
            iconComponent = <SimpleLineIcons name="home" size={24} color={color} />;
          } else if (route.name === 'Settings') {
            iconComponent = <SimpleLineIcons name="settings" size={24} color={color} />;
          } else if (route.name === 'Profile') {
            iconComponent = <SimpleLineIcons name="user" size={24} color={color} />;
          } else if (route.name === 'Star') {
            iconComponent = <AntDesign name="staro" size={24} color={color} />;
          }
          else if (route.name === 'DetailScreen') {
            iconComponent = <SimpleLineIcons name="speech" size={24} color={color} />;
          }
          return iconComponent;
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'หน้าหลัก',
        }}
      />
      <Tab.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'ดูรายละเอียด'
        }}
      />
      <Tab.Screen
        name="Star"
        component={StarScreen}
        options={{
          title: 'รายการโปรด'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'ประวัติส่วนตัว'
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'ตั้งค่า'
        }}
      /> */}
      
    </Tab.Navigator>
  );
}
