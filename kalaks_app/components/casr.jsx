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

export function Casr() {
  const navigation = useNavigation();
  const linkTo = useLinkTo();
  let baseUrl = `http://${myIP}:5000/newcars`;
  let [cars, setcars] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data);
        setcars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(cars);

  return (

    <ScrollView>

    <SafeAreaView style={styles.container}>
      <View style={styles.container}> 
        <Text style={styles.texto}>Our Cars </Text>
        {cars.map((car)=>{
          return (
            <Card key={car._id} style={styles.coco}>
              <Image
                style={styles.tinyLogo}
                source={{ uri: `http://${myIP}:5000/${car?.image[0]}` }}
              />
              <Text style={styles.paragraph}>Name : {car.name}</Text>
              <Text style={styles.paragraph}>Model : {car.model}</Text>
              <Text style={styles.paragraph}> price : {car.price}</Text>

              <Button
                style={styles.button}
                onPress={() =>
                  navigation.navigate("CarDetails", {
                    price: car.price,
                    image: car.image,
                    name: car.name,
                    model: car.model,
                    transmission: car.transmission,
                    owner: car.owner?.image,
                    ownerLocation: car.owner?.location,
                    ownerFacebook: car.owner?.facebook,
                    ownername: car.owner?.name,
                    motor: car.motor,
                    color:car.color,
                    year:car.year,
                  })
                }
              >
                <Text>Details Here</Text>
              </Button>
            </Card>
          );
 })} 
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    padding: 15,
    backgroundColor: "white",
  },
  tinyLogo: {
    marginTop: 10,
    marginLeft: 15,
    width: 300,
    height: 150,
    borderWidth: 2,
    borderColor: "orange",
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
 
});