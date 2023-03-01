import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text} from "react-native";
import DetaljiPoslovniceScreen from "./DetaljiPoslovniceScreen";
import PopisPoslovnicaScreen from "./PopisPoslovnicaScreen";
import PrebaciArtikalScreen from "./PrebaciArtikalScreen";
import PregledSkladistaScreen from "./PregledSkladistaScreen";
import ProdajArtikalScreen from "./ProdajArtikalScreen";
import UrediPoslovnicuScreen from "./UrediPoslovnicuScreen";
import ZatvoriPoslovnicuScreen from "./ZatvoriPoslovnicuScreen";
import { headerOpcije } from "../components/headerOpcije";

//Poslovnice - nam je stack navigator, koji nas vodi na ekrane
//        1. Popis poslovnica
    //        2. Detalji poslovnice
    //           2.1 Uredi poslovnicu
    //        3. Pregled Skladišta
    //           3.1 Prodaj artikal
    //           3.2 Prebaci artikal
    //        4. Zatvori poslovnicu (DA/NE), ako je DA, vodi nas na Pocetnu
const Stack=createNativeStackNavigator();

const DrawerPoslovniceScreen=()=>{
    return(
    <Stack.Navigator screenOptions={headerOpcije}>
        <Stack.Screen name="PopisPoslovnica" component={PopisPoslovnicaScreen}/>
        <Stack.Screen name="DetaljiPoslovnice" component={DetaljiPoslovniceScreen}/>
        <Stack.Screen name="UrediPoslovnicu" component={UrediPoslovnicuScreen}/>
        <Stack.Screen name="PregledSkladista" component={PregledSkladistaScreen}/>
        <Stack.Screen name="ProdajArtikal" component={ProdajArtikalScreen}/>
        <Stack.Screen name="PrebaciArtikal" component={PrebaciArtikalScreen}/>
        <Stack.Screen name="ZatvoriPoslovnicu" component={ZatvoriPoslovnicuScreen}/>
    </Stack.Navigator>
        )
}

export default DrawerPoslovniceScreen;