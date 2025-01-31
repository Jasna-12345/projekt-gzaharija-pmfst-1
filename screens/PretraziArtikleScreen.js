import {TextInput} from "react-native";
import Screen from "../components/Screen";
import { useSelector } from "react-redux";
import ListaArtikala from "../components/ListaArtikala";
import { BOJA } from "../konstante";
import { StyleSheet } from "react-native";
import { useState } from "react";

const PretraziArtikleScreen=({route,navigation})=>{
    //Mi ovdje dolazimo preko TabPretraziArtikle - jer se tu poziva komponenta PretraziArtikleScreen i ProdajaArtiklaScreen
    //LISTA ARTIKALA(komponenta) nam prima poslovnice, kao array gdje svaki array item ima PROIZVOD I ARTIKAL, a to vidimo u 
    //PregledSkladistaScreen komponenti

    const poslovnice=useSelector(state=>state.poslovnica.poslovnice);

    //Za praćenje vrijednosti textInput elementa
    const [trazilica,postaviTrazilica]=useState('');

    const proizvodi=poslovnice.reduce((acumulator, poslovnica)=>{
        //Imamo početni akum i poslovnicu, i sada iteriramo kroz sve poslovnice

        //mI U AKUMULATOR MORAMO PUSH-ati objekt koji će imati POSLOVNICU i ARTIKAL
        poslovnica.artikli.forEach(artikal=>{

            const nazivLowercase=artikal.naziv.toLowerCase();
            const trazilicaLowercase=trazilica.toLowerCase();

            if(nazivLowercase.includes(trazilicaLowercase)){
                //Sada će imati listu proizvoda, PROIZVOD={POSLOVNICA, ARTIKAL}
                acumulator.push({poslovnica,artikal});
            }
        })
        return acumulator;
    },[])


    return(
    <Screen>

        {/*LABELA ZA UNOS*/}
        <TextInput placeholder="Pretraži željeni artikal" onChangeText={postaviTrazilica} value={trazilica} style={styles.textInput}/>


        <ListaArtikala proizvodi={proizvodi}/>
    </Screen>)
}

export default PretraziArtikleScreen;

const styles = StyleSheet.create({
    textInput: {
      width: '98%',
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
