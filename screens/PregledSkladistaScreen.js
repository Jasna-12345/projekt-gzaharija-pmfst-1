import {View,Text,Button} from "react-native";


const PregledSkladištaScreen=({route,navigation})=>{
    return(<View>
        <Text>Pregled skladišta</Text>
        <Button onPress={()=>navigation.navigate('ProdajArtikal')} title="Prodaj artikal"></Button>
        <Button onPress={()=>navigation.navigate('PrebaciArtikal')} title="Prebaci artikal"></Button>
    </View>)
}

export default PregledSkladištaScreen;