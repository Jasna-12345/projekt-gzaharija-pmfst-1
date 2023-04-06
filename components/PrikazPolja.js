import { Text, StyleSheet, View } from "react-native";
import { BOJA } from "../konstante";

const PrikazPolja=({polja})=>{
    return(<View>
        {polja.map((polje, index)=>{
            return <View key={index}>
                <Text style={styles.naslov}>{polje.ime}: </Text>
                <Text style={styles.vrijednost}>{polje.vrijednost}</Text>
            </View>
        })}
    </View>);
}

export default PrikazPolja;

const styles=StyleSheet.create({
    naslov:{
        fontSize:16,
        color:BOJA.LABEL_TEKST,
        marginBottom:5
    },
    vrijednost:{
        fontSize:28,
        color:BOJA.LABEL_TEKST,
        fontWeight:'bold'
    },
})