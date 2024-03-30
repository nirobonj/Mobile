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

