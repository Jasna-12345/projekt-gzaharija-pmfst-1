
import {combineReducers, createStore} from "redux";
import poslovnicaReducer from "./reducers/poslovnicaReducer";

const dataReducer=combineReducers({poslovnica : poslovnicaReducer})

export const store=createStore(dataReducer);