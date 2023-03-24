import {View,Text,Button} from "react-native";
import ListaPoslovnica from "../components/ListaPoslovnica";


const PopisPoslovnicaScreen=({route,navigation})=>{
    return(<View>
        {/*<Text>Popis poslovnica</Text> ----> DO REDUX-a*/}
        <ListaPoslovnica/>
        {/*<Button onPress={()=>navigation.navigate('DetaljiPoslovnice')} title="Detalji poslovnice"></Button>
        <Button onPress={()=>navigation.navigate('PregledSkladista')} title="Pregled skladišta"></Button>
        <Button onPress={()=>navigation.navigate('ZatvoriPoslovnicu')} title="Zatvori poslovnicu"></Button> --> ukolnjeno nakon 
        dodavanja botuna za svaku poslovnicu unutar komponente Poslovnica, samo smo ove botune premjestili(4.)*/}

    </View>)
}

export default PopisPoslovnicaScreen;