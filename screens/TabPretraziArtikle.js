import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text} from "react-native";
import PretraziArtikleScreen from "./PretraziArtikleScreen";
import ProdajaArtiklaScreen from "./ProdajaArtiklaScreen";

const Stack=createNativeStackNavigator();

const TabPretraziArtikle=({route,navigation})=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="PretraziArtikle" component={PretraziArtikleScreen}/>
        <Stack.Screen name="ProdajaArtikla" component={ProdajaArtiklaScreen}/>
    </Stack.Navigator>)
}

export default TabPretraziArtikle;