import {applyMiddleware, combineReducers, createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({weatherReducer});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));