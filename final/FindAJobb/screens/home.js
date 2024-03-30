// import React from 'react';
// import {Text, TextInput, View ,StyleSheet, Button, Pressable } from 'react-native';
// import { collection, addDoc } from "firebase/firestore"; 
// import { db } from '../component/config';

// export default function HomeScreen(){
//     const [name, setName] = React.useState('')
//     const [surname, setSurname]= React.useState('')

//     function create(){
//         addDoc(collection(db,"profile"),{
//             name: name,
//             surname: surname
//         }).then(()=>{
//             console.log('data submitted')
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }

//     return(
//         <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
//             <Text>Firebase</Text>
//             <TextInput  style={styles.input} value={name} onChangeText={(name) => {setName(name)}}
//                 placeholder='Name'
//             />
//             <TextInput  style={styles.input} value={surname} onChangeText={(surname) => {setSurname(surname)}}
//                 placeholder='SurName'
//             />
//             {/* <TextInput  style={styles.input}

//             /> */}
//             {/* <br/> */}
//             <Button
//                 title="SUBMIT"
//                 style={styles.button1}
//                 onPress={create}
//             />
            
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     input: {
//         borderColor: "gray",
//         width: "80%",
//         borderWidth: 1,
//         borderRadius: 10,
//         padding: 10,
//     },
//     title: {
//         textAlign: 'center',
//         marginVertical: 8,
//     },
//     fixToText: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     separator: {
//         marginVertical: 8,
//         borderBottomColor: '#737373',
//         borderBottomWidth: StyleSheet.hairlineWidth,
//     },
//     button1: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 32,
//         borderRadius: 4,
//         elevation: 3,
//         backgroundColor: 'black',
//     },
//   });
// import React, { useState } from 'react';
// import {Text, View, Button} from 'react-native';
// const [showNextScreen, setShowNextScreen] = useState(false);
// const { handleGoBack } = route.params;

// export default function HomeScreen({ navigation, route }){
//     return(
//         <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
//             <Text>Home!</Text>
//             <Text>This is the Next Screen</Text>
//             <Button title="Go Back" color="#f194ff" onPress={handleGoBack} />
//         </View>
//     );
// }
// import React from 'react';
// import { Text, View, Button } from 'react-native';


// export default function HomeScreen({ navigation, route }) {
//   const handleGoBack = () => {
//     navigation.navigate('Welcome');
//   };
  

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       <Text>This is the Next Screen</Text>
//       <Button title="Go Back" color="#f194ff" onPress={handleGoBack} />
//     </View>
//   );
// }
import React from 'react';
import { Text, View, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
  const handleGoBack = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>This is the Next Screen</Text>
      {/* <Button title="Go Back" color="#f194ff" onPress={handleGoBack} /> */}
    </View>
  );
}

