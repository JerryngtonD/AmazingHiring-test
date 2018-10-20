import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import storeObject from '../store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


function Root() {
    return (
        <Provider store = {storeObject.store}>
            <PersistGate loading={null} persistor={storeObject.persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}

Root.propTypes = {
};

export default Root;
