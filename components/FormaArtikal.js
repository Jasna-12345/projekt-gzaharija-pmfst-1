//Komponenta za dodavanje nove poslovnice, i za EDIT postojeće 
import React from 'react';
import { TextInput,View } from 'react-native';
import { useState} from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { POSLOVNICA_ACTION } from '../stores/actions/poslovnicaAction';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { poslovnicaAction } from '../stores/actions/poslovnicaAction';
import TekstLabel from './TekstLabel';
import { BOJA } from '../konstante';
import BotunTekst from './BotunTekst';
import Artikal from '../models/Artikal';
import { Picker } from '@react-native-picker/picker';

const FormaArtikal = () => { //Ne možemo raditi UPDATE artikla, pa nam ovaj artikal NE treba. 

  //Lista poslovnica
  const poslovnice=useSelector(state=>state.poslovnica.poslovnice);

  const navigation=useNavigation();
  const [naziv, postaviNaziv]=useState('');
  const [nabavnaCijena, postaviNabavnaCijena]=useState('');
  const [prodajnaCijena, postaviProdajnaCijena]=useState('');
  const [kolicina,postaviKolicina]=useState('');
  const [idPoslovnice, postaviIdPoslovnice]=useState(poslovnice[0].id);


  

  const provjeriPostavljanjeNaziva = (text) => {
    postaviNaziv(text);
    //console.log(`Nova vrijednost naziva: ${naziv}`); // ovdje ispisujemo stanje naziva nakon promjene
  };

  
  const dispatch=useDispatch();

  const resetForme = () => {
    postaviNaziv('');
    postaviProdajnaCijena('');
    postaviNabavnaCijena('');
    postaviKolicina('');
    postaviIdPoslovnice(poslovnice[0].id); //Inicijalno id postavljamo na 1. poslovnicu
  }

  const submitForm=()=>{
   
        const noviArtikal = new Artikal(naziv,nabavnaCijena, prodajnaCijena,kolicina);

        dispatch(poslovnicaAction(POSLOVNICA_ACTION.ADD_ARTIKAL,{artikal: noviArtikal,id_poslovnice:idPoslovnice}))

        navigation.navigate('TabPocetna',{kolicina})
   
        resetForme()

  }

  return (
    <View>
        <TekstLabel>Naziv Artikla: </TekstLabel>
        <TextInput placeholder="Naziv artikla" onChangeText={provjeriPostavljanjeNaziva} value={naziv} style={styles.textInput}/>

        <TekstLabel>Nabavna cijena: </TekstLabel>
        <TextInput placeholder="Nabavna cijena" onChangeText={postaviNabavnaCijena} value={nabavnaCijena} style={styles.textInput}/>

        <TekstLabel>Prodajna cijena: </TekstLabel>
        <TextInput placeholder="Prodajna cijena" onChangeText={postaviProdajnaCijena} value={prodajnaCijena} style={styles.textInput}/>

        <TekstLabel>Količina: </TekstLabel>
        <TextInput placeholder="Količina" onChangeText={postaviKolicina} value={kolicina} style={styles.textInput}/>

        <TekstLabel>Poslovnica: </TekstLabel>
        {/*renderiramo poslovice iz naše liste poslovnica, svakom Picker.Item-u šaljemo kao prop label(naziv poalovnice),
        value(id poslovnice) i key */}
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
      color: 'grey', // boja slov na formi 
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      fontSize: 16,
      marginBottom: 10,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
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

