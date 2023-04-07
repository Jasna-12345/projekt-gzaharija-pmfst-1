import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text} from "react-native";
import { headerOpcije } from "../components/headerOpcije";
import PretraziArtikleScreen from "./PretraziArtikleScreen";
import ProdajArtikalScreen from "./ProdajArtikalScreen";

const Stack=createNativeStackNavigator();

const TabPretraziArtikle=({route,navigation})=>{
    return(
    <Stack.Navigator screenOptions={headerOpcije}>
        <Stack.Screen name="PretraziArtikle" component={PretraziArtikleScreen} options={{title: "Pretraži Artikle"}}/>
        {/*13.*/}
        <Stack.Screen name="ProdajArtikal" component={ProdajArtikalScreen} options={{title: "Prodaj Artikal"}}/>
    </Stack.Navigator>)
}

export default TabPretraziArtikle;
