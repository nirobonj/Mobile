// import {Text, View, Button} from 'react-native';
const { StyleSheet, Text, View, Button , Image} = require('react-native');
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function StarScreen(){
    return(
        <View style={styles.container}>
            {/* <Text>Star!</Text> */}
            <View style={styles.box11}>
            <Image
                source={require("../assets/ar.png")}
                style={{ width: 150, height: 60, marginTop: 20}}
            />
                <Text  style={{ width: 150, height: 90, marginTop: 30 }}>
                    Advanced Research Group Co., Ltd.
                </Text>
                <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 30 ,marginLeft: 20,}}/>
            </View>
            <View style={styles.box11}>
            <Image
                source={require("../assets/gf.jpg")}
                style={{ width: 150, height: 90, marginTop: 3,fontSize: 20 }}
            />
                <Text  style={{ width: 150, height: 90, marginTop: 30 }}>
                    Gofive Company Limited
                </Text>
                <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 30 ,marginLeft: 20,}}/>
            </View>
            <View style={styles.box11}>
            <Image
                source={require("../assets/iig.png")}
                style={{ width: 150, height: 90, marginTop: 3,fontSize: 20 }}
            />
                <Text  style={{ width: 150, height: 90, marginTop: 30 }}>
                I&I Group Public Company Limited(ii) 
                </Text>
                <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 30 ,marginLeft: 20,}}/>
            </View>
            <View style={styles.box11}>
            <Image
                source={require("../assets/mm.jpg")}
                style={{ width: 150, height: 90, marginTop: 3,fontSize: 20 }}
            />
                <Text  style={{ width: 150, height: 90, marginTop: 30 }}>
                    Double M Technology Management
                </Text>
                <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 30 ,marginLeft: 20,}}/>
            </View>
            <View style={styles.box11}>
            <Image
                source={require("../assets/in.png")}
                style={{ width: 150, height: 90, marginTop: 3,fontSize: 20 }}
            />
                <Text  style={{ width: 150, height: 90, marginTop: 30 }}>
                Infinite Technology Co., Ltd.
                </Text>
                <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 30 ,marginLeft: 20,}}/>
            </View>
            <View style={styles.box11}>
            <Image
                source={require("../assets/md.png")}
                style={{ width: 150, height: 90, marginTop: 3,fontSize: 20 }}
            />
                <Text  style={{ width: 150, height: 90, marginTop: 30 }}>
                    M.D.Soft Co.,Ltd.
                </Text>
                <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 30 ,marginLeft: 20,}}/>
            </View>
            <View style={styles.box11}>
            <Image
                source={require("../assets/company-info-img-1.jpg")}
                style={{ width: 150, height: 90, marginTop: 3,fontSize: 20 }}
            />
                <Text  style={{ width: 150, height: 90, marginTop: 30 }}>
                TOT Public Company Limited
                </Text>
                <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 30 ,marginLeft: 20,}}/>
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
      width: 330,
      height: 135,
      borderRadius: 20,
      justifyContent: "center",
      // alignItems: 'center',
    },
    box11: {
      backgroundColor: "#ffffff",
      width: 380,
      marginTop: 9,
      height: 97,
    //   borderRadius: 20,
      // justifyContent: "center",
      // alignItems: 'center',
      flexDirection: "row",
    },
    box111: {
      backgroundColor: "#ffffff",
  
      width: 235,
      height: 135,
      borderRadius: 10,
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
      height: 50,
      marginTop: 18,
      
      // alignItems: "center",
      borderRadius: 10,
      flexDirection: "row",
    },
    box222: {
      backgroundColor: "#dcdcdc",
      marginLeft: 15,
      marginRight: 15,
      width: 360,
      height: 300,
      marginTop: 30,
      flexDirection: "column",
      // alignItems: "center",
      borderRadius: 10,
      // flexDirection: "row",
    },
    box3: {
      backgroundColor: "#ffffff",
      width: 135,
      height: 50,
      marginLeft: 70,
      // justifyContent: "center",
      alignItems: 'center',
      flexDirection: "row",
    },
  });