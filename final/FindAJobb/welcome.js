import React from 'react';
import MyTabs from './tabs/mytabs';
import { StyleSheet,View, Text, Button , TouchableOpacity} from 'react-native';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';

//@ts-nocheck
const Welcome = ({ navigation }) => {
    return (
      <View style={styles.container}>
      <View style={styles.box2}>
        <View style={styles.box1}>
              <Image source={require('../FindAJobb/assets/job (2).png')} style={{width:150, height:150,marginRight: 80,marginTop: 25,marginRight: -10,}}/>
              <Text style={styles.tex1}>FindAJobb</Text>
        </View>
       </View>
        
        
        <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('MyTabs')}>
            <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
        {/* <Button style={styles.button} title="Click Me" onPress={() => navigation.navigate('MyTabs')} /> */}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#48d1cc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tex1:{
        marginTop: 25,
        marginLeft: 5,
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff',
        justifyContent: 'center',
        
    },
    button: {
        marginTop: 160,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 35,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: 'black',
        
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      box1: {
        backgroundColor: '#7b68ee',
        width: 300,
        height: 400,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 20,
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
  
export default Welcome;
