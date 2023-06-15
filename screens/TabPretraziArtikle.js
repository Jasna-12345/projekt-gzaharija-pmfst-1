import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerOpcije } from "../components/headerOpcije";
import PretraziArtikleScreen from "./PretraziArtikleScreen";
import ProdajArtikalScreen from "./ProdajArtikalScreen";

const Stack=createNativeStackNavigator();

const TabPretraziArtikle=({route,navigation})=>{
    return(
    <Stack.Navigator screenOptions={headerOpcije}>
        <Stack.Screen name="PretraziArtikle" component={PretraziArtikleScreen} options={{title: "Pretraži Artikle"}}/>
        <Stack.Screen name="ProdajArtikal" component={ProdajArtikalScreen} options={{title: "Prodaj Artikal"}}/>
    </Stack.Navigator>)
}

export default TabPretraziArtikle;
