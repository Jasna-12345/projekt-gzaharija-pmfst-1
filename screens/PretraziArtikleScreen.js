import {View,Text,Button} from "react-native";


const PretraziArtikleScreen=({route,navigation})=>{
    return(<View>
        <Text>Korisnik ima mogućnost pretrage artikala(make-up proizvoda)</Text>
        <Button onPress={()=>navigation.navigate('ProdajaArtikla')} title="Prodaj artikal"></Button>
    </View>)
}

export default PretraziArtikleScreen;