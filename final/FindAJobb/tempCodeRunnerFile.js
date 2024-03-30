import React from 'react';
import { View, Text, Button } from 'react-native';

const Welcome = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Home'); // หรือหน้าอื่น ๆ ตามที่คุณต้องการ
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      <Button title="Click me" color="#f194ff" onPress={handlePress} />
    </View>
  );
};

export default Welcome;
