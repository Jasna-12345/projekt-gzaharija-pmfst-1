import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {View,Text} from "react-native";
import NaruciArtikalScreen from "./NaruciArtikalScreen";
import OtvoriPoslovnicuScreen from "./OtvoriPoslovnicuScreen";
import PocetnaScreen from "./PocetnaScreen";
//import PretraziArtikleScreen from "./PretraziArtikleScreen";
import TabPretraziArtikle from "./TabPretraziArtikle";

const Tab=createBottomTabNavigator();

const DrawerPocetnaScreen=({route, navigation})=>{
    return(
        //<View>
        //<Text>Početna stranica skladišta trgovina make-up proizvoda</Text>
        //</View>
        <Tab.Navigator>
            <Tab.Screen name="TabPocetna" component={PocetnaScreen}  ></Tab.Screen>
            <Tab.Screen name="TabNaruciArtikal" component={NaruciArtikalScreen}  ></Tab.Screen>
            <Tab.Screen name="TabOtvoriPoslovnicu" component={OtvoriPoslovnicuScreen}  ></Tab.Screen>
            <Tab.Screen name="TabPrikaziArtikle" component={TabPretraziArtikle}  ></Tab.Screen>
        </Tab.Navigator>
)
}

export default DrawerPocetnaScreen;