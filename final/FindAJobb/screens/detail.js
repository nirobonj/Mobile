// // import {Text, View, Button} from 'react-native';
// const { Text, View, Button } = require('react-native');
// import React from 'react';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// export default function DetailScreen(){
//     return(
//         <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
//             <Text>Detail!</Text>
//         </View>
//     );
// }


// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// export default function DetailScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Detail!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
import { StyleSheet, View, Text, Image, Button } from 'react-native'; // เพิ่ม Image มาด้วย
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function DetailScreen({ route }) {
  // รับค่า classValue ที่ส่งมาจากหน้า HomeScreen
  const { classValue } = route.params;

  // ตัวอย่างการแสดงผลตามค่า classValue
  let detailText,detailText2,detailText3,detailText4;
  let imageSource;
  
  if (classValue === 1) {
    detailText = 'รายละเอียดของ Advanced Research Group Co., Ltd';
    imageSource = require("../assets/ar_map.png");
    detailText2 = '27 14 ซอย เจริญนคร Khlong Ton Sai,\n Khlong San, Bangkok 10600';
    detailText3 = '"บริษัท กลุ่มแอดวานซ์ รีเสิร์ช จำกัด และบริษัทในเครือ \nหรือ "กลุ่มเออาร์" เป็นกลุ่มบริษัทชั้นนำของไทย \nที่ให้บริการด้านข้อมูล ข่าวสาร และความรู้ (Knowledge) \nรวมถึงบริการอื่น ๆ ที่เกี่ยวข้องด้วยเทคโนโลยีสารสนเทศ\nอันทันสมัย และครบวงจร เพื่อช่วยเสริมสร้างศักยภาพ\nให้บุคลากร หน่วยงาน และองค์กรต่าง ๆ ในการตัดสินใจ\nทางธุรกิจ ตลอดจนการวิเคราะห์ และบริหารฐานข้อมูล\nอันทรงคุณค่าให้เกิดประโยชน์สูงสุดต่อองค์กร"';
    detailText4 = '• .Net Developer (Level Staff-Senior) \n • Backend Developer	\n • 	Mobile Developer \n • PHP Developer ( ARiP) \n • System Engineer';
    // <View style={styles.container}>
    //   <View style={styles.box11}>
    //       <View style={styles.box2}>
    //       <Image
    //       source={require("../assets/สกรีนช็อต 2024-03-31 140149.png")}
    //       style={{ width: 150, height: 97, marginTop: 22 }}
    //     />
    //       </View>
    //   </View>
    // </View>
  } else if (classValue === 2) {
    detailText = 'รายละเอียดของ Gofive Company Limited';
  } 
  else if (classValue === 3) {
    detailText = 'รายละเอียดของ I&I Group Public Company Limited(ii)';
  } 
  else if (classValue === 4) {
    detailText = 'รายละเอียดของ Double M Technology Management ';
  } 
  else if (classValue === 5) {
    detailText = 'รายละเอียดของ Infinite Technology Co., Ltd';
  } 
  else {
    // กรณีที่ไม่ใช่ classValue 1 หรือ 2
    detailText = 'รายละเอียดอื่น ๆ';
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.container}>
      <View style={styles.box11}>
        <Text style={styles.tex1}>{detailText}</Text>
            <View style={styles.box2}>
              <Image source={imageSource} style={{ width: 360, height: 200, marginTop: 0 ,borderRadius: 10,}} />
            </View>
            {/* <FontAwesome5 name="map-pin" size={24} color="black" style={{  marginTop: 20 ,marginLeft: 15,}}/> */}
            <View style={styles.box22}>
              <MaterialCommunityIcons name="map-marker-radius" size={30} color="black" style={{  marginTop: 15 ,marginLeft: 10,}}/>
              <Text style={styles.tex2}>{detailText2}</Text>
            </View>
            <View style={styles.box222}>
              <Text style={styles.tex22}>{detailText3}</Text>
              <Text style={styles.tex22}>{detailText4}</Text>
            </View>
            
            <View style={styles.box3}>
              <AntDesign name="like2" size={30} color="#6a5acd" style={{  marginTop: 15 ,marginLeft: 25,}} />
              {/* <FontAwesome5 name="comment" size={30} color="black" style={{  marginTop: 15 ,marginLeft: 25,}}/> */}
              <FontAwesome name="comment-o" size={30} color="#6a5acd" style={{  marginTop: 15 ,marginLeft: 50,}}/>
              <FontAwesome name="star" size={30} color="#6a5acd" style={{  marginTop: 15 ,marginLeft: 50,}}/>
              {/* <Button>สมัครเลยตอนนี้!</Button> */}
              <View style={styles.box4}>
                <Text style={{  marginLeft: 10,color: "#ffffff", fontSize: 13, fontWeight: "bold",}}>สมัครเลยตอนนี้!</Text>
              </View>
              
            </View>
            
            
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  tex1: {
    marginTop: 25,
    marginLeft: 25,
    // fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    justifyContent: 'center',
  },
  tex2: {
    marginTop: 13,
    marginLeft: 30,
    fontSize: 14,
    fontWeight: "normal",
    color: "#000000",
  },
  tex22: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: "normal",
    color: "#000000",
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
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
    width: 390,
    height: 725,
    borderRadius: 20,
    // justifyContent: "center",
    // alignItems: 'center',
    flexDirection: "column",
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
    backgroundColor: "blue",
    marginLeft: 15,
    marginRight: 15,
    width: 360,
    height: 200,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  box22: {
    backgroundColor: "#ffffff",
    marginLeft: 15,
    marginRight: 15,
    width: 360,
    height: 50,
    marginTop: 18,
    
    // alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  box222: {
    backgroundColor: "#dcdcdc",
    marginLeft: 15,
    marginRight: 15,
    width: 360,
    height: 300,
    marginTop: 30,
    flexDirection: "column",
    // alignItems: "center",
    borderRadius: 10,
    // flexDirection: "row",
  },
  box3: {
    backgroundColor: "#ffffff",
    width: 135,
    height: 50,
    marginLeft: 10,
    // justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
  },
  box4: {
    backgroundColor: "black",
    width: 120,
    height: 40,
    marginLeft: 30,
    marginTop: 8,
    // justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: "row",
  },
});
