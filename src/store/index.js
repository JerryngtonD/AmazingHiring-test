import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducer from '../reducer';
import logger from '../middlewares/logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

                                //order of middlewares is important !!!
const enhancer = applyMiddleware(thunk, logger);

const store = createStore(persistedReducer, {}, enhancer);
const persistor = persistStore(store);

//dev only
window.store = store;

export default {
    store,
    persistor
};
