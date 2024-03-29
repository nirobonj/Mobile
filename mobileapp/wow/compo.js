import { StyleSheet, Text, View } from 'react-native';

export const Component1 = () => {
    return (
        <View>
            <Text>   Mobile App</Text>
        </View>
    );
}

export const Component2 = () => {
    return (
        <View>
            <Text style={styles.red}>CPE</Text>
        </View>
    );
}
export const Component3 = () => {
      return (
        <View>
          <Text>5/1/2024</Text>
        </View>
      );
}    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#a9a9a9',
      marginTop: 30,
      
      // flexDirection: 'row'
    },
    red: {
      color: '#ffffa2',
      fontWeight: 'bold',
      fontSize: 25
    
    },
    box: {
      height: 100,
      width: 100,
      margin: 4,
      backgroundColor: 'powderblue'
    },
    box1: {
      // flex: 1,
      
      height: 80,
      backgroundColor: '#ffcfe1',
      justifyContent: 'center',
      //alignItems: 'center'
      flexDirection: 'row'
    },
    box2:{
      // flex: 1,
      height: 40,
      backgroundColor: '#9f9bff',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    box3:{
      // flex: 1,
      height: 25,
      backgroundColor: '#00e0cc',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    box4:{
      width: 55,
      height: 55,
      borderRadius: 20,
      backgroundColor: 'crimson',
      
      margin: 10
    }, 
    box5: {
      // width: 20,
      height: '80%',
      width: '100%',
      backgroundColor: '#fff'
    },
    box6: {
      // width: 20,
      height: '100%',
      width: '15%',
      backgroundColor: '#fd7abd'
    },
    box7: {
      width: 270,
      height: 40,
      borderRadius: 10,
      backgroundColor: '#483d8b',
      margin: 20
    },
    box8:{
      width: 55,
      height: 55,
      borderRadius: 20,
      backgroundColor: 'crimson',
      
      margin: 10
    },
  });