// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const Welcome = ({ onPress }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome</Text>
//       <Button title="Click me" color="#f194ff" onPress={onPress} />
//     </View>
//   );
// };

// export default Welcome;
// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const Welcome = ({ navigation, onPress }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome</Text>
//       <Button
//         title="Click me"
//         color="#f194ff"
//         onPress={() => navigation.navigate('MyScreen')}
//       />
//     </View>
//   );
// };

// // export default Welcome;import React from 'react';
import React from 'react';
import MyTabs from './tabs/mytabs';
import { View, Text, Button } from 'react-native';

// const Welcome = ({ navigation }) => {
//   const handlePress = () => {
//     navigation.navigate('HomeScreen'); // หรือหน้าอื่น ๆ ตามที่คุณต้องการ
//   };
// const Welcome = ({ navigation, handlePress }) => {
//     const Welcome = ({ navigation }) => { // เพิ่ม navigation เข้ามาในพารามิเตอร์
//         const handlePress = () => {
//           navigation.navigate('MyTabs'); // ใช้ navigation เพื่อไปยัง MyTabs component
//         };
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome</Text>
//       <Button title="Click me" color="#f194ff" onPress={handlePress} />
//     </View>
//   );
// };
//@ts-nocheck
const Welcome = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome</Text>
        <Button title="Click me" color="#f194ff" onPress={() => navigation.navigate('MyTabs')} />
      </View>
    );
  };

export default Welcome;
