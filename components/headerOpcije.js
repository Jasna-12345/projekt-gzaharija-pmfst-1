//kako nebismo ponavljali opcije za svaki ekran kao options={{headerLeft: ...}}, izdvajamo to u posebnu komponentu.
import {DrawerToggleButton} from '@react-navigation/drawer';
import NavigacijaNazadBotun from './NavigacijaNazadBotun';

//Dodajemo svugdje gdje se mozemo vratiti natrag - BACK botun(STACK NAVIGACIJA)

export const headerOpcije={
    //LIJEVO -  hamburger menu
    headerLeft: DrawerToggleButton,
    //DESNO - botun NATRAG 
    headerRight: NavigacijaNazadBotun
}
