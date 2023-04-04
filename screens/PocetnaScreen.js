import {View,Text} from "react-native";
import { useSelector } from "react-redux";
import Screen from "../components/Screen";
import Okvir from "../components/Okvir";
import TekstNaslov from "../components/TekstNaslov";

const PocetnaScreen=({route, navigation})=>{
    
    //Zanima nas ukupan broj poslovnica
    const brojPoslovnica=useSelector(state=>state.poslovnica.poslovnice.length)
    
    return(<Screen>
        <Okvir>
            <TekstNaslov>Statistički podaci svih poslovnica make-up proizvoda</TekstNaslov>
            {/*Želimo ispisati ukupan broj poslovnica*/}
            <View>
                <Text>Broj poslovnica: {brojPoslovnica}</Text>
            </View>
        </Okvir>
    </Screen>)
}

export default PocetnaScreen;