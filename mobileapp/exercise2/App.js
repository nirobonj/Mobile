import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { Component1,Component2,Component3 } from './compo';



export default function App() {
  
  const _onPressButton1 = () => {
    alert('You tapped the button1')
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.box1}></View>
      
      <View  style={styles.box2}>
      {/* <Text style={styles.tex1}>ตำแหน่งปัจจุบัน</Text> */}
        <View style={styles.box4}></View>
        {/* <LinearGradient colors={['#74d989','#4bd274']}></LinearGradient> */}
        <View style={styles.box3}>
        <Text style={styles.tex}>ตำแหน่งปัจจุบัน</Text>
        </View>
        {/* <View style={styles.box6}></View>
        <View style={styles.box7}></View> */}
        {/* <View style={styles.box5}><Component3/></View> */}

      </View>
      <View  style={styles.box22}>
        <View style={styles.box6}>
          <Text style={styles.tex1}>สั่งอาหาร</Text>
        </View>
        <View style={styles.box7}>
        <Text style={styles.tex1}>เรียกรถ</Text>
        </View>
        
      </View>
        <View  style={styles.box222}>
        <View style={styles.box8}></View>
        <View style={styles.box8}></View>
        <View style={styles.box8}></View>
      </View>
      <Text style={styles.tex2}>เมสเซนเจอร์          สั่งของ            แพ็กเกจ</Text>
      <View style={styles.box99}></View>
      <View style={styles.box11}>
        <View style={styles.box111}></View>
        <View style={styles.box111}></View>
        <View style={styles.box111}></View>
        <View style={styles.box111}></View>
      </View>
      <View style={styles.box10}></View>
      <StatusBar style="auto" />
              
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e9e9e9',
    
  },
  tex:{
    marginTop: 13,
    marginLeft: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    justifyContent: 'center'
  },
  tex1:{
    marginTop: 20,
    marginLeft: 20,
    // marginRight: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#262626',
    justifyContent: 'center'
  },
  tex2:{
    marginTop: 40,
    marginLeft: 30,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#262626',
    justifyContent: 'center'
  },
  box1: {
    backgroundColor: '#3e814e',
    width: 500,
    height: 22,
  },
  box2: {
    backgroundColor: '#74d989',
    width: 412,
    height: 170,
    // borderBottomRightRadius: 55,
    // borderBottomLeftRadius: 55,
    // borderBottomEndRadius: 55,
    // borderBottomStartRadius: 55,
  },
  box22: {
    backgroundColor: '#74d989',
    width: 412,
    height: 100,
    
    // borderBottomRightRadius: 55,
    // borderBottomLeftRadius: 55,
    flexDirection: 'row'
  },
  box222: {
    backgroundColor: '#74d989',
    width: 412,
    height: 70,
    
    // borderBottomRightRadius: 55,
    // borderBottomLeftRadius: 55,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    flexDirection: 'row'
  },
  box3: {
    // margin: 28,
    marginLeft: 28,
    marginTop: 25,
    backgroundColor: '#36a65c',
    width: 355,
    height: 60,
    borderRadius: 10,
  },
  
  box4: {
    marginLeft: 340,
    marginTop: 25,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  box5:{
    // flex: 1,
    height: 25,
    backgroundColor: '#00e0cc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box6: {
    marginLeft: 28,
    marginTop: 14,
    backgroundColor: '#e1e1e1',
    width: 165,
    height: 85,
    borderRadius: 10,
    
  },
  box7: {
    marginLeft: 25,
    marginTop: 14,
    backgroundColor: '#e1e1e1',
    width: 165,
    height: 85,
    borderRadius: 10,
  },
  box8: {
    marginStart: 25,

    //marginRight: 6,
    marginTop: 14,
    backgroundColor: '#e1e1e1',
    width: 102,
    height: 85,
    borderRadius: 10,
  },
  box99: {
    marginStart: 25,

    //marginRight: 6,
    marginTop: 20,
    backgroundColor: '#061727',
    width: 360,
    height: 170,
    borderRadius: 10,
  },
  box11: {
    backgroundColor: '#e9e9e9',
    width: 400,
    height: 10,
    borderRadius: 55,
    justifyContent: 'center',
    // borderBottomLeftRadius: 55,
    flexDirection: 'row'
  },
  box111: {
    backgroundColor: '#858585',
    width: 10,
    height: 10,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 55,
    justifyContent: 'center',
    //borderBottomLeftRadius: 55,
  },
  box10: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    width: 412,
    height: 100,
  },

});
