import { combineReducers, legacy_createStore as createStore } from "redux";
import mainReducer from '../reducers/mainReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let rootReducer = combineReducers({
    mainReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer);


export const persistor = persistStore(store)
export default store;