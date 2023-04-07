import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {View,Text} from "react-native";
import NaruciArtikalScreen from "./NaruciArtikalScreen";
import OtvoriPoslovnicuScreen from "./OtvoriPoslovnicuScreen";
import PocetnaScreen from "./PocetnaScreen";
//import PretraziArtikleScreen from "./PretraziArtikleScreen";
import TabPretraziArtikle from "./TabPretraziArtikle";
import { headerOpcije } from "../components/headerOpcije";

const Tab=createBottomTabNavigator();

const DrawerPocetnaScreen=()=>{
    return(
        //<View>
        //<Text>Početna stranica skladišta trgovina make-up proizvoda</Text>
        //</View>
        <Tab.Navigator>
            {/*Ova 3 ekrana su nam obični ekrani, dok nam je TabPrikaziArtikle stack navigator*/}
            <Tab.Screen name="TabPocetna" component={PocetnaScreen} options={{...headerOpcije,title: "Početna"}}></Tab.Screen>
            <Tab.Screen name="TabNaruciArtikal" component={NaruciArtikalScreen} options={{...headerOpcije, title: "Naruči Artikal"}} ></Tab.Screen>
            <Tab.Screen name="TabOtvoriPoslovnicu" component={OtvoriPoslovnicuScreen} options={{...headerOpcije, title: "Otvori Poslovnicu"}} ></Tab.Screen>
            {/*Trebamo sakriti header od TAB navigacije, jer nam je taj screen stack navigator i još trebamo prikazati header od stack navigatora*/}
            {/*A to cemo implementirati u screen-u TabPretraziArtikle*/}
            <Tab.Screen name="TabPrikaziArtikle" component={TabPretraziArtikle} options={{headerShown:false, title:"Prikaži artikle"}} ></Tab.Screen>
        </Tab.Navigator>
)
}

export default DrawerPocetnaScreen;