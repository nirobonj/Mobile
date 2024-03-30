
// import React, { useState } from 'react';
// import { View, Text, Button ,StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import MyTabs from './tabs/mytabs';
// import { Ionicons } from "@expo/vector-icons";
// import Welcome from './welcome';

// const MyScreen = () => {
//   const [showNextScreen, setShowNextScreen] = useState(false);

//   const handlePress = () => {
//     setShowNextScreen(true);
//   };

//   const handleGoBack = () => {
//     setShowNextScreen(false);
//   };
//   return (
//     <NavigationContainer>
//       {showNextScreen ? (
        
//         <MyTabs handleGoBack={handleGoBack}/>
//       ) : (
//         <Welcome onPress={handlePress} />
//       )}
//       {/* {showNextScreen && <MyTabs />} */}
//       {showNextScreen}
//     </NavigationContainer>
//   );
// };

// export default MyScreen;
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import MyTabs from './tabs/mytabs';
// import Welcome from './welcome';

// const MyScreen = () => {
//   const [showNextScreen, setShowNextScreen] = useState(false);

//   const handlePress = () => {
//     setShowNextScreen(true);
//   };

//   const handleGoBack = () => {
//     setShowNextScreen(false);
//   };

//   return (
//     <NavigationContainer>
//       {/* {showNextScreen ? (
//         <MyTabs handleGoBack={handleGoBack} />
//       ) : (
//         <Welcome onPress={handlePress} />
//       )} */}
//       <MyTabs handleGoBack={handleGoBack} /> {/* สลับการแสดง MyTabs กับ Welcome */}
//       {showNextScreen && <Welcome onPress={handlePress} />} {/* เพิ่ม Welcome component ตรงนี้ */}
//     </NavigationContainer>
//   );
// };

// export default MyScreen;
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tabs/mytabs';
import Welcome from './welcome';

const MyScreen = () => {
  const [showNextScreen, setShowNextScreen] = useState(false);

  const handlePress = () => {
    setShowNextScreen(true);
  };

  const handleGoBack = () => {
    setShowNextScreen(false);
  };
  const navigateToTabs = () => {
    setShowNextScreen(true);
  };

  return (
    <NavigationContainer>
      {showNextScreen ? (
        <MyTabs handleGoBack={handleGoBack} />
      ) : (
        <Welcome navigation={{ navigate: () => setShowNextScreen(true) }} /> 
        
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyScreen;

