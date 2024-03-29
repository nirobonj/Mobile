import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component1,Component2,Component3} from './compo';

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
const App=()=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.box1}>
        <View style={styles.box4}></View>
        <View style={styles.box7}>
          <View style={styles.box77}></View>
        </View>
      </View>
      <View style={styles.box5}>
        <View style={styles.box6}></View>
        <View style={styles.box8}></View>
        <View style={styles.box8}></View>
        
      </View>
      <View style={styles.box2}><Text style={styles.red}><Component2/></Text></View>
      <View style={styles.box3}><Component3/></View>
      {/* <View style={styles.box1}><View style={styles.box4}></View><Component1/></View> */}

      {/* <View style={styles.box2}><Component2/></View>
      <View style={styles.box3}><Component3/></View> */}
      {/* <View style={styles.box4}><Component3/></View> */}
      
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
    color: 'deeppink',
    fontWeight: 'bold',
    fontSize: 30
  
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row'
    //flexDirection: 'column'
  },
  box6: {
    // width: 20,
    height: '100%',
    width: '15%',
    
    backgroundColor: '#fd7abd',
    // margin: 10
    
  },
  box7: {
    width: 270,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#483d8b',
    margin: 20
  },
  box77: {
    flex: 1,
    width: 30,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'salmon',
    justifyContent: 'flex-end',
    
  },
  box8:{
    width: 130,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#afb4b8',
    margin: 18
  
  },
});
export default App