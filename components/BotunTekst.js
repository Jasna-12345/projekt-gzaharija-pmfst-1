import { StyleSheet,Text, Touchable, TouchableOpacity } from "react-native";
import { BOJA } from "../konstante";

const BotunTekst=(props)=>{
    return <TouchableOpacity style={stilovi.botun} onPress={props.onPress}>
        {/*Ovo nam se odnosi na bilo kakav tekst koji stoji na botunu*/}
        <Text style={stilovi.tekst}>{props.children}</Text>
    </TouchableOpacity>
}

export default BotunTekst;

const stilovi=StyleSheet.create({
    botun:{
        margin: 5,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:BOJA.BOTUN_POZADINA,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#000000',
        padding:3,
    },
    tekst:{
        color:BOJA.BOTUN_TEKST,
        fontSize:20,
    },
})