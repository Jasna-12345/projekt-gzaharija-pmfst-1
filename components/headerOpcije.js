//kako nebismo ponavljali opcije za svaki ekran kao options={{headerLeft: ...}}, izdvajamo to u posebnu komponentu.
import {DrawerToggleButton} from '@react-navigation/drawer';
import NavigacijaNazadBotun from './NavigacijaNazadBotun';

export const headerOpcije={
    //S lijeve strane će nam uvijek biti ikona za drawer navigaciju, hamburger menu
    headerLeft: DrawerToggleButton,
    headerRight: NavigacijaNazadBotun
}
