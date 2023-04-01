
import {combineReducers, createStore} from "redux";
import poslovnicaReducer from "./reducers/poslovnicaReducer";

//1. Mi smo ovdje rekli da imamo STANJE kojem pristupamo putem "state.poslovnica"
//To nam je 1 slice
const dataReducer=combineReducers({poslovnica : poslovnicaReducer})

export const store=createStore(dataReducer);