//biblioteka koja nam omogućuje korištenje navigacije
import "react-native-gesture-handler";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerPocetnaScreen from "./screens/DrawerPocetnaScreen.js"
import DrawerPoslovniceScreen from "./screens/DrawerPoslovniceScreen";
import { BaseButton } from "react-native-gesture-handler";

const Drawer=createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*Želimo sakriti header drawer navigacije*/}
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="DrawerPocetna" component={DrawerPocetnaScreen}/>
        <Drawer.Screen name="DrawerPoslovnice" component={DrawerPoslovniceScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
