//Komponenta za dodavanje nove poslovnice, i za EDIT postojeće 
import React from 'react';
import { Button,Text, TextInput,View } from 'react-native';
import { useState,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { POSLOVNICA_ACTION } from '../stores/actions/poslovnicaAction';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Poslovnica from '../models/Poslovnica';
import { poslovnicaAction } from '../stores/actions/poslovnicaAction';
import TekstLabel from './TekstLabel';
import { BOJA } from '../konstante';
import BotunTekst from './BotunTekst';
import Artikal from '../models/Artikal';
import { Picker } from '@react-native-picker/picker';

//Ako se kao parametar pošalje poslovnica, mi tu poslovnicu uređujemo, a ako je nema, mi dodajemo novu 
//poslovnicu u naš STORE
const FormaArtikal = () => { //Ne možemo raditi update artikla, pa nam ovaj artikal ne treba. 

  //9. Treba nam lista poslovnica
  const poslovnice=useSelector(state=>state.poslovnica.poslovnice);

  //U modelu smo vidjeli da primamo naziv, prodajna, nabavna cijena i količina
  const navigation=useNavigation();//Za povratak na početnu str nakon dodavanja nove poslovnice
  const [naziv, postaviNaziv]=useState('');
  const [nabavnaCijena, postaviNabavnaCijena]=useState('');
  const [prodajnaCijena, postaviProdajnaCijena]=useState('');
  const [kolicina,postaviKolicina]=useState('');
  const [idPoslovnice, postaviIdPoslovnice]=useState(poslovnice[0].id);



  //Varijabla za provjeru je li poslovnica kreirana. Ako jeDodano===true, nemamo poslovnicu kao parametar - NE TREBA NAM, NEMA EDIT ARTIKLA
  //const jeDodavanje = artikal === undefined; //Ako nema poslovnice, ovo je TRUE(trebamo dodati poslovnicu), inače FALSE
  

  const provjeriPostavljanjeNaziva = (text) => {
    postaviNaziv(text);
    //console.log(`Nova vrijednost naziva: ${naziv}`); // ovdje ispisujemo stanje naziva nakon promjene
  };

  
  //Kreiranu poslovnicu ćemo dodati u naš REDUX STORE, pomoću useDispatch() - OBAVEZNO IDE VAN FUNKCIJE submitForm
  const dispatch=useDispatch();

  //Funkcija za resetiranje forme na početne vrijednosti
  const resetForme = () => {
    postaviNaziv('');
    postaviProdajnaCijena('');
    postaviNabavnaCijena('');
    postaviKolicina('');
    postaviIdPoslovnice(poslovnice[0].id); //Inicijalno id postavljamo na 1. poslovnicu
  }

  const submitForm=()=>{
   
         //Kreiramo novi artikal po uzoru na konstruktor iz modela 
        const noviArtikal = new Artikal(naziv,nabavnaCijena, prodajnaCijena, kolicina);

        
        //dispatch funkciji šaljemo poslovnicaAction koji prima TIP i PODATKE(provjerimo u STORES-poslovnicaAction)
        //TIP će nam biti POSLOVNICA_ACTION.ADD_POSLOVNICA(ADD_POSLOVNICA: "poslovnica/add"--> ovdje smo to vidjeli),
        //a podaci će nam biti upravo ova poslovnica, koju smo već kreirali
        dispatch(poslovnicaAction(POSLOVNICA_ACTION.ADD_ARTIKAL,{artikal: noviArtikal,id_poslovnice:idPoslovnice}))

        //Kada smo dodali novi artikal, želimo se vratiti na drawer Početne, odnosno na TabPočetna
        navigation.navigate('TabPocetna')//navodimo NAME svojstvo rute
   
        //čistimo polja forme za idući ARTIKAL
        resetForme()

  }

  return (
    <View>
        <TekstLabel>Naziv Artikla: </TekstLabel>
        {/*Inače bi i ovdje kao onChangeText imali postaviNaziv, samo zbog provjere koristim provjeriPostavljanjeNaziva*/}
        <TextInput placeholder="Naziv artikla" onChangeText={provjeriPostavljanjeNaziva} value={naziv} style={styles.textInput}/>

        <TekstLabel>Nabavna cijena: </TekstLabel>
        {/*Inače bi i ovdje kao onChangeText imali postaviNaziv, samo zbog provjere koristim provjeriPostavljanjeNaziva*/}
        <TextInput placeholder="Nabavna cijena" onChangeText={postaviNabavnaCijena} value={nabavnaCijena} style={styles.textInput}/>

        <TekstLabel>Prodajna cijena: </TekstLabel>
        {/*Inače bi i ovdje kao onChangeText imali postaviNaziv, samo zbog provjere koristim provjeriPostavljanjeNaziva*/}
        <TextInput placeholder="Prodajna cijena" onChangeText={postaviProdajnaCijena} value={prodajnaCijena} style={styles.textInput}/>

        <TekstLabel>Količina: </TekstLabel>
        {/*Inače bi i ovdje kao onChangeText imali postaviNaziv, samo zbog provjere koristim provjeriPostavljanjeNaziva*/}
        <TextInput placeholder="Količina" onChangeText={postaviKolicina} value={kolicina} style={styles.textInput}/>

        <TekstLabel>Poslovnica: </TekstLabel>
        {/*unutar Picker komponente trebamo renderirati poslovice iz naše liste poslovnica, a to nam je najlakše postići 
        pomoću map funckije, gdje nam x prodstsvlja svaku poslovnicu, te renderiramo Picker.Item kojem šaljemo kao prop 
        label, odnosno naziv naše poslovnice, i value, kao id naše poslovnice, te kao key imamo id poslovnice. */}
        <Picker selectedValue={idPoslovnice} onValueChange={postaviIdPoslovnice}>
              {poslovnice.map(x=><Picker.Item key={x.id} label={x.naziv} value={x.id}/>)}
        </Picker>
        
        <BotunTekst onPress={submitForm} >Dodaj</BotunTekst>
    
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
      width: '80%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      color: 'grey', // ovdje postavite željenu boju slova
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      fontSize: 16,
      marginBottom: 10,
      fontWeight: 'bold',
      fontFamily: 'Times New Roman',
    },
    input:{
        marginTop:5,
        marginBottom:10,
        padding:10,
        borderColor:BOJA.UNOS_POZADINA,
        color:BOJA.UNOS_TEKST,
        borderRadius:10,
        borderWidth:1,
    },
  });

export default FormaArtikal;

