import {View,Text} from "react-native";
import { useDispatch } from "react-redux";
import BotunTekst from "../components/BotunTekst";
import Screen from "../components/Screen";
import TekstNaslov from "../components/TekstNaslov";
import { poslovnicaAction } from "../stores/actions/poslovnicaAction";
import { POSLOVNICA_ACTION } from "../stores/actions/poslovnicaAction";

const ZatvoriPoslovnicuScreen=({route,navigation})=>{
    //Mogli smo i route.params;
    const poslovnica= route.params.poslovnica;

    const dispatch=useDispatch();

    const zatvori=()=>{
        dispatch(poslovnicaAction(POSLOVNICA_ACTION.BANKRUPTCY_POSLOVNICA,poslovnica.id))
        navigation.goBack();
    }

    const ponisti=()=>{
        navigation.goBack();
    }
    return(<Screen>
        <TekstNaslov>Želite li zatvoriti poslovnicu: "{poslovnica.naziv}"?</TekstNaslov>
        <BotunTekst onPress={zatvori}>DA</BotunTekst>
        <BotunTekst onPress={ponisti}>NE</BotunTekst>
    </Screen>)
}

export default ZatvoriPoslovnicuScreen;