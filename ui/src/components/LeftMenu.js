import React,{ Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import spiderbot from '../resources/images/spiderbot2.png';

import SidebarView from './SidebarView'

import HomeIcon from 'material-ui/svg-icons/action/home'
import RssIcon from 'material-ui/svg-icons/communication/rss-feed'
import BookmarkIcon from 'material-ui/svg-icons/action/bookmark'
import PeopleIcon from 'material-ui/svg-icons/social/people'
import PermContactIcon from 'material-ui/svg-icons/action/perm-contact-calendar'

import { sidebarIconsColor } from '../style/materialStyles'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const home = <HomeIcon color={sidebarIconsColor}/>
const rss = <RssIcon color={sidebarIconsColor}/>
const bookmark = <BookmarkIcon color={sidebarIconsColor}/>
const people = <PeopleIcon color={sidebarIconsColor}/>
const permcontact = <PermContactIcon color={sidebarIconsColor}/>

export const menuItems = [
    {title: 'Content', icon: home, path: '/section'},
    {title: 'Resource', icon: rss, path: '/resource'},
    {title: 'Visit', icon: bookmark, path: '/visit'},
    {title: 'Users', icon: people, path: '/users'},
    {title: 'Audit', icon: permcontact, path: '/audit'}
]

class LeftMenu extends Component{

    render1() {
        return (
            <Drawer
                containerStyle={{height: 'calc(100%)',width:70, top: 0,background:'#000000'}}
                docked={true}
                width={200}
                containerElement={<Link to={'/devices'}/>}
                onRequestChange={(open) => this.setState({open})
                }
            >
                <MenuItem onTouchTap={this.handleClose}>M1</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>M2</MenuItem>
            </Drawer>
        );
    }

    onClickItem (index) {
        //this.props.history.push(menuItems[index].path)
    }

    render () {

        return (
            <SidebarView
                items={menuItems}
                onClickItem={this.onClickItem.bind(this)}
                active={0}
            />
        )
    }
}

export default LeftMenu;
