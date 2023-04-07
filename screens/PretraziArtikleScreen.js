import {View,Text,Button} from "react-native";
import Screen from "../components/Screen";
import { useSelector } from "react-redux";
import ListaArtikala from "../components/ListaArtikala";

const PretraziArtikleScreen=({route,navigation})=>{
    //Mi ovdje dolazimo preko TabPretraziArtikle - jer se tu poziva komponenta PretraziArtikleScreen i ProdajaArtiklaScreen
    //LISTA ARTIKALA(komponenta) nam prima poslovnice, kao array gdje svaki array item ima PROIZVOD I ARTIKAL, a to vidimo u 
    //PregledSkladistaScreen komponenti

    //Treba nam lista poslovnica
    const poslovnice=useSelector(state=>state.poslovnica.poslovnice);

    const proizvodi=poslovnice.reduce((acumulator, poslovnica)=>{
        //Imamo početni akum i poslovnicu, i sada iteriramo kroz sve poslovnice

        //mI U AKUMULATOR MORAMO PUSH-ati objekt koji će imati POSLOVNICU i ARTIKAL
        poslovnica.artikli.forEach(artikal=>{
            //Sada će imati listu proizvoda, PROIZVOD={POSLOVNICA, ARTIKAL}
            acumulator.push({poslovnica,artikal})
        })
        return acumulator;
    },[])//Početna vrijednost akumulatora je [], jer mi obe OBJEKTE spremamo opet u array


    return(
    <Screen>
        {/*<Text>Korisnik ima mogućnost pretrage artikala(make-up proizvoda)</Text>
        <Button onPress={()=>navigation.navigate('ProdajaArtikla')} title="Prodaj artikal"></Button>*/}
        <ListaArtikala proizvodi={proizvodi}/>
    </Screen>)
}

export default PretraziArtikleScreen;