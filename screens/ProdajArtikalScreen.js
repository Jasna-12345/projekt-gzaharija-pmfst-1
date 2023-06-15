import {View,Text} from "react-native";
import Screen from "../components/Screen";
import Okvir from "../components/Okvir";
import TekstNaslov from "../components/TekstNaslov";
import PrikazPolja from "../components/PrikazPolja";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet } from "react-native";
import BotunTekst from "../components/BotunTekst";
import Artikal from "../models/Artikal";
import Poslovnica from "../models/Poslovnica";
import { useDispatch } from "react-redux";
import { POSLOVNICA_ACTION } from "../stores/actions/poslovnicaAction";
import { poslovnicaAction } from "../stores/actions/poslovnicaAction";

const ProdajArtikalScreen=({route, navigation})=>{
    const{artikal,poslovnica}=route.params;

    const [kolicina, postaviKolicina]=useState(1); //Količina koju smo prodali

    const dispatch=useDispatch();
    const prodajArtikal=()=>{
        const nova_zarada=poslovnica.zarada+kolicina*(artikal.prodajna_cijena-artikal.nabavna_cijena);
        const nova_kolicina=artikal.kolicina-kolicina;

        //UPDATE LISTE ARTIKALA
        let novi_artikli;
        //Ako smo sve artikle tipa Bronzer prodali
        if(nova_kolicina==0){
            //Izbacujemo ga iz liste artikala poslovnice
            novi_artikli=poslovnica.artikli.filter(x=>x.naziv!=artikal.naziv);
        }else{
            //Ako nismo prodali sve artikle 
            novi_artikli=poslovnica.artikli.map(x=>{
                //Ako smo u listi artikala pronasli taj artikal, vrati novi koji ima UPDATE KOLICINE 
                if(x.naziv ===artikal.naziv){
                    return new Artikal(artikal.naziv, artikal.nabavna_cijena, artikal.prodajna_cijena,nova_kolicina);
                }else{
                    //Ako nije taj, vrati nepromijenjenog
                    return x;
                }
            })
        }

        //UPDATE POSLOVNICE
        const nova_poslovnica=new Poslovnica(poslovnica.id, poslovnica.naziv, poslovnica.email, poslovnica.lokacija, novi_artikli, 
            nova_zarada);

        dispatch(poslovnicaAction(POSLOVNICA_ACTION.UPDATE_POSLOVNICA,nova_poslovnica));

        navigation.goBack();

    }

    return(
    <Screen>
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
            {/*</Okvir>*/}
            <View style={styles.bottomContainer}>
                <Text style={styles.sliderValue}>Količina: {kolicina}</Text>
                {/*<Text style={styles.sellButton}>Prodaj artikal</Text>*/}
            </View>   

            <BotunTekst onPress={prodajArtikal} style={{fontWeight: 'bold'}}>Prodaj </BotunTekst>
            </Okvir>
    </Screen>)
}

export default ProdajArtikalScreen;

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