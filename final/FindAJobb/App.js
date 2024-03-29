import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Worldddddd</Text>
      <TextInput  style={styles.input} 
                placeholder='Name'
            />
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      borderColor: "gray",
      width: "80%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
  },
});