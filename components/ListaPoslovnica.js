import React from 'react';
import {useSelector} from 'react-redux';
import { FlatList,Text,View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Okvir from './Okvir';
import BotunTekst from './BotunTekst';
import TekstNaslov from './TekstNaslov';


//props objekt={id, naziv, email, lokacija, artikli, zarada}
const Poslovnica=({poslovnica,navigation})=>{


    return (<Okvir>
        <TekstNaslov /*boja={{color:'red'}}*/>{poslovnica.naziv}</TekstNaslov>
        <BotunTekst
        onPress={()=>navigation.navigate('DetaljiPoslovnice', {id_poslovnice: poslovnica.id})} 
        >Detalji poslovnice</BotunTekst>


        <BotunTekst
        onPress={()=>navigation.navigate('PregledSkladista', {id_poslovnice: poslovnica.id})} 
         >Pregled skladišta</BotunTekst>
        
        
        <BotunTekst
        onPress={()=>navigation.navigate('ZatvoriPoslovnicu', {poslovnica: poslovnica})} 
        >Zatvori poslovnicu</BotunTekst>

    </Okvir>)
}

const ListaPoslovnica = () => {
    const navigation=useNavigation();

    const lista=useSelector(state=>state.poslovnica.poslovnice);

    return(
        <FlatList
        data={lista}
        keyExtractor={poslovnica => poslovnica.id }//Koristi se id kao jedinstveni ključ za svaki element liste 

        //Zbog HOOK-a useNavigation, ne možemo direktno zvati Poslovnicu, nego moramo zvati ITEM, returna komponentu
        //poslovnica, gdje će nam poslovnica biti item, kojem ćemo proslijediti navigation prop, da ga imamo za buduće korištenje,
        //unutar child komponente Poslovnica 

        //DOKUMENTACIJA: const poslovnica=props.item; --> DESTRUKTURIRAMO props objekt 
        renderItem={({item})=><Poslovnica poslovnica={item} navigation={navigation}/>}
        ></FlatList>
    )
}

export default ListaPoslovnica