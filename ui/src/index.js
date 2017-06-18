import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './css/menu.css';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers';

const initialState = {
    devices: {
        devices: []
    }
}
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
