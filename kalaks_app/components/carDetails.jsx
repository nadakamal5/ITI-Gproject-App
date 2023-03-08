import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image,TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
//import Card
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card } from "react-native-paper";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import {Route, useNavigate} from 'react-router-dom';
import { useRoute } from '@react-navigation/native';
import { useLinkTo } from '@react-navigation/native';
import { Linking } from 'react-native';




export default function CarDetails() {
  const navigation = useNavigation();
  const linkTo = useLinkTo();
  const route = useRoute();
  const url =`${route.params.ownerLocation}`;

  return (
    <View>
       
      <Card style={styles.card}>
    <Card.Cover    style={styles.tinyLogoo} source={{ uri :`http://${myIP}:5000/${route.params.image[0]}`}} />
    <Card.Content>
    <Text  style={styles.paragraph}>carDetails</Text>
      <Text style={styles.paragraph}>Price : {route.params.price} </Text>
      <Text style={styles.paragraph}>Name : {route.params.name} </Text>
      <Text style={styles.paragraph}>Model : {route.params.model} </Text>
      <Text style={styles.paragraph}>Transimission : {route.params.transmission} </Text>
      <Text style={styles.paragraph}>Motor : {route.params.motor} </Text>
      <Text style={styles.paragraph}>Color : {route.params.color} </Text>
      <Text style={styles.paragraph}>Year : {route.params.year} </Text>
    </Card.Content>
    <Card.Actions>
    <Text style={styles.paragraph}>Shop-Name : {route.params.ownername} </Text>
    <Card.Cover 
    style={styles.tinyLogo} source={{ uri :`http://${myIP}:5000/${route.params.owner[0]}`}}/>
    </Card.Actions>
    <Text style={styles.btn}
      onPress={() => Linking.openURL("https://goo.gl/maps/u349UAKMrYNa74W86")}>
LCATION shop  
</Text>  
</Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    padding: 15,
    backgroundColor: "white",
  },
  tinyLogoo: {
    marginTop: 10,
    marginLeft: 15,
    width: 350,
    height: 150,
    borderWidth: 2,
    borderColor: "orange",
  },
  tinyLogo: {
    marginLeft: 15,
    width: 80,
    height: 50,
    borderWidth: 1,
    borderColor: "orange",
  },
  btn:{
    textAlign:'center',
    backgroundColor: "white",
    color: "orange",
    borderColor: "orange",
    borderWidth: 1,
    borderRadius:15,
    padding: 5,
    marginLeft:135,
    margin:2,
    width: 100,
    textAlign: "center",
    fontSize:14,
   },
  paragraph: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  texto: {
    color: "black",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  coco: {
    paddingBottom: 10,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: "orange",
  },
  button:{
    position:"relative",
    left: 80,
    width: 185,
    borderWidth: 3,
    borderColor: "orange",
    backgroundColor:"orange"
  },
  heading:{
    color:'#333' , 
    fontSize:30 , 
    fontWeight:'bold' , 
    textAlign:'center',
    backgroundColor:'#fff',
    margin:20,
  },
  card: {
    margin:5,
  },
  h:{
    fontWeight:'bold',
  }
});