// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.style1}>
//         <Button title='Save'></Button>
//         <Button title='Save'></Button>
//       </View>

//       <View style={styles.style2}>
//         <Image
//           source={{ uri: 'https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg' }}
//           style={{ width: 200, height: 200 }}
//         /> 
//         {/* //dong the ngay sau image */}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',

//   },
//   style1: {
//     flex: 1,
//     backgroundColor: 'red',
//     color: 'white',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     flexDirection: 'row',

//   },
//   style2: {
//     flex: 6,
//     backgroundColor: 'green',
//     color: 'white',
//     alignItems: 'center',
//     justifyContent: 'space-around',

//   }

// });

//////////////////////////////////////////////////////////////////////////////
//FirstScreen

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.circle} />
//       <Text style={styles.title}>GROW YOUR BUSINESS</Text>
//       <Text style={styles.description}>
//         We will help you to grow your business using online server
//       </Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={[styles.button, styles.loginButton]}>
//           <Text style={styles.buttonText}>LOGIN</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.signupButton]}>
//           <Text style={styles.buttonText}>SIGNUP</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#4bc9ff'
//   },
//   circle: {
//     width: 140,
//     height: 140,
//     borderRadius: 100,
//     borderColor: '#000000', // Thêm thuộc tính borderColor và đặt giá trị là màu đen (#000000)
//     borderWidth: 15

//   },
//   title: {
//     width: 189,
//     height: 58,
//     fontSize: 25,
//     lineHeight: 29.3,
//     textAlign: 'center',
//     fontWeight: 700,
//     marginTop:50,
//     color: '#000000',
//   },
//   description: {
//     width: 302,
//     height: 36,
//     fontSize: 15,
//     lineHeight: 18,
//     textAlign: 'center',
//     fontWeight: 700,
//     marginTop: 50,
//     textAlign: 'center',
//     color: '#000000',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginTop: 50,
   
//   },
//   button: {
//     width: 58,
//     height: 23,
//     fontSize: 20,
//     lineHeight: 23.44,
//     textAlign: 'center',
//     fontWeight: 700,
//     color: '#000000',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   loginButton: {
//     marginLeft:15,
//     width: 119,
//     height: 48,
//     backgroundColor: '#E3C000',
//   },
//   signupButton: {
//     marginRight:15,
//     width: 119,
//     height: 48,
//     backgroundColor: '#E3C000',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
// });

////////////////////////////////////////////////////////////////
//1a
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.circle} />
//       <Text style={styles.title}>GROW YOUR BUSINESS</Text>
//       <Text style={styles.description}>
//         We will help you to grow your business using online server
//       </Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={[styles.button, styles.loginButton]}>
//           <Text style={styles.buttonText}>LOGIN</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.signupButton]}>
//           <Text style={styles.buttonText}>SIGNUP</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.question}>
//         HOW WE WORK?
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#c2edff'
//   },
//   circle: {
//     width: 140,
//     height: 140,
//     borderRadius: 100,
//     borderColor: '#000000', // Thêm thuộc tính borderColor và đặt giá trị là màu đen (#000000)
//     borderWidth: 15

//   },
//   title: {
//     width: 189,
//     height: 58,
//     fontSize: 25,
//     lineHeight: 29.3,
//     textAlign: 'center',
//     fontWeight: 700,
//     marginTop:50,
//     color: '#000000',
//   },
//   description: {
//     width: 302,
//     height: 36,
//     fontSize: 15,
//     lineHeight: 18,
//     textAlign: 'center',
//     fontWeight: 700,
//     marginTop: 50,
//     textAlign: 'center',
//     color: '#000000',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginTop: 50,
   
//   },
//   button: {
//     width: 58,
//     height: 23,
//     fontSize: 20,
//     lineHeight: 23.44,
//     textAlign: 'center',
//     fontWeight: 700,
//     color: '#000000',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   loginButton: {
//     marginLeft:5,
//     width: 119,
//     height: 48,
//     backgroundColor: '#E3C000',
//   },
//   signupButton: {
//     marginRight:5,
//     width: 119,
//     height: 48,
//     backgroundColor: '#E3C000',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
//   question: {
//     width: 302,
//     height: 53,
//     fontSize: 18,
//     lineHeight: 18,
//     textAlign: 'center',
//     fontWeight: 700,
//     marginTop: 50,
//     textAlign: 'center',
//     color: '#000000',
//   }
// });

////////////////////////////////////////////////////////////////
//1b
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng biểu tượng FontAwesome
import MailIcon from 'react-native-vector-icons/MaterialIcons'; // Sử dụng biểu tượng MaterialIconsconst App = () => {
const App = () => {  
return (
    <View style={styles.container}>
      <View style={styles.lockIconContainer}>
        <Icon name="lock" size={120} style={styles.lockIcon} />
      </View>
    <Text style={styles.title}>FORGET PASSWORD</Text>
    <Text style={styles.description}>
      Provide your account’s email for which you want to reset your password
    </Text>
    <View style={styles.inputContainer}>
    <MailIcon name="mail-outline" size={24} style={styles.mailIcon} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
      />
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>NEXT</Text>
    </TouchableOpacity>
  </View>
  );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2edff', // Nền xanh biển nhạt
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockIconContainer: {
    alignItems: 'center', // Canh chỉnh lock icon theo chiều ngang
    marginBottom: 20, // Khoảng cách giữa lock icon và các phần tử khác
  },
  lockIcon: {
    // Không cần sử dụng width và height ở đây
  },
  title: {
    width: 140,
    height: 58,
    textAlign:'center',
    fontWeight: 700,
    lineHeight: 29,
    color: 'black',
    fontSize: 25,
  },
  description: {
    width: 302,
    height: 53,
    fontWeight: 700,
    lineHeight: 17,
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    margin: 30,
  },
  inputContainer: {
    width: 305,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    paddingHorizontal: 10,
    // marginVertical: 10,
  },
  mailIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    width:38,
    height:18,
    fontWeight:400,
    fontSize:15,
    lineHeight:17,
    flex: 1,
    color: 'black',
  },
  button: {
    height:45,
    marginTop:40,
    backgroundColor: '#E3C000', // Màu vàng đậm
    paddingHorizontal: 130,
    paddingVertical: 10,
  },
  buttonText: {
    width:50,
    height:21,
    color: 'black',
    fontWeight:700,
    fontSize:18,
    lineHeight:21.09,
  },
});
export default App;

