import { View,Text } from "react-native";
import  FormaPoslovnica  from "../components/FormaPoslovnica";

const OtvoriPoslovnicuScreen=()=>{
    return(<View>
        <Text>Korisnik ima mogućnost otvoriti novu poslovnicu trgovina make-up proizvoda</Text>
        {/*Nemamo nikakav prop poslovnica jer dodajemo novu poslovnicu, a nije opcija EDIT poslovnice*/}
        <FormaPoslovnica />
    </View>)
}

export default OtvoriPoslovnicuScreen;