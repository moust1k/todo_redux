import { combineReducers, legacy_createStore as createStore } from "redux";
import mainReducer from '../reducers/mainReducer'

let reducers = combineReducers({
    mainReducer,
})

let store = createStore(reducers);


export default store;