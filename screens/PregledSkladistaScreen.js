import {View,Text,Button} from "react-native";
import { useSelector } from "react-redux";
import BotunTekst from "../components/BotunTekst";
import ListaArtikala from "../components/ListaArtikala";
import Screen from "../components/Screen";


const PregledSkladištaScreen=({route,navigation})=>{
    //Dohvat ID-a iz screen-a iz kojeg navigiramo ovdje(a to je komponenta ListaPoslovnica), te je id poslan na ovu
    //lokaciju kao route parmetar funkcije navigate
    const {id_poslovnice}=route.params;

    //Pronalazimo poslovnicu s tim ID-em, iz STORE-a, zato koristimo useSelectom HOOK, odnosno state objekt, tj. njegov slice poslovnica.
    const artikli=useSelector(state=>state.poslovnica.poslovnice.find(x=>x.id===id_poslovnice).artikli);//LISTA ARTIKALA
    //LISTA ARTIKALA POSLOVNICE id_poslovnica
    //Mi provjeravamo za svaku poslovnicu, jel' joj id odgovara našem dobivenom id-u, i ako JE, unutar const artikli mi imamo
    //LISTU ARTIKALA

    return(<Screen>
        {/*<Text>Pregled skladišta</Text>* --> ovo smo imali do sada*/}
        {/*<BotunTekst onPress={()=>navigation.navigate('ProdajArtikal')}>Prodaj artikal</BotunTekst>
        <BotunTekst onPress={()=>navigation.navigate('PrebaciArtikal')}>Prebaci artikal</BotunTekst>*/}

        < ListaArtikala artikli={artikli} id_poslovnice={id_poslovnice} navigation={navigation} />

    </Screen>)
}

export default PregledSkladištaScreen;