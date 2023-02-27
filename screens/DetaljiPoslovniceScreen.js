import {View,Text,Button} from "react-native";


const DetaljiPoslovniceScreen=({route,navigation})=>{
    return(<View>
        <Text>Detalji poslovnice</Text>
        <Button onPress={()=>navigation.navigate('UrediPoslovnicu')} title="Uredi poslovnicu"></Button>
    </View>)
}

export default DetaljiPoslovniceScreen;