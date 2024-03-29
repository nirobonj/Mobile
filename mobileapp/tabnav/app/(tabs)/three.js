import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {Image} from 'expo-image'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Three</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image source={require('../../assets/images/icon.png')} style={{width: 50,height: 50}}/> */}
      {/* <Ionicons name="camera" size={24} color="black" /> */}
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      <View style={styles.box2}>
        <View style={styles.boxx}></View>
      </View>
      <View style={styles.box22}>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        <View style={styles.li}></View>
        {/* <View style={styles.box}></View> */}
        <View style={styles.li}></View>

        {/* <View style={styles.separator2} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      </View>

      <View style={styles.box222}>
        <View style={styles.li}></View>
        <View style={styles.li}></View>
        <View style={styles.li}></View>

        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      </View>
      <View style={styles.box2222}>
        <View style={styles.li}></View>
        <View style={styles.li}></View>
        <View style={styles.li}></View>
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
  separator: {
    marginTop: 60,
    height: 2,
    width: '100%',
  },
  separator1: {
    marginTop: 120,
    height: 2,
    width: '100%',
  },
  li: {
    backgroundColor: '#ffffff',
    //backgroundColor: '#000000',
    marginTop: 60,
    height: 0.5,
    width: 350,
  },
  box: {
    backgroundColor: '#ff69b4',
    //backgroundColor: '#000000',
    //marginTop: 60,
    height: 60,
    width: 350,
  },
  boxx: {
    backgroundColor: '#ffffff',
    //backgroundColor: '#000000',
    marginTop: 7,
    height: 45,
    width: 45,
    borderRadius: 45,
    marginLeft: 20
  },
  box2: {
    backgroundColor: '#ff69b4',
    width: 350,
    height: 60,
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 31,
    borderRadius: 15
  },
  box22: {
    backgroundColor: '#ff69b4',
    width: 350,
    height: 180,
    //flexDirection: 'row',
    marginTop: 20,
    marginLeft: 31,
    borderRadius: 15
  },
  box222: {
    backgroundColor: '#ff69b4',
    width: 350,
    height: 240,
    //flexDirection: 'row',
    marginTop: 20,
    marginLeft: 31,
    borderRadius: 15
  },
  box2222: {
    backgroundColor: '#ff69b4',
    width: 350,
    height: 240,
    //flexDirection: 'row',
    marginTop: 20,
    marginLeft: 31,
    borderRadius: 15
  },
});
