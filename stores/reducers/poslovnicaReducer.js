//To je funkcija koja prihvaća prethodno definirani POSLOVNICA ACTION

import POSLOVNICE_TEST from '../../models/PoslovniceData.js'
import {POSLOVNICA_ACTION}  from '../actions/poslovnicaAction';

const INCREMENT = 1;

const initState = {
    poslovnice: POSLOVNICE_TEST,
    next_id: POSLOVNICE_TEST.length
}

const poslovnicaReducer = (state = initState, action) => {

    switch(action.type) {
        case POSLOVNICA_ACTION.ADD_POSLOVNICA:
            return { poslovnice: [...state.poslovnice, action.payload], next_id: state.next_id + INCREMENT} 
        case POSLOVNICA_ACTION.ADD_ARTIKAL:
            const p = state.poslovnice.map(x=> {
                //Ako to nije poslovnica u koju želimo dodati artikal
                if (x.id != action.payload.id_poslovnice) {
                    return x;
                }
                else{
                //Ako je
                 x.artikli = [...x.artikli, action.payload.artikal]
                return  x}
            })
            return {...state, poslovnice : p}
        case POSLOVNICA_ACTION.UPDATE_POSLOVNICA:
            return {...state, poslovnice: state.poslovnice.map(x=> x.id == action.payload.id ? action.payload : x)}
    
        case POSLOVNICA_ACTION.BANKRUPTCY_POSLOVNICA:
            //Podrazumijevamo da je action.payload ID POSLOVNICE, odnosno poslovnica.id
            return {...state, poslovnice: state.poslovnice.filter(x=> x.id != action.payload)}
        default:
            return state;

    }
}
export default poslovnicaReducer;
