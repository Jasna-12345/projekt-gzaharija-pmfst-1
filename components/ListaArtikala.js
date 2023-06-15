import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Okvir from './Okvir';
import BotunTekst from './BotunTekst';
import TekstNaslov from './TekstNaslov';
import PrikazPolja from './PrikazPolja';

const Artikal=({artikal,navigation,poslovnica})=>{

    return (<Okvir>
        <TekstNaslov>{artikal.naziv}</TekstNaslov>

        <PrikazPolja polja={[
            {ime:'Nabavna cijena', vrijednost: artikal.nabavna_cijena},
            {ime:'Prodajna cijena', vrijednost: artikal.prodajna_cijena},
            {ime:'Količina', vrijednost: artikal.kolicina},
            {ime:'Poslovnica', vrijednost: poslovnica.naziv},
        ]}/>
        
        {/*Ovdje smo prebacili 2 botuna iz PregledSkladistaScreen komponente*/}
        <BotunTekst onPress={()=>navigation.navigate('ProdajArtikal',{artikal, poslovnica})}>Prodaj artikal</BotunTekst>
        <BotunTekst onPress={()=>navigation.navigate('PrebaciArtikal',{artikal, poslovnica})}>Prebaci artikal</BotunTekst>
    </Okvir>)
}


//Za akcije Prodaj artikal i Prebaci artikal, nama je trebao i podatak iz koje poslovnice je to došlo, proizvodi=artikal +id_poslovnice
const ListaArtikala = ({proizvodi}) => {
    //Dodano nakon što smo importali redux kao GLOBAL STATE MANAGEMENT, da možemo islistati poslovnice, a kasnije ćemo i artikle
    const navigation=useNavigation();

    //const lista=useSelector(state=>state.poslovnica.poslovnice); --> OVDJE NAM TO NE TREBA, imamo artikle kao prop

    return(
        <FlatList
        data={proizvodi}
        //Prop keyExtractor je funkcija koja uzima jedan artikal i vraća njegov jedinstveni ključ. U ovom slučaju, 
        //jedinstveni ključ je naziv artikla (proizvod.artikal.naziv)
        keyExtractor={proizvod => `${proizvod.poslovnica.id}-${proizvod.artikal.naziv}`}

        //Zbog HOOK-a useNavigation, ne možemo direktno zvati Artikal, nego moramo zvati ITEM, i onda će on nama return-ati komponentu
        //artikal, gdje će nam artikal biti item, i tom item-u ćemo proslijediti navigation prop, da ga imamo za buduće korištenje,
        //unutar child komponente Artikal
        renderItem={({item})=><Artikal artikal={item.artikal} navigation={navigation} 
        //RENDERITEM-funkcija koja se poziva za svaki artikal u listi
        poslovnica={item.poslovnica}/>} 
        ></FlatList>
    )
}

export default ListaArtikala;