import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text} from "react-native";
import { headerOpcije } from "../components/headerOpcije";
import PretraziArtikleScreen from "./PretraziArtikleScreen";
import ProdajaArtiklaScreen from "./ProdajaArtiklaScreen";

const Stack=createNativeStackNavigator();

const TabPretraziArtikle=({route,navigation})=>{
    return(
    <Stack.Navigator screenOptions={headerOpcije}>
        <Stack.Screen name="PretraziArtikle" component={PretraziArtikleScreen} options={{title: "Pretraži Artikle"}}/>
        <Stack.Screen name="ProdajaArtikla" component={ProdajaArtiklaScreen} options={{title: "Prodaja Artikla"}}/>
    </Stack.Navigator>)
}

export default TabPretraziArtikle;
