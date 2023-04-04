import React from 'react';
import {useSelector} from 'react-redux';
import { FlatList,Text,View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Okvir from './Okvir';
import BotunTekst from './BotunTekst';
import TekstNaslov from './TekstNaslov';

//Za svaki item u listi se poziva ova komponenta 
//props objekt={id, naziv, email, lokacija, artikli, zarada}
const Poslovnica=({poslovnica,navigation})=>{

    {/*//Ne treba nam ako smo destrukturirali props objekt, nakon implementacije botuna kao dijela svake poslovnice 
    //const poslovnica=props.item;*/}

    return (<Okvir>
        <TekstNaslov>{poslovnica.naziv}</TekstNaslov>
        {/*{id_poslovnice: poslovnica.id} --> sada konkretno znamo za koju poslovnicu mi želimo vidjeti detalje(1.button), pregledati skladište
        (2.button) ili eventualno želimo zatvoriti poslovnicu(3.button). */}
        <BotunTekst
        //style={{ height: 50, width: 80, borderWidth: 4, borderColor: 'red' }}
        onPress={()=>navigation.navigate('DetaljiPoslovnice', {id_poslovnice: poslovnica.id})} 
        >Detalji poslovnice</BotunTekst>

        {/*<View style={{ margin: 5 }}></View>*/}

        <BotunTekst
        onPress={()=>navigation.navigate('PregledSkladista', {id_poslovnice: poslovnica.id})} 
         >Pregled skladišta</BotunTekst>
        
        {/*<View style={{ margin: 5 }}></View>*/}
        
        <BotunTekst
        onPress={()=>navigation.navigate('ZatvoriPoslovnicu', {id_poslovnice: poslovnica.id})} 
        >Zatvori poslovnicu</BotunTekst>

    </Okvir>)
}

const ListaPoslovnica = () => {
    //Dodano nakon što smo importali redux kao GLOBAL STATE MANAGEMENT, da možemo islistati poslovnice, a kasnije ćemo i artikle
    const navigation=useNavigation();

    const lista=useSelector(state=>state.poslovnica.poslovnice);

    return(
        <FlatList
        data={lista}
        keyExtractor={poslovnica => poslovnica.id }//Koristi se id kao jedinstveni ključ za svaki element liste 
        //Funkcija koja nam daje svaku poslovnicu i govori nam kako ćemo mi prikazati tu poslovnicu
        //renderItem={Poslovnica} //Za svaki item u listi će se pozvati ova komponenta, Poslovnica

        //Zbog HOOK-a useNavigation, ne možemo direktno zvati Poslovnicu, nego moramo zvati ITEM, i onda će on nama return-ati komponentu
        //poslovnica, gdje će nam poslovnica biti jednako item, i tom item-u ćemo proslijediti navigation prop, da ga imamo za buduće korištenje,
        //unutar child komponente Poslovnica 
        renderItem={({item})=><Poslovnica poslovnica={item} navigation={navigation}/>}
        ></FlatList>
    )
}

export default ListaPoslovnica