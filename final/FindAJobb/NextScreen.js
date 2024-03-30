// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const NextScreen = ({ goBack }) => {
//   const handleGoBack = () => {
//     // กลับไปหน้าก่อนหน้านี้
//     goBack();
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>This is the Next Screen</Text>
//       <Button title="Go Back" onPress={handleGoBack} />
//     </View>
//   );
// };

// export default NextScreen;


// NextScreen.js

// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const NextScreen = ({ navigation }) => {
//   const handleGoBack = () => {
//     // กลับไปหน้าก่อนหน้านี้
//     navigation.goBack();
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>This is the Next Screen</Text>
//       <Button title="Go Back" onPress={handleGoBack} />
//     </View>
//   );
// };
// NextScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const NextScreen = ({ goBack }) => {
  return (
    <View>
    {/* // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
      {/* <Text>This is the Next Screen</Text> */}
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default NextScreen;
