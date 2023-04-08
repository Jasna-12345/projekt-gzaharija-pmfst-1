import {View,Text} from "react-native";
import Screen from "../components/Screen";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Okvir from "../components/Okvir";
import TekstNaslov from "../components/TekstNaslov";
import PrikazPolja from "../components/PrikazPolja";
import Slider from "@react-native-community/slider";
import BotunTekst from "../components/BotunTekst";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import Artikal from "../models/Artikal";
import Poslovnica from "../models/Poslovnica";
import { poslovnicaAction } from "../stores/actions/poslovnicaAction";
import { POSLOVNICA_ACTION } from "../stores/actions/poslovnicaAction";

const PrebaciArtikalScreen=({route,navigation})=>{
    //Ovdje dolazimo putem gumba Prebaci artikal iz Liste Artikala, odnosno PregledSkladista ekrana, a
    //tamo smo vidjeli da ćemo ovdje nakon navigiranja kao parmetre dobiti {artikal,poslovnica}
    const{artikal, poslovnica}=route.params;

    //const[to_poslovnica,postaviToPoslovnica]=useState('');

    console.log("Artikal: ",artikal)
    console.log("Poslovnica: ",poslovnica)

    const dispatch=useDispatch();
    const [kolicina, postaviKolicina]=useState(1);

    //Moramo izbaciti onu poslovnicu u kojoj se trenutno nalazimo, iz SLIDER komponente, pomoću FILTER-a
    const poslovniceZaTransfer=useSelector(state=>state.poslovnica.poslovnice.filter(x=>x.id!=poslovnica.id));
    //Ako postoje poslovniceZaTransfer, odaberemo prvu u nizu, a ako ih nema odaberemo ''
    const [idPoslovnice, postaviIdPoslovnice]=useState(poslovniceZaTransfer.length?poslovniceZaTransfer[0].id:'');
    

    const prebaciArtikal=()=>{
        const [toPoslovnica, setToPoslovnica] = useState(null); 
        
         // KOLIKO ARTIKALA MI OSTAJE NA STANJU, U STORE-U?(UKUPNO NA STORE-u - količina odabrana na SLIDER-u)
         const from_kolicina = artikal.kolicina - kolicina;

         //Modificiramo artikle iz 1.poslovnice
         let from_artikli;
         //Više nema tog artikla, jer mu je količina 0 -> trebamo ga izbaciti iz liste artikala
         if(from_kolicina === 0) {
             from_artikli = poslovnica.artikli.filter(x => x.naziv !== artikal.naziv);
         }else {
            //AKO KOLIČINA ARTIKALA NA STANJU NIJE 0, pronađemo taj artikal i zamijenimo cijeli artikal
            //Pomocu konstruktora definiranog u modelima, s novom vrijednosti količine, ostali atributi ostaju isti
             from_artikli = poslovnica.artikli.map(x => {
                 if(x.naziv === artikal.naziv) {
                     return new Artikal(artikal.naziv,artikal.nabavna_cijena, artikal.prodajna_cijena, from_kolicina);
                 }else {
                     return x;
                 }
             })
         }

         //AŽURIRAMO POSLOVNICU IZ KOJE ARTIKLE PREBACUJEMO, SVI ATRIBUTI OSTAJU ISTI, OSIM LISTE ARTIKALA(from_artikli)
         const from_poslovnica = new Poslovnica(poslovnica.id, poslovnica.naziv, poslovnica.email, poslovnica.lokacija, from_artikli, poslovnica.zarada);
 
         //DODAVANJE ARTIKALA U ODABRANU POSLOVNICU
         //1. PRONAĐEMO KOJA POSLOVNICA JE ODABRANA POMOĆU PICKER-A
         const to_poslovnica = poslovniceZaTransfer.find(x => x.id === idPoslovnice);
         console.log("TO_POSLOVNICA: ",to_poslovnica)
         //2. AKO ARTIKAL POSTOJI, U POSLOVNICI ODABRANOJ POMOĆU PICKER-A, 
         if(to_poslovnica.artikli.find(x => x.naziv === artikal.naziv)) {
             // U ARTIKLIMA TE POSLOVNICE pronađi ovaj artikal kojeg prebacujemo, i DODAJ mu količinu koju mi prebacujemo iz 1.poslovnice
             to_poslovnica.artikli = to_poslovnica.artikli.map(x => {
                 if(x.naziv === artikal.naziv) {
                     return new Artikal(x.naziv, x.nabavna_cijena,
                         x.prodajna_cijena, x.kolicina + kolicina)
                 }else {
                    //Inače, samo vrati taj artikal 
                     return x;
                 }
             })
         }else {
             // AKO ARTIKAL NE POSTOJI U ODABRANOJ POSLOVNICI, dosadasnjim artiklima te poslovnice, dodaj OVAJ ARTIKAL, 
             //pomoću konstruktora ARTIKLA definiranog u modelima(sve vrijednosti atributa ostaju iste, samo je količina 
             //jednaka količini iz slider-a) 
             to_poslovnica.artikli = [...to_poslovnica.artikli, new Artikal(artikal.naziv, artikal.nabavna_cijena, artikal.prodajna_cijena, kolicina)];
         }
 
         //OTPREMI, pošalji na store POSLOVNICU od koje prebacujemo artikle, s ažuriranom LISTOM ARTIKALA
         dispatch(poslovnicaAction(POSLOVNICA_ACTION.UPDATE_POSLOVNICA, from_poslovnica));
 
         //OTPREMI, pošalji na store POSLOVNICU kojoj prebacujemo artikle, s ažuriranom LISTOM ARTIKALA
         dispatch(poslovnicaAction(POSLOVNICA_ACTION.UPDATE_POSLOVNICA, to_poslovnica));
 
         navigation.goBack();
    }

    return(<Screen>
        {/*<Text>Prebaci artikal iz jedne u drugu poslovnicu</Text>*/}
        <Okvir>
                <TekstNaslov>{artikal.naziv}</TekstNaslov>

                <PrikazPolja polja={[
                    {ime:'Nabavna cijena', vrijednost: artikal.nabavna_cijena},
                    {ime:'Prodajna cijena', vrijednost: artikal.prodajna_cijena},
                    {ime:'Količina', vrijednost: artikal.kolicina},
                    {ime:'Poslovnica', vrijednost: poslovnica.naziv},
                ]}/>
                {/*SLIDER-korisnik odabire koliko artikala prodaje*/}
                <Slider 
                value={kolicina}
                onValueChange={postaviKolicina}
                minimumValue={1}
                maximumValue={artikal.kolicina}
                step={1}/>{/*STEP - koliki nam je korak na slider-u, da nemamo float vrijednosti*/}

                {/*<View style={styles.bottomContainer}>*/}
                    <Text style={styles.sliderValue}>Količina: {kolicina}</Text>
                {/*</View>*/}   

                <Picker selectedValue={idPoslovnice} onValueChange={postaviIdPoslovnice}>
                    {poslovniceZaTransfer.map(x=><Picker.Item key={x.id} label={x.naziv} value={x.id}/>)}
                </Picker>

                <BotunTekst onPress={prebaciArtikal} style={{fontWeight: 'bold'}}>Prebaci </BotunTekst>
        </Okvir>
    </Screen>)
}

export default PrebaciArtikalScreen;

const styles = StyleSheet.create({
    bottomContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
    },
    sliderValue: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    sellButton: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white",
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 5,
    },
  });