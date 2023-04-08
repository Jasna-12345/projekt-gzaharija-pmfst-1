import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Okvir from './Okvir';
import BotunTekst from './BotunTekst';
import TekstNaslov from './TekstNaslov';
import PrikazPolja from './PrikazPolja';

//Za svaki item u listi se poziva ova komponenta 
//props objekt={id, naziv, email, lokacija, artikli, zarada}
const Artikal=({artikal,navigation,poslovnica})=>{

    {/*//Ne treba nam ako smo destrukturirali props objekt, nakon implementacije botuna kao dijela svake poslovnice 
    //const poslovnica=props.item;*/}

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


//Za akcije Prodaj artikal i Prebaci artikal, nama je trebao i podatak iz koje poslovnice je to došlo, te sam
//kao prop unutar Liste artikala dodala i polje id_poslovnice, kako bismo znali iz koje poslovnice je nama artikl stigao, do 
//sada to nismo mogli, te ćemo id_poslovnice proslijediti našoj komponenti artikal.  
const ListaArtikala = ({proizvodi}) => {
    //Dodano nakon što smo importali redux kao GLOBAL STATE MANAGEMENT, da možemo islistati poslovnice, a kasnije ćemo i artikle
    const navigation=useNavigation();

    //const lista=useSelector(state=>state.poslovnica.poslovnice); --> OVDJE NAM TO NE TREBA, imamo artikle kao prop

    return(
        <FlatList
        data={proizvodi}
        //Prop keyExtractor je funkcija koja uzima jedan artikal i vraća njegov jedinstveni ključ. U ovom slučaju, 
        //jedinstveni ključ je naziv artikla (proizvod.artikal.naziv)
        keyExtractor={proizvod => `${proizvod.poslovnica.id}-${proizvod.artikal.naziv}`}//proizvod.artikal.naziv }//Koristi se id kao jedinstveni ključ za svaki element liste 
        //Funkcija koja nam daje svaku poslovnicu i govori nam kako ćemo mi prikazati tu poslovnicu
        //renderItem={Poslovnica} //Za svaki item u listi će se pozvati ova komponenta, Poslovnica

        //Zbog HOOK-a useNavigation, ne možemo direktno zvati Poslovnicu, nego moramo zvati ITEM, i onda će on nama return-ati komponentu
        //poslovnica, gdje će nam poslovnica biti jednako item, i tom item-u ćemo proslijediti navigation prop, da ga imamo za buduće korištenje,
        //unutar child komponente Poslovnica 
        renderItem={({item})=><Artikal artikal={item.artikal} navigation={navigation} 
        //RENDERITEM-funkcija koja se poziva za svaki artikal u listi
        poslovnica={item.poslovnica}/>} 
        ></FlatList>//navigation={navigation} mi služi za navigaciju na druge ekrane, back
    )
}

export default ListaArtikala;