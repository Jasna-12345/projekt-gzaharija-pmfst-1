import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text} from "react-native";
import DetaljiPoslovniceScreen from "./DetaljiPoslovniceScreen";
import PopisPoslovnicaScreen from "./PopisPoslovnicaScreen";
import PregledSkladistaScreen from "./PregledSkladistaScreen";
import ProdajArtikalScreen from "./ProdajArtikalScreen";
import UrediPoslovnicuScreen from "./UrediPoslovnicuScreen";
import ZatvoriPoslovnicuScreen from "./ZatvoriPoslovnicuScreen";
import PrebaciArtikalScreen from "./PrebaciArtikalScreen";
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
        {/*5. options={{title: "Popis Poslovnica"}} --> DODALI SMO SVE NASLOVE, DA NAM OKEJ IZGLEDAJU*/}
        <Stack.Screen name="PopisPoslovnica" component={PopisPoslovnicaScreen} options={{title: "Popis Poslovnica"}}/>
        <Stack.Screen name="DetaljiPoslovnice" component={DetaljiPoslovniceScreen} options={{title: "Detalji Poslovnice"}}/>
        <Stack.Screen name="UrediPoslovnicu" component={UrediPoslovnicuScreen} options={{title: "Uredi Poslovnicu"}}/>
        <Stack.Screen name="PregledSkladista" component={PregledSkladistaScreen} options={{title: "Pregled Skladišta"}}/>
        <Stack.Screen name="ProdajArtikal" component={ProdajArtikalScreen} options={{title: "Prodaj Artikal"}}/>
        <Stack.Screen name="PrebaciArtikal" component={PrebaciArtikalScreen} options={{title: "Prebaci Artikal"}}/>
        <Stack.Screen name="ZatvoriPoslovnicu" component={ZatvoriPoslovnicuScreen} options={{title: "Zatvori Poslovnicu"}}/>
    </Stack.Navigator>
        )
}

export default DrawerPoslovniceScreen;