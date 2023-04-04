import { Text, StyleSheet } from "react-native";
import { BOJA } from "../konstante";

const TekstLabel=({children})=>{
    return(<Text style={StyleSheet.naslov}>
        {children}
    </Text>)
}

export default TekstLabel;

const styles=StyleSheet.create({
    naslov:{
        fontSize:14,
        color:BOJA.LABEL_TEKST,
        marginBottom:5
    },
})