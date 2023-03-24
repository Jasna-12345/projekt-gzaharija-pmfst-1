import React from 'react';
import {useSelector} from 'react-redux';
import { FlatList,Text,View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Za svaki item u listi se poziva ova komponenta 
//props objekt={id, naziv, email, lokacija, artikli, zarada}
const Poslovnica=({poslovnica,navigation})=>{

    {/*//Ne treba nam ako smo destrukturirali props objekt, nakon implementacije botuna kao dijela svake poslovnice 
    //const poslovnica=props.item;*/}

    return (<View>
        <Text style={{fontSize:24}}>{poslovnica.naziv}</Text>
        <Button onPress={()=>navigation.navigate('DetaljiPoslovnice')} title="Detalji poslovnice"></Button>
        <Button onPress={()=>navigation.navigate('PregledSkladista')} title="Pregled skladišta"></Button>
        <Button onPress={()=>navigation.navigate('ZatvoriPoslovnicu')} title="Zatvori poslovnicu"></Button>
    </View>)
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