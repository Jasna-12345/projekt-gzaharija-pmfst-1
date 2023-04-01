import {View,Text,Button} from "react-native";


const DetaljiPoslovniceScreen=({route,navigation})=>{
    const {id_poslovnice}=route.params;

    return(<View>
        <Text>Detalji poslovnice: {id_poslovnice}</Text>
        {/*U dokumentaciji vidimo da nam ovdje drugi parametar služi da bismo ruti na koju idemo, proslijedili neki parametri, a mi 
           ovdje prosljeđujemo ID kao parametar. */}
        <Button onPress={()=>navigation.navigate('UrediPoslovnicu',{id_poslovnice})} title="Uredi poslovnicu"></Button>
    </View>)
}

export default DetaljiPoslovniceScreen;