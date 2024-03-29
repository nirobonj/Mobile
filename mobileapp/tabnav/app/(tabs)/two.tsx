import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      <View style={styles.box1}>
        {/* <View style={styles.o0}></View> */}
        <Ionicons name="flash-off-outline" size={24} color="black" style={styles.te3} />
        <Ionicons name="color-filter-outline" size={24} color="black" style={styles.te4} />
        <Ionicons name="color-wand-outline" size={24} color="black" style={styles.te4} />
        <Ionicons name="settings-outline" size={24} color="black" style={styles.te4} />
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}>
        <Ionicons name="albums-outline" size={24} color="black" style={styles.te33} />
        <Ionicons name="radio-button-on" size={24} color="black" style={styles.te44} />
        <Ionicons name="camera-reverse-outline" size={24} color="black" style={styles.te5} />
        
      </View>
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
    marginTop: 20,
    marginLeft: 15,
  },
  te33: {
    fontSize: 40,
    fontWeight: 'bold',
    // 
    marginTop: 55,
    marginLeft: 40,
  },
  te4: {
    fontSize: 30,
    fontWeight: 'bold',
    // 
    marginTop: 20,
    marginLeft: 80,
  },
  te44: {
    fontSize: 80,
    fontWeight: 'bold',
    // 
    marginTop: 33,
    marginLeft: 80,
  },
  te5: {
    fontSize: 40,
    fontWeight: 'bold',
    // 
    marginTop: 55,
    marginLeft: 80,
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '80%',
  },
  box1: {
    backgroundColor: '#ff69b4',
    width: 500,
    height: 70,
    flexDirection: 'row',
    // marginTop: 20
    // margin: 2
  },
  box2: {
    backgroundColor: '#fafad2',
    width: 500,
    height: 550,
    flexDirection: 'row',
    //marginTop: 45,
    //marginLeft: 33,
    //borderRadius: 20
  },
  box3: {
    backgroundColor: '#ff69b4',
    width: 500,
    height: 300,
    flexDirection: 'row',
    //marginTop: 45,
    //marginLeft: 35,
    //borderRadius: 20
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
