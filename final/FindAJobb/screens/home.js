import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
// import { StyleSheet,Text, View, Button } from 'react-native';
// import { Image } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   // const handleGoToDetails = () => {
//   //   navigation.navigate('MyTabs2'); // แก้ชื่อหน้าเป็นชื่อที่ถูกต้องที่ใช้ในการนำทาง
//   // };
// export default function HomeScreen({ navigation }) {
//   const handleGoToDetails = () => {
//     navigation.navigate("DetailScreen"); // ตรวจสอบว่าชื่อหน้า MyTabs2 ถูกต้อง
//   };
export default function HomeScreen({ navigation }) {
  const handleGoToDetails = (classValue) => {
    navigation.navigate("DetailScreen", { classValue });
  };

  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   {/* <Text>Home!</Text>
    //   <Text>This is the Next Screen</Text> */}
    //   {/* <Button title="Go Back" color="#f194ff" onPress={handleGoBack} /> */}

    // </View>
    <View style={styles.container}>
      <View style={styles.box11}>
        <Image
          source={require("../assets/ar.png")}
          style={{ width: 150, height: 60, marginTop: 38 }}
        />
        <View style={styles.box111}>
          <Text style={styles.tex1}>Advanced Research Group Co., Ltd.</Text>
          <Text style={styles.tex2}>
          Programmer Net,C#,Java,PHP,Mobile Application Android/ios
          </Text>
          {/* <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('MyTabs2')}> */}
          {/* <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
            <Text style={styles.buttonText}>ดูรายละเอียด</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
            <Text style={styles.buttonText} class={1} onPress={() => handleGoToDetails(1)}>ดูรายละเอียด </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box11}>
        <Image
          source={require("../assets/gf.jpg")}
          style={{ width: 150, height: 97, marginTop: 22 }}
        />
        <View style={styles.box111}>
          <Text style={styles.tex1}>Gofive Company Limited</Text>
          <Text style={styles.tex2}>
          Developer, System Analyst
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
            <Text style={styles.buttonText} class={2} onPress={() => handleGoToDetails(2)}>ดูรายละเอียด</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box11}>
      <Image
          source={require("../assets/iig.png")}
          style={{ width: 150, height: 60, marginTop: 38 }}
        />
        <View style={styles.box111}>
          <Text style={styles.tex1}>I&I Group Public Company Limited(ii)</Text>
          <Text style={styles.tex2}>
          QA (Software Tester)
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
            <Text style={styles.buttonText } class={3} onPress={() => handleGoToDetails(3)}>ดูรายละเอียด</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box11}>
      <Image
          source={require("../assets/mm.jpg")}
          style={{ width: 150, height: 60, marginTop: 38 }}
        />
        <View style={styles.box111}>
          <Text style={styles.tex1}>Double M Technology Management </Text>
          <Text style={styles.tex2}>
          IOT,Mobile App,Web Application developer
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
            <Text style={styles.buttonText} class={4} onPress={() => handleGoToDetails(4)}>ดูรายละเอียด</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box11}>
      <Image
          source={require("../assets/in.png")}
          style={{ width: 150, height: 90, marginTop: 22 }}
        />
        <View style={styles.box111}>
          <Text style={styles.tex1}>Infinite Technology Co., Ltd.</Text>
          <Text style={styles.tex2}>
          Software engineer Hardware engineer Programmer
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
            <Text style={styles.buttonText} class={5} onPress={() => handleGoToDetails(5)}>ดูรายละเอียด</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  tex1: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  tex2: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 13,
    fontWeight: "normal",
    color: "#000000",
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 12,
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
    width: 390,
    height: 135,
    borderRadius: 20,
    justifyContent: "center",
    // alignItems: 'center',
  },
  box11: {
    backgroundColor: "#ffffff",
    marginTop: 20,

    width: 390,
    height: 135,
    borderRadius: 20,
    justifyContent: "center",
    // alignItems: 'center',
    flexDirection: "row",
  },
  box111: {
    backgroundColor: "#ffffff",

    width: 235,
    height: 135,
    borderRadius: 20,
    justifyContent: "center",
    // alignItems: 'center',
    flexDirection: "column",
  },
  box2: {
    backgroundColor: "#ffffff",
    width: 302,
    height: 402,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
