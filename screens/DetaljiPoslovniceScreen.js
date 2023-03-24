import {View,Text,Button} from "react-native";


const DetaljiPoslovniceScreen=({route,navigation})=>{
    const {id_poslovnice}=route.params;

    return(<View>
        <Text>Detalji poslovnice {id_poslovnice}</Text>
        <Button onPress={()=>navigation.navigate('UrediPoslovnicu')} title="Uredi poslovnicu"></Button>
    </View>)
}

export default DetaljiPoslovniceScreen;