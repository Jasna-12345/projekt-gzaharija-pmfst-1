import {View,Text} from "react-native";
import FormaArtikal from "../components/FormaArtikal";
import Screen from "../components/Screen";
import Okvir from "../components/Okvir";

const NaruciArtikalScreen=()=>{
    return(<Screen>
        <Okvir>
            {/*<Text>Korisnik ima mogućnost narudžbe željenih artikala(make-up proizvoda)</Text>*/}
            <FormaArtikal />
        </Okvir>
    </Screen>)
}

export default NaruciArtikalScreen;