import { View,Text } from "react-native";
import  FormaPoslovnica  from "../components/FormaPoslovnica";
import Okvir from "../components/Okvir";
import Screen from "../components/Screen";

const OtvoriPoslovnicuScreen=()=>{
    return(<Screen>
        {/**/}
        <Text style={{margin:20, fontSize:16, fontFamily: 'Roboto', fontWeight:"bold"}}>Želite otvoriti novu poslovnicu trgovina make-up proizvoda?</Text>
        {/*Nemamo nikakav prop poslovnica jer dodajemo novu poslovnicu, a nije opcija EDIT poslovnice*/}
        <Okvir>
          <FormaPoslovnica />
        </Okvir>
    </Screen>)
}

export default OtvoriPoslovnicuScreen;