import { StyleSheet,View } from "react-native";
import { BOJA } from "../konstante";

const Screen = ({children})=>{
    return(<View style={stilovi.screen}>
            {children}
        </View>
    )
}

export default Screen;

const stilovi=StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: BOJA.POZADINA,
        padding:20
    },
})