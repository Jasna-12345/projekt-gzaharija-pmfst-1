import { Text, StyleSheet } from "react-native";
import { BOJA } from "../konstante";


const TekstNaslov=({children})=>{
    return(<Text style={styles.naslov}>
        {children}
    </Text>
)}

export default TekstNaslov;

const styles=StyleSheet.create({
    naslov:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        color:BOJA.NASLOV_TEKST,
        marginBottom:30,
    },
})