//biblioteka koja nam omogućuje korištenje navigacije
import "react-native-gesture-handler";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerPocetnaScreen from "./screens/DrawerPocetnaScreen.js"
import DrawerPoslovniceScreen from "./screens/DrawerPoslovniceScreen";
import { BaseButton } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./stores/store";


const Drawer=createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/*Želimo sakriti header drawer navigacije*/}
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="DrawerPocetna" component={DrawerPocetnaScreen} options={{title: "Početna"}}/>
          <Drawer.Screen name="DrawerPoslovnice" component={DrawerPoslovniceScreen} options={{title: "Poslovnice"}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
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
