import {View,Text} from "react-native";
import { useSelector } from "react-redux";

const PocetnaScreen=()=>{
    
    //Zanima nas ukupan broj poslovnica
    const brojPoslovnica=useSelector(state=>state.poslovnica.poslovnice.length)
    
    return(<View>
        <Text>Statistički podaci svih poslovnica make-up proizvoda</Text>
        {/*Želimo ispisati ukupan broj poslovnica*/}
        <View>
            <Text>Broj poslovnica: {brojPoslovnica}</Text>
        </View>
    </View>)
}

export default PocetnaScreen;