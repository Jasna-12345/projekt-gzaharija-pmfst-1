import { View,StyleSheet } from "react-native";
import { BOJA } from "../konstante";


const Okvir=({children})=>{
    return <View style={styles.okvir}>
        {children}
    </View>
}

export default Okvir;

const styles=StyleSheet.create({
    okvir:{
        borderRadius:10,
        borderWidth:4,
        borderColor:'#000000',//#7f1734
        padding:10,
        marginBottom:10,
        backgroundColor: BOJA.OKVIR
    },
})