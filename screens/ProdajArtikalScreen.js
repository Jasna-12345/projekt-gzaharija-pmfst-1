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
    //Ovdje dolazimo iz PopisPoslovnicaScreen, odnosno komponente ListaPoslovnica, gdje nam je kao route navigaation funkciji poslan
    //naziv ovog ekrana, a kao parametri su poslani {artikal i poslovnica}
    //<BotunTekst onPress={()=>navigation.navigate('ProdajArtikal',{artikal, poslovnica})}>Prodaj artikal</BotunTekst>
    const{artikal,poslovnica}=route.params;

    const [kolicina, postaviKolicina]=useState(1);

    const dispatch=useDispatch();
    const prodajArtikal=()=>{
        //NOVA ZARADA POSLOVNICE
        const nova_zarada=poslovnica.zarada+kolicina*(artikal.prodajna_cijena-artikal.nabavna_cijena);
        //MORAMO OSVJEZITI KOLICINU AKO JE DOSLO DO PRODAJE - nova_kolicina
        const nova_kolicina=artikal.kolicina-kolicina;

        //UPDATE LISTE ARTIKALA
        let novi_artikli;
        //Ako smo sve artikle tipa Bronzer prodali
        if(nova_kolicina==0){
            //Izbacujemo da iz liste artikala poslovnice
            novi_artikli=poslovnica.artikli.filter(x=>x.naziv!=artikal.naziv);
        }else{
            //Ako nismo prodali sve artikle 
            novi_artikli=poslovnica.artikli.map(x=>{
                //Ako smo u listi artikala prnasli taj artikal, vrati novi koji ima UPDATE KOLICINE 
                if(x.naziv ===artikal.naziv){
                    return new Artikal(artikal.naziv, artikal.nabavna_cijena, artikal.prodajna_cijena,nova_kolicina);
                }else{
                    //Ako to nije taj artikal, samo ga vrati nepromijenjenog
                    return x;
                }
            })
        }

        //UPDATE POSLOVNICE
        const nova_poslovnica=new Poslovnica(poslovnica.id, poslovnica.naziv, poslovnica.email, poslovnica.lokacija, novi_artikli, 
            nova_zarada);

        //Sada i novu kolicinu i poslovnicu moramo poslati preko DISPATCH funkcije na STORE, global state management. 
        dispatch(poslovnicaAction(POSLOVNICA_ACTION.UPDATE_POSLOVNICA,nova_poslovnica));
        //Koristimo akciju UPDATE POSLOVNICE, a ta akcija nam prihvaća NOVU POSLOVNICU, SA AŽURIRANIM STANJEM

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