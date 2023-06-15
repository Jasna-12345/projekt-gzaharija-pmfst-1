import { useSelector } from "react-redux";
import ListaArtikala from "../components/ListaArtikala";
import Screen from "../components/Screen";


const PregledSkladištaScreen=({route,navigation})=>{
    //Dohvat ID-a iz ListaPoslovnica
    const {id_poslovnice}=route.params;

    const poslovnica=useSelector(state=>state.poslovnica.poslovnice.find(x=>x.id===id_poslovnice));
    const artikli=poslovnica.artikli;

    //Mapirali smo artikle tako da za svaki artikal imamo artikal i naziv poslovnice kako bi mogli prikazati naziv poslovnice 
    //klikom na PREGLED SKLADIŠTA POSLOVNICE
    const proizvodi=artikli.map(artikal=>{
        return{
            poslovnica, 
            artikal
        }
    });

    return(<Screen>
        <ListaArtikala proizvodi={proizvodi} navigation={navigation} />

    </Screen>)
}

export default PregledSkladištaScreen;