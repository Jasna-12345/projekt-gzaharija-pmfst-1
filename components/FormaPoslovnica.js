//Komponenta za DODAVANJE NOVE, i EDIT postojeće poslovnice(AKO JE PROSLIJEĐENA kao props)
import React from 'react';
import { TextInput,View } from 'react-native';
import { useState} from 'react';
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

//Ako se kao parametar pošalje poslovnica -- UPDATE,  inače ADD na store
const FormaPoslovnica = ({poslovnica}) => {

  const next_id=useSelector(state=>state.poslovnica.next_id);

  const navigation=useNavigation();
  const [naziv, postaviNaziv]=useState(poslovnica ? poslovnica.naziv : ' ');
  const [email, postaviEmail]=useState(poslovnica ? poslovnica.email : ' ');
  const [lokacija, postaviLokaciju]=useState(poslovnica ? poslovnica.lokacija : ' ');

  //ADD ili UPDATE poslovnice
  const jeDodavanje = poslovnica === undefined; 
  

  const provjeriPostavljanjeNaziva = (text) => {
    postaviNaziv(text);
    //console.log(`Nova vrijednost naziva: ${naziv}`); 
  };

  
  //Kreiranu poslovnicu ćemo dodati u naš REDUX STORE
  const dispatch=useDispatch();

  const resetForme = () => {
    postaviNaziv('');
    postaviEmail('');
    postaviLokaciju('');
  }

  const submitForm=()=>{
    //Ako jeDodavanje===true, dodajemo poslovnicu, akcija je ADD_POSLOVNICA
    if(jeDodavanje){
        const novaPoslovnica = new Poslovnica(next_id,naziv,email,lokacija);

    
        dispatch(poslovnicaAction(POSLOVNICA_ACTION.ADD_POSLOVNICA,novaPoslovnica))

        navigation.navigate('TabPocetna')
        //a ako uređujemo, jeDodavanje===false, akcija je UPDATE_POSLOVNICA

        //Kao akcju dohvaćamo ID postojeće poslovnice
        const updatePoslovnica = new Poslovnica(poslovnica.id,naziv,email,lokacija);

        
        dispatch(poslovnicaAction(POSLOVNICA_ACTION.UPDATE_POSLOVNICA,updatePoslovnica))

        navigation.goBack()
    }
    
    resetForme()

  }

  return (
    <View  style={{margin:20}}>
        <TekstLabel>Naziv poslovnice: </TekstLabel>
        <TextInput placeholder="Naziv poslovnice" onChangeText={provjeriPostavljanjeNaziva} value={naziv} style={styles.textInput}/>

        <TekstLabel>Email poslovnice: </TekstLabel>
        <TextInput placeholder="Email poslovnice" onChangeText={postaviEmail} value={email} style={styles.textInput}/>

        <TekstLabel>Lokacija poslovnice: </TekstLabel>
        <TextInput placeholder="Lokacija poslovnice" onChangeText={postaviLokaciju} value={lokacija} style={styles.textInput}/>
    
        <BotunTekst onPress={submitForm} >{jeDodavanje ? "Dodaj" : "Uredi"}</BotunTekst>
    
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
      width: '98%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      color: 'grey', // boja slova na formi 
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      fontSize: 16,
      //margin:20,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
    },
    input:{
        margin:20,
        //marginTop:5,
        //marginBottom:10,
        padding:10,
        borderColor:BOJA.UNOS_POZADINA,
        color:BOJA.UNOS_TEKST,
        borderRadius:10,
        borderWidth:1,
    },
  });

export default FormaPoslovnica;

