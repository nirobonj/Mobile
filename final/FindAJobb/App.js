import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tabs/mytabs';
import MyTabs2 from './tabs/mytabs2';
import Welcome from './welcome';


const MyScreen = () => {
  const [showNextScreen, setShowNextScreen] = useState(false);

  // const handlePress = () => {
  //   setShowNextScreen(true);
  // };

  // const handleGoBack = () => {
  //   setShowNextScreen(false);
  // };
  // const navigateToTabs = () => {
  //   setShowNextScreen(true);
  // };
  const handlePress = (event) => {
    event.persist(); // เพิ่มเพื่อแก้ไขปัญหา Warning
    setShowNextScreen(true);
  };

  const handleGoBack = (event) => {
    event.persist(); // เพิ่มเพื่อแก้ไขปัญหา Warning
    setShowNextScreen(false);
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

