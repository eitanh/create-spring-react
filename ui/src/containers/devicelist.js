import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchDevices} from '../actions/index.js'

import Devices from '../components/devices.js'

class DeviceList extends Component {
    render () {
        return (
            <Devices {...this.props}/>
        )
    }
}

export default connect(
    state => ({
        devices:state.devices.devices
    }), {
        fetchDevices
    }
)(DeviceList)