import {View,Text} from "react-native";
import { useSelector } from "react-redux";
import Screen from "../components/Screen";
import Okvir from "../components/Okvir";
import TekstNaslov from "../components/TekstNaslov";
import PrikazPolja from "../components/PrikazPolja";

const PocetnaScreen=({route, navigation})=>{
    
    const poslovnice=useSelector(state=>state.poslovnica.poslovnice);
    //Zanima nas ukupan broj poslovnica
    //const brojPoslovnica=useSelector(state=>state.poslovnica.poslovnice.length);
    const brojPoslovnica=poslovnice.length;
    const zarada=poslovnice.reduce((acumulator,poslovnica)=>{
        //Za svaku poslovnicu, x u akumulator ćemo dodati zaradu te poslovnice, te vraćamo akum. kako bi se u sljedećoj iteraciji 
        //funkcije on povecao za tu vrijednost 
        acumulator+=poslovnica.zarada;
        return acumulator;
    }, 0);//inicijalna vrijednost akumultora nam je 0
     
    //Moramo proci kroz sve poslovnice, kroz sve artikle, i pobrojati te količine. 
    const kolicina=poslovnice.reduce((acc,poslovnica)=>{
        //artikliPoslovnice nam je BROJ artikala jedne poslovnice
        const artikliPoslovnice = poslovnica.artikli.reduce((akumulator,artikal)=>{
            akumulator+=artikal.kolicina;
            return akumulator;
        },0)//JAKO BITNO - definirati početnu vrijednost akumulatora

        acc+=artikliPoslovnice;
        //console.log(acc);
        return acc;
    },0)

    
    return(<Screen>
        <Okvir>
            <TekstNaslov>Statistički podaci svih poslovnica make-up proizvoda</TekstNaslov>
            {/*Želimo ispisati ukupan broj poslovnica*/}
            <PrikazPolja polja={[
                {ime: 'Broj poslovnica', vrijednost:brojPoslovnica},
                {ime: 'Ukupna zarada', vrijednost: zarada},
                {ime: 'Ukupno proizvoda na skladištu', vrijednost:kolicina},
            ]}/>
            {/*<Text>Broj poslovnica: {brojPoslovnica}</Text>
            <Text>Ukupna zarada: {zarada}</Text>
            <Text>Ukupno proizvoda na skladištu: {kolicina}</Text>*/}
        </Okvir>
    </Screen>)
}

export default PocetnaScreen;