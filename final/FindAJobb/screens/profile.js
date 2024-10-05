// import {Text, View, Button} from 'react-native';
const { StyleSheet,Text, View, Button , Image} = require('react-native');
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function ProfileScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.box222}>
                <View style={styles.box4}>
                <Image
                    source={require("../assets/karina.jpg")}
                    style={{ width: 90, height: 90,borderRadius: 50, }}
                />
                </View>
                <View style={styles.box5}>
                    <Text style={{  marginTop:30 ,marginLeft: 30, fontSize: 25, fontWeight: "bold",}}>Katarinabluu</Text>
                    <View style={styles.box6}>
                <Text style={{  marginLeft: 18,color: "#ffffff", fontSize: 15, fontWeight: "bold",}}> แก้ไขโปรไฟล์! </Text>
              </View>
                </View>
                
            </View>
            <View style={styles.box22}>
            
            
                <View style={styles.box23}>
                    
                </View>
                {/* <Text style={{  marginTop:30 ,marginLeft: 30, fontSize: 20,}}>ชื่อ : จีมิน</Text> */}
                <Text style={{ marginTop: 30, marginLeft: 30, fontSize: 18, fontWeight: 'bold' }}>ชื่อ : <Text style={{ fontWeight: 'normal' }}>จีมิน</Text></Text>
                <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 18, fontWeight: 'bold' }}>นามสกุล : <Text style={{ fontWeight: 'normal' }}>ยู</Text></Text>
                <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 18, fontWeight: 'bold' }}>วันเกิด : <Text style={{ fontWeight: 'normal' }}>20/04/2000</Text></Text>
                {/* <Text style={{  marginTop:10 ,marginLeft: 30, fontSize: 20,}}>นามสกุล : ยู</Text> */}
                {/* <Text style={{  marginTop:10 ,marginLeft: 30, fontSize: 20,}}>วันเกิด : 20/04/2000</Text> */}
                <Text style={{  marginTop:10 ,marginLeft: 30, fontSize: 18, fontWeight: 'bold'}}>ลักษณะงานที่ต้องการ : </Text>
                <Text style={{  marginTop:10 ,marginLeft: 30, fontSize: 18,}}>   • Web developer</Text>
                <Text style={{  marginTop:10 ,marginLeft: 30, fontSize: 18,}}>   • Mobile developer</Text>
                <Text style={{  marginTop:10 ,marginLeft: 30, fontSize: 18,}}>   • Software Engineer</Text>
                <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 18, fontWeight: 'bold' }}>สถานศึกษา :  <Text style={{ fontWeight: 'normal' }}>มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน</Text></Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d3d3d3",
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    tex1: {
      marginTop: 25,
      marginLeft: 25,
      // fontSize: 15,
      fontWeight: "bold",
      color: "#000000",
      justifyContent: 'center',
    },
    tex2: {
      marginTop: 13,
      marginLeft: 30,
      fontSize: 14,
      fontWeight: "normal",
      color: "#000000",
    },
    tex22: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 14,
      fontWeight: "normal",
      color: "#000000",
    },
    button: {
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 20,
      // elevation: 3,
      width: 90,
      // marginRight: 40,
      marginLeft: 135,
      backgroundColor: "black",
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 10,
      fontWeight: "bold",
    },
    box1: {
      backgroundColor: "#ffffff",
      marginTop: 20,
      width: 390,
      height: 135,
      borderRadius: 20,
      justifyContent: "center",
      // alignItems: 'center',
    },
    box11: {
      backgroundColor: "#ffffff",
      width: 390,
      height: 725,
      borderRadius: 20,
      // justifyContent: "center",
      // alignItems: 'center',
      flexDirection: "column",
    },
    box111: {
      backgroundColor: "#ffffff",
  
      width: 235,
      height: 135,
      borderRadius: 20,
      justifyContent: "center",
      // alignItems: 'center',
      flexDirection: "column",
    },
    box2: {
      backgroundColor: "blue",
      marginLeft: 15,
      marginRight: 15,
      width: 360,
      height: 200,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    box22: {
      backgroundColor: "#ffffff",
      marginLeft: 15,
      marginRight: 15,
      width: 360,
      height: 400,
      marginTop: 18,
      flexDirection: "column",
      // alignItems: "center",
      borderRadius: 10,
    //   flexDirection: "row",
    },
    box23: {
        backgroundColor: "#ffffff",
        marginLeft: 15,
        marginRight: 15,
        width: 30,
        height: 0,
        marginTop: 18,
        // flexDirection: "column",
        // alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
      },
    box222: {
      backgroundColor: "#ffffff",
      marginLeft: 15,
      marginRight: 15,
      width: 360,
      height: 150,
      marginTop: 30,
    //   flexDirection: "column",
      // alignItems: "center",
      borderRadius: 10,
      flexDirection: "row",
    },
    box3: {
      backgroundColor: "#ffffff",
      width: 135,
      height: 50,
      marginLeft: 10,
      // justifyContent: "center",
      alignItems: 'center',
      flexDirection: "row",
    },
    box4: {
      backgroundColor: "black",
      width: 90,
      height: 90,
      marginLeft: 30,
      marginTop: 30,
      // justifyContent: "center",
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: "row",
    },
    box5: {
        backgroundColor: "#ffffff",
        width: 200,
        height: 80,
        // marginLeft: 30,
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: 'center',
        // borderRadius: 50,
        
      },
      box6: {
        backgroundColor: "black",
        width: 140,
        height: 40,
        marginLeft: 30,
        marginTop: 20,
        // justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: "row",
      },
  });
  