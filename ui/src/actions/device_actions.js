/**
 * Created by master on 02/06/2017.
 */
import axios from 'axios'
import {FETCH_DEVICES} from './types'
import {BACKEND_URL} from '../global'

export function fetchDevices () {
    return dispatch => {
        axios.get(`${BACKEND_URL}/devices`).then(res => {
            dispatch({type: FETCH_DEVICES, data: res.data})
        })
    }
}