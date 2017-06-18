import {FETCH_DEVICES} from '../actions/types.js'


export default function(state = {}, action){
    switch (action.type) {
        case FETCH_DEVICES:
            return {...state, devices: action.data}
        default:
            break;
    }
    return state
}