import { combineReducers, legacy_createStore as createStore } from 'redux'
import mainReducer from '../reducers/mainReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let rootReducer = combineReducers({
	mainReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type InferValuesType<T> = T extends { [key: string]: infer U } ? U : never
export type PropertiesType<T extends { [key: string]: (...args: any) => any }> = ReturnType<InferValuesType<T>>

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)

export const persistor = persistStore(store)
export default store
