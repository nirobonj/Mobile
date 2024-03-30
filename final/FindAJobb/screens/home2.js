import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
// import { StyleSheet,Text, View, Button } from 'react-native';
// import { Image } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   // const handleGoToDetails = () => {
//   //   navigation.navigate('MyTabs2'); // แก้ชื่อหน้าเป็นชื่อที่ถูกต้องที่ใช้ในการนำทาง
//   // };
export default function HomeScreen({ navigation }) {
  const handleGoToDetails = () => {
    navigation.navigate('MyTabs2'); // ตรวจสอบว่าชื่อหน้า MyTabs2 ถูกต้อง
  };

  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   {/* <Text>Home!</Text>
    //   <Text>This is the Next Screen</Text> */}
    //   {/* <Button title="Go Back" color="#f194ff" onPress={handleGoBack} /> */}

    // </View>
    <View style={styles.container}>
      <View style={styles.box11}>
        <Image source={require('../assets/ar.png')} style={{width:150, height:60,marginTop: 38 }}/>
        <View style={styles.box111}>
          <Text style={styles.tex1}>Advanced Research Group Co., Ltd.</Text>
          <Text style={styles.tex2}>Programmer Net,C#,Java,PHP,Mobile Application Android/ios</Text>
          {/* <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('MyTabs2')}> */}
          <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
            <Text style={styles.buttonText}>ดูรายละเอียด</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
    </View>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tex1:{
      marginTop: 10,
      marginLeft: 5,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#000000',
      
      
  },
  tex2:{
    marginTop: 10,
    marginLeft: 10,
    fontSize: 13,
    fontWeight: 'normal',
    color: '#000000',
  },
  button: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 12,
      // elevation: 3,
      width: 90,
      // marginRight: 40,
      marginLeft: 135,
      backgroundColor: 'black',
      
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 10,
      fontWeight: 'bold',
    },
    box1: {
      backgroundColor: '#ffffff',
      marginTop: 20,
      width: 390,
      height: 135,
      borderRadius: 20,
      justifyContent: 'center', 
      // alignItems: 'center',
    },
    box11: {
      backgroundColor: '#ffffff',
      marginTop: 20,
      
      width: 390,
      height: 135,
      borderRadius: 20,
      justifyContent: 'center', 
      // alignItems: 'center',
      flexDirection: 'row'
    },
    box111: {
      backgroundColor: '#ffffff',
      
      width: 235,
      height: 135,
      borderRadius: 20,
      justifyContent: 'center', 
      // alignItems: 'center',
      flexDirection: 'column'
    },
    box2: {
      backgroundColor: '#ffffff',
      width: 302,
      height: 402,
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: 20,
    },
});




