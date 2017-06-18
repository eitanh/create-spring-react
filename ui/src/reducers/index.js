import { combineReducers } from 'redux';
import DevicesReducer from './reducer_device';

const rootReducer = combineReducers({
    devices:DevicesReducer
});

export default rootReducer;