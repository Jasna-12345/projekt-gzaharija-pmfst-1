import React from 'react';
import {useSelector} from 'react-redux';
import { FlatList,Text,View } from 'react-native';

//Za svaki item u listi se poziva ova komponenta 
//props objekt={id, naziv, email, lokacija, artikli, zarada}
const Poslovnica=(props)=>{

    const poslovnica=props.item;

    return (<View>
        <Text style={{fontSize:24}}>{poslovnica.naziv}</Text>
    </View>)
}

const ListaPoslovnica = () => {
    const lista=useSelector(state=>state.poslovnica.poslovnice);

    return(
        <FlatList
        data={lista}
        keyExtractor={poslovnica => poslovnica.id }//Koristi se id kao jedinstveni ključ za svaki element liste 
        //Funkcija koja nam daje svaku poslovnicu i govori nam kako ćemo mi prikazati tu poslovnicu
        renderItem={Poslovnica} //Za svaki item u listi će se pozvati ova komponenta, Poslovnica
        ></FlatList>
    )
}

export default ListaPoslovnica