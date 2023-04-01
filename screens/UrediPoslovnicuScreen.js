import {View,Text} from "react-native";
import { useSelector } from "react-redux";
import FormaPoslovnica from "../components/FormaPoslovnica";

const UrediPoslovnicuScreen=({route,navigation})=>{
    //Ovo nam je ID kojeg smo proslijedili kao 2. parametar funkciji navigate, 
    const {id_poslovnice}=route.params;
    //Pronašli smo našu poslovnicu iz STORE-a kao global state management-a, 
    const poslovnica = useSelector(state=>state.poslovnica.poslovnice.find(x=>x.id===id_poslovnice))

    return(
        //*Automatski sada imamo sva polja forme, a bptun nam je preimenovan u UREDI, umjesto Uredi poslovnicu*/
       <FormaPoslovnica poslovnica = {poslovnica}/> 
    )
}

export default UrediPoslovnicuScreen;