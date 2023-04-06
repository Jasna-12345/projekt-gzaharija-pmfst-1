import {View,Text,Button} from "react-native";
import BotunTekst from "../components/BotunTekst";
import Screen from "../components/Screen";
import Okvir from "../components/Okvir";


const DetaljiPoslovniceScreen=({route,navigation})=>{
    //Dohvat ID-a iz screen-a iz kojeg navigiramo ovdje, te je id poslan na ovu lokaciju kao route parmetar funkcije navigate
    const {id_poslovnice}=route.params;

    return(<Screen>
        <Okvir>
            <Text>Detalji poslovnice: {id_poslovnice}</Text>
            {/*U dokumentaciji vidimo da nam ovdje drugi parametar služi da bismo ruti na koju idemo, proslijedili neki parametri, a mi 
            ovdje prosljeđujemo ID kao parametar. */}
            <BotunTekst onPress={()=>navigation.navigate('UrediPoslovnicu',{id_poslovnice})}>Uredi poslovnicu</BotunTekst>
        </Okvir>
    </Screen>)
}

export default DetaljiPoslovniceScreen;