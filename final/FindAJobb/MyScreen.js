// import React from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       {/* <Button/> */}
//       <Button
//         title="click me"
//         color="#f194ff"
        
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// import { Component } from 'react';
// import { View } from 'react-native';
// import MyButton from './MyButton'; // ชื่อไฟล์ที่สร้างขึ้น

// const MyScreen = () => {
//   const handlePress = () => {
//     // ทำสิ่งที่ต้องการเมื่อปุ่มถูกกด
//     console.log('Button clicked!');
//     // เปลี่ยนหน้าหรือทำการนำทางไปยังหน้าอื่น
//     navigation.navigate('NextScreen');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <MyButton onPress={handlePress} />
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//     </View>
//   );
// };

// export default MyScreen;
// MyScreen.js


// import React from 'react';
// import { View } from 'react-native';
// import MyButton from './MyButton'; // ชื่อไฟล์ที่สร้างขึ้น

// const MyScreen = ({ navigation }) => {
//   const handlePress = () => {
//     // ทำสิ่งที่ต้องการเมื่อปุ่มถูกกด
//     console.log('Button clicked!');
//     // เปลี่ยนหน้าหรือทำการนำทางไปยังหน้าอื่น
//     navigation.navigate('NextScreen');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <MyButton onPress={handlePress} />
//     </View>
//   );
// };

// export default MyScreen;
// MyScreen.js

// import React, { useState } from 'react';
// import { View } from 'react-native';
// import MyButton from './MyButton';
// import NextScreen from './NextScreen'; // Import หน้า NextScreen

// const MyScreen = () => {
//   const [showNextScreen, setShowNextScreen] = useState(false);

//   const handlePress = () => {
//     // ทำสิ่งที่ต้องการเมื่อปุ่มถูกกด
//     setShowNextScreen(true);
//   };

//   const handleGoBack = () => {
//     setShowNextScreen(false);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {showNextScreen ? (
//         <NextScreen goBack={handleGoBack} />
//       ) : (
//         <MyButton onPress={handlePress} />
//       )}
//     </View>
//   );
// };

// export default MyScreen;

// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const MyScreen = () => {
//   const [showNextScreen, setShowNextScreen] = useState(false);

//   const handlePress = () => {
//     setShowNextScreen(true);
//   };

//   const handleGoBack = () => {
//     setShowNextScreen(false);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {showNextScreen ? (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>This is the Next Screen</Text>
//           <Button title="Go Back" onPress={handleGoBack} />
//         </View>
//       ) : (
//         <Button title="Click me" onPress={handlePress} />
//       )}
//     </View>
//   );
// };

// export default MyScreen;

import React, { useState } from 'react';
import { View, Text, Button ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tabs/mytabs';
import { Ionicons } from "@expo/vector-icons";

const MyScreen = () => {
  const [showNextScreen, setShowNextScreen] = useState(false);

  const handlePress = () => {
    setShowNextScreen(true);
  };

  const handleGoBack = () => {
    setShowNextScreen(false);
  };

//   return (
//     <View>
//       {showNextScreen ? (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>This is the Next Screen</Text>
//           <Button title="Go Back" onPress={handleGoBack} />
//         </View>
//       ) : (
//         <Button title="Gooo" onPress={handlePress} />
//       )}
//     </View>
//   );
// };
    // return (
    //   <View>
    //   {/* // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
    //     {showNextScreen ? (
    //       <NavigationContainer>
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text>This is the Next Screen</Text>
    //         <Button title="Go Back" color="#f194ff" onPress={handleGoBack} />
    //         </View>
          
    //         <MyTabs />
    //       </NavigationContainer>
          
    //     ) : (
    //       <NavigationContainer>
    //         <Text>Welcome</Text>
    //         <Button title="Click me" color="#f194ff" onPress={handlePress} />
            
    //       </NavigationContainer>
          
    //     )}
    //     </View>
    //   );
    // };
  //   return (
  //     <NavigationContainer>
  //       {showNextScreen ? (
  //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //           <Text>This is the Next Screen</Text>
  //           <Button title="Go Back" color="#f194ff" onPress={handleGoBack} />
  //         </View>
  //       ) : (
  //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //           <Text>Welcome</Text>
  //           <Button title="Click me" color="#f194ff" onPress={handlePress} />
  //         </View>
  //       )}
  //       {showNextScreen && <MyTabs />} {/* เพิ่มเงื่อนไขการแสดง MyTabs */}
  //     </NavigationContainer>
  //   );
  // };
  return (
    <NavigationContainer>
      {showNextScreen ? (
        
        <MyTabs handleGoBack={handleGoBack}/>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Welcome</Text>
          <Button title="Click me" color="#f194ff" onPress={handlePress} />
        </View>
      )}
      {/* {showNextScreen && <MyTabs />} */}
      {showNextScreen}
    </NavigationContainer>
  );
};

export default MyScreen;


