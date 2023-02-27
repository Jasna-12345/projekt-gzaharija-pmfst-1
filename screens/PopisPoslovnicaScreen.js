import {View,Text,Button} from "react-native";


const PopisPoslovnicaScreen=({route,navigation})=>{
    return(<View>
        <Text>Popis poslovnica</Text>
        <Button onPress={()=>navigation.navigate('DetaljiPoslovnice')} title="Detalji poslovnice"></Button>
        <Button onPress={()=>navigation.navigate('PregledSkladista')} title="Pregled skladišta"></Button>
        <Button onPress={()=>navigation.navigate('ZatvoriPoslovnicu')} title="Zatvori poslovnicu"></Button>
    </View>)
}

export default PopisPoslovnicaScreen;