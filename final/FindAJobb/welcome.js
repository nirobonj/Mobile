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
import { StyleSheet,View, Text, Button , TouchableOpacity} from 'react-native';
import { Image } from 'expo-image';
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
      <View style={styles.container}>
        <Image source={require('C:\Users\admin\Documents\GitHub\Mobile\final\FindAJobb\assets\posting.png')}/>
        <Text style={styles.tex1}>FindAJobb</Text>
        <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('MyTabs')}>
            <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
        {/* <Button style={styles.button} title="Click Me" onPress={() => navigation.navigate('MyTabs')} /> */}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff7f50',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tex1:{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff',
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  
export default Welcome;
