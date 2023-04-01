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

//Ako se kao parametar pošalje poslovnica, mi tu poslovnicu uređujemo, a ako je nema, mi dodajemo novu 
//poslovnicu u naš STORE
const FormaPoslovnica = ({poslovnica}) => {

  //Varijabla iz REACT STORE-a koju možemo iskoristiti za kreiranje ID-a nove poslovnice
  const next_id=useSelector(state=>state.poslovnica.next_id);

  const navigation=useNavigation();//Za povratak na početnu str nakon dodavanja nove poslovnice
  const [naziv, postaviNaziv]=useState(poslovnica ? poslovnica.naziv : ' ');
  const [email, postaviEmail]=useState(poslovnica ? poslovnica.email : ' ');
  const [lokacija, postaviLokaciju]=useState(poslovnica ? poslovnica.lokacija : ' ');

  //Varijabla za provjeru je li poslovnica kreirana. Ako jeDodano===true, nemamo poslovnicu kao parametar
  const jeDodavanje = poslovnica === undefined; //Ako nema poslovnice, ovo je TRUE(trebamo dodati poslovnicu), inače FALSE
  

  const provjeriPostavljanjeNaziva = (text) => {
    postaviNaziv(text);
    //console.log(`Nova vrijednost naziva: ${naziv}`); // ovdje ispisujemo stanje naziva nakon promjene
  };

  
  //Kreiranu poslovnicu ćemo dodati u naš REDUX STORE, pomoću useDispatch() - OBAVEZNO IDE VAN FUNKCIJE submitForm
  const dispatch=useDispatch();

  //Funkcija za resetiranje forme na početne vrijednosti
  const resetForme = () => {
    postaviNaziv('');
    postaviEmail('');
    postaviLokaciju('');
  }

  const submitForm=()=>{
    //Kreiramo novu poslovnicu iz konstruktora
    const poslovnica = new Poslovnica(next_id,naziv,email,lokacija);

    //dispatch funkciji šaljemo poslovnicaAction koji prima TIP i PODATKE(provjerimo u STORES-poslovnicaAction)
    //TIP će nam biti POSLOVNICA_ACTION.ADD_POSLOVNICA(ADD_POSLOVNICA: "poslovnica/add"--> ovdje smo to vidjeli),
    //a podaci će nam biti upravo ova poslovnica, koju smo već kreirali
    dispatch(poslovnicaAction(POSLOVNICA_ACTION.ADD_POSLOVNICA,poslovnica))

    //čistimo polja forme za iduću poslovnicu
    resetForme()

    //Kada smo dodali novu poslovnicu, želimo se vratiti na DRAWER Početna, odnosno na TabPočetna
    navigation.navigate('TabPocetna')//navodimo NAME svojstvo rute

  }

  return (
    <View>
        <Text>Naziv poslovnice: </Text>
        {/*Inače bi i ovdje kao onChangeText imali postaviNaziv, samo zbog provjere koristim provjeriPostavljanjeNaziva*/}
        <TextInput placeholder="Naziv poslovnice" onChangeText={provjeriPostavljanjeNaziva} value={naziv} style={styles.textInput}/>

        <Text>Email poslovnice: </Text>
        <TextInput placeholder="Email poslovnice" onChangeText={postaviEmail} value={email} style={styles.textInput}/>

        <Text>Lokacija poslovnice: </Text>
        <TextInput placeholder="Lokacija poslovnice" onChangeText={postaviLokaciju} value={lokacija} style={styles.textInput}/>
    
        <Button onPress={submitForm} title={jeDodavanje ? "Dodaj" : "Uredi"}/>
    
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
  });

export default FormaPoslovnica;

