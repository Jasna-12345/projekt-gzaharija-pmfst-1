import {View,Text,Button} from "react-native";
import BotunTekst from "../components/BotunTekst";
import Screen from "../components/Screen";
import Okvir from "../components/Okvir";
import TekstNaslov from "../components/TekstNaslov";
import { poslovnicaAction } from "../stores/actions/poslovnicaAction";
import { useSelector } from "react-redux";
import PrikazPolja from "../components/PrikazPolja";


const DetaljiPoslovniceScreen=({route,navigation})=>{
    //Dohvat ID-a iz screen-a iz kojeg navigiramo ovdje, te je id poslan na ovu lokaciju kao route parmetar funkcije navigate
    const {id_poslovnice}=route.params;

    const poslovnica=useSelector(state=>state.poslovnica.poslovnice.find(x=>x.id===id_poslovnice));

    return(<Screen>
        <Okvir>
            {/*<Text>Detalji poslovnice: {id_poslovnice}</Text>*/}
            <TekstNaslov>{poslovnica.naziv}</TekstNaslov>
            {/*U dokumentaciji vidimo da nam ovdje drugi parametar služi da bismo ruti na koju idemo, proslijedili neki parametri, a mi 
            ovdje prosljeđujemo ID kao parametar. */}

            {/*Želimo izlistati sva ova polja, da nam se vide klikom na botun DETALJI POSLOVNICE*/}
            <PrikazPolja polja={[
                {ime:'Email' ,vrijednost: poslovnica.email},
                {ime:'Lokacija' ,vrijednost: poslovnica.lokacija},
                {ime:'Broj artikala' ,vrijednost: poslovnica.artikli.length},
                {ime:'Zarada' ,vrijednost: poslovnica.zarada},
            ]}/>
            <BotunTekst onPress={()=>navigation.navigate('UrediPoslovnicu',{id_poslovnice})}>Uredi poslovnicu</BotunTekst>
        </Okvir>
    </Screen>)
}

export default DetaljiPoslovniceScreen;