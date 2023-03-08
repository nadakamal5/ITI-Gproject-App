import axios from "axios";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { set } from "react-native-reanimated";
import { json } from "react-router-dom";
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
  const baseURL=`http://${myIP}:5000/users/login`
  const [emailData, setemailData] = useState("");
  const [passwordData, setpasswordData] = useState("");
  const [error, seterror] = useState("");
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputView}>


        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#a9a9a9"
          onChangeText={(email) => setemailData(email)}
        >
          
        </TextInput>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#a9a9a9"
          secureTextEntry={true}
          onChangeText={(password) => setpasswordData(password)}
        />
      </TouchableOpacity>
      <Text>{error}</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={()=>{
        const userData={
          email:emailData,
          password:passwordData
        }
        axios.post(baseURL,userData).then(res=>{
          if(res.data.error){
            console.log(res.data);
          seterror(res.data.error);
          }else{
            seterror("")
            console.log("Login sucesss")
            navigation.navigate('Home')

          }
        }).catch(err=>{console.log(err);})
        // const x=JSON.parse(userData)
        console.log(userData.email)
      }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: "80%",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop:20,
    justifyContent: "center",
    padding: 20,
    borderWidth:1.5,
    borderColor: "orange",
  },
  TextInput: {
    height: 50,
    color: "#000",
    fontSize: 18,
  },
  forgotPassword: {
    width: "80%",
    backgroundColor: "#0077ff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    },
  loginBtn: {
    width: "80%",
    backgroundColor: "#ff9a3c",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
  },
  forgotText: {
    color: "#fff",
    fontSize: 18,
  },
});







