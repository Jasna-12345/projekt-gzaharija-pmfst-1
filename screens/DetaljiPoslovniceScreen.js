import BotunTekst from "../components/BotunTekst";
import Screen from "../components/Screen";
import Okvir from "../components/Okvir";
import TekstNaslov from "../components/TekstNaslov";
import { useSelector } from "react-redux";
import PrikazPolja from "../components/PrikazPolja";


const DetaljiPoslovniceScreen=({route,navigation})=>{
    const {id_poslovnice}=route.params;

    const poslovnica=useSelector(state=>state.poslovnica.poslovnice.find(x=>x.id===id_poslovnice));

    return(<Screen>
        <Okvir>
            <TekstNaslov>{poslovnica.naziv}</TekstNaslov>
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