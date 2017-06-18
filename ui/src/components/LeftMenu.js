import React,{ Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import spiderbot from '../resources/images/spiderbot2.png';

class LeftMenu extends Component{

    render() {
        return (
            <Drawer
                containerStyle={{height: 'calc(100%)',width:70, top: 0,background:'#000000'}}
                docked={true}
                width={200}

                onRequestChange={(open) => this.setState({open})
                }
            >
                <img src={spiderbot} className="menulogo" alt="logo" />
                <MenuItem onTouchTap={this.handleClose}>M1</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>M2</MenuItem>
            </Drawer>
        );
    }
}

export default LeftMenu;


