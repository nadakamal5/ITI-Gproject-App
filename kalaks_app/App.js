import * as React from "react";
import { Button, View , StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {Casr} from "./components/casr";
import Accessories from "./components/accessories";
import Schools from "./components/schools";
import Maintance from "./components/maintance";
import Login from "./components/login";
import { useNavigation } from '@react-navigation/native';
import CarDetails from "./components/carDetails";
import Home from "./components/home";
import './components/shared';



function HomeScreen({ navigation }) {
  
  return (
    <View >
    <Home></Home>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CasrScreen({ navigation }) {
  return (
    <View >
      <Casr></Casr>
    </View>
  );
}

function AccessoriesScreen({ navigation }) {
  return (
    <View >
      <Accessories ></Accessories>
    </View>
  );
}

function SchoolsScreen({ navigation }) {
  return (
    <View >
      <Schools></Schools>
    </View>
  );
}
function LoginScreen({ navigation }) {
  return (
    <View >
      <Login></Login>
    </View>
  );
}


function MaintanceScreen({ navigation }) {
  return (
    <View >
      <Maintance></Maintance>
    </View>
  );
}
function CarDetailsScreen({ navigation }) {
   return (
    <View >
      <CarDetails></CarDetails>
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="cars" component={CasrScreen} />
        <Drawer.Screen name="Accessories" component={AccessoriesScreen} />
        <Drawer.Screen name="Schools" component={SchoolsScreen} />
        <Drawer.Screen name="Maintance" component={MaintanceScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="CarDetails" component={CarDetailsScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    margin:5,
    padding:20,
    width:20
  }
  
});



