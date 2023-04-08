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

const PrebaciArtikalScreen=({route,navigation})=>{
    //Ovdje dolazimo putem gumba Prebaci artikal iz Liste Artikala, odnosno PregledSkladista ekrana, a
    //tamo smo vidjeli da ćemo ovdje nakon navigiranja kao parmetre dobiti {artikal,poslovnica}
    const{artikal, poslovnica}=route.params;

    const dispatch=useDispatch();
    const [kolicina, postaviKolicina]=useState(1);

    //Moramo izbaciti onu poslovnicu u kojoj se trenutno nalazimo, iz SLIDER komponente, pomoću FILTER-a
    const poslovniceZaTransfer=useSelector(state=>state.poslovnica.poslovnice.filter(x=>x.id!=poslovnica.id));
    //Ako postoje poslovniceZaTransfer, odaberemo prvu u nizu, a ako ih nema odaberemo ''
    const [idPoslovnice, postaviIdPoslovnice]=useState(poslovniceZaTransfer.length?poslovniceZaTransfer[0].id:'');
    

    const prebaciArtikal=()=>{

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