import {View,Text,Button} from "react-native";
import ListaPoslovnica from "../components/ListaPoslovnica";
import Screen from "../components/Screen";


const PopisPoslovnicaScreen=({route,navigation})=>{
    return(<Screen>
        <ListaPoslovnica/>
    </Screen>)
}

export default PopisPoslovnicaScreen;