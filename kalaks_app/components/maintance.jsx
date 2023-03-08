import { View, Text} from 'react-native'
import {Card} from 'react-native-paper';
import {ScrollView , StyleSheet} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';


import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Schools() {
  let baseUrl = `http://${myIP}:5000/maintains`;
  let [maintains, setmaintains] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data);
        setmaintains(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView  style={styles.scrollView}>
      <Text  style={styles.heading}>Maintenance Centers</Text>

  {
    maintains.map(e=>
      <Card key={e._id} style={styles.card}>
      <Card.Cover source={{ uri :`http://${myIP}:5000/${e?.image}`}} />
      <Card.Content style={styles.content}>
        <Text variant="titleLarge" style={styles.h}>{e.name}</Text>
        </Card.Content>
        <Card.Content style={styles.content}>
        <Text><FontAwesome name="phone" size={18} color="orange" />  0{e.phone}</Text>
        </Card.Content >
        <Card.Content style={styles.content}>
        <Text><Ionicons name="location-sharp" size={18} color="orange" /> {e.location}</Text>
        </Card.Content>
  </Card>)
  }
  </ScrollView>
  </View>
  );
};

// locations
//Eastern mainland next to Al-Rehab Hospital,Shebin Al-Kom.
//Shubra Zengi,El-Bagour.
//Bandit of Al-Hurriya Road with Mahmoud Sibawayh Street,Quesna.

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    margin:5,
    padding:20,
  },
  h:{
    fontWeight:'bold',

  },
  heading:{
    color:'#333' , 
    fontSize:30 , 
    fontWeight:'bold' , 
    textAlign:'center',
    backgroundColor:'#fff',
    margin:10,
  },
  card: {
    margin:8,
    padding:5,
    borderWidth: 1,
    borderColor: "orange",
  },
  content: {
    margin:3,
  },
 
});



