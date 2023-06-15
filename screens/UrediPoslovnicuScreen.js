import { useSelector } from "react-redux";
import FormaPoslovnica from "../components/FormaPoslovnica";

const UrediPoslovnicuScreen=({route,navigation})=>{
    //ID proslijeđen kao 2. parametar funkciji navigate 
    const {id_poslovnice}=route.params;
    const poslovnica = useSelector(state=>state.poslovnica.poslovnice.find(x=>x.id===id_poslovnice))

    return(
       <FormaPoslovnica poslovnica = {poslovnica}/> 
    )
}

export default UrediPoslovnicuScreen;