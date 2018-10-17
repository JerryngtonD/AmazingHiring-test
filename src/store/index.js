import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducer from '../reducer';
import logger from '../middlewares/logger';
                                //order of middlewares is important !!!
const enhancer = applyMiddleware(thunk, logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
