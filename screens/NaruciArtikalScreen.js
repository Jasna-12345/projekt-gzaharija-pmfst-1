import {View,Text} from "react-native";
import FormaArtikal from "../components/FormaArtikal";
import Screen from "../components/Screen";

const NaruciArtikalScreen=()=>{
    return(<Screen>
        {/*<Text>Korisnik ima mogućnost narudžbe željenih artikala(make-up proizvoda)</Text>*/}
        <FormaArtikal />
    </Screen>)
}

export default NaruciArtikalScreen;