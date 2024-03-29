import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (

    <View style={styles.container}>
      {/* <View style={styles.box1}></View> */}
      <Text style={styles.title}>21:53</Text>
      <Text style={styles.te}>28 ม.ค. อา.</Text>
      
      <View style={styles.box1}>
        <Ionicons name="moon-outline" size={24} color="black" style={styles.te1} />
        <Text style={styles.te2}>34 ํC กำแพงแสน</Text>
      </View>
      <View style={styles.box2}>
        <Ionicons name="logo-google" size={24} color="black" style={styles.te3} />
        <Ionicons name="mic-outline" size={24} color="black" style={styles.te4} />
        <Ionicons name="camera-outline" size={24} color="black" style={styles.te3} />
      </View>
      <View style={styles.box1}>
        <View style={styles.o0}></View>
        <View style={styles.o1}></View>
        <View style={styles.o1}></View>
        <View style={styles.o1}></View>
      </View>
      
      <View style={styles.box1}>
        <View style={styles.o0}></View>
        <View style={styles.o1}></View>
        <View style={styles.o1}></View>
        <View style={styles.o1}></View>
      </View>


      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    // 
    marginTop: 70,
    marginLeft: 100,
  },
  te: {
    fontSize: 20,
    fontWeight: 'bold',
    // 
    //marginTop: 70,
    marginLeft: 150,
  },
  te1: {
    fontSize: 20,
    fontWeight: 'bold',
    // 
    //marginTop: 70,
    marginLeft: 100,
  },
  te2: {
    fontSize: 20,
    fontWeight: 'bold',
    // 
    //marginTop: 70,
    marginLeft: 10,
  },
  te3: {
    fontSize: 30,
    fontWeight: 'bold',
    // 
    marginTop: 15,
    marginLeft: 15,
  },
  te4: {
    fontSize: 30,
    fontWeight: 'bold',
    // 
    marginTop: 15,
    marginLeft: 210,
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '80%',
  },
  box1: {
    backgroundColor: '#ffffff',
    width: 500,
    height: 90,
    flexDirection: 'row',
    marginTop: 20
    // margin: 2
  },
  box2: {
    backgroundColor: '#ff69b4',
    width: 350,
    height: 60,
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 33,
    borderRadius: 20
  },
  box3: {
    backgroundColor: '#ff69b4',
    width: 350,
    height: 60,
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 35,
    borderRadius: 20
  },
  box4: {
    backgroundColor: '#000000',
    width: 350,
    height: 100,
    flexDirection: 'row',
    marginTop: 2
  },
  o0: {
    backgroundColor: '#ff69b4',
    width: 60,
    height: 60,
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 33,
    borderRadius: 30
  },
  o1: {
    backgroundColor: '#ff69b4',
    width: 60,
    height: 60,
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 36,
    borderRadius: 30
  },
});
