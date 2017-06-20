import React, { Component } from 'react'
import {Drawer, IconButton, Divider} from 'material-ui'
import {Link} from 'react-router-dom'
import {iconStyle, iconButtonStyle, sidebarWidth, sidebarStyle} from '../style/materialStyles'

export default class SidebarView extends Component {
    renderButton (item) {
        return (
            <IconButton
                tooltip={item.title}
                tooltipPosition="top-right"
                style={iconButtonStyle}
                container
                iconStyle={iconStyle}
                containerElement={<Link to={item.path} />}
            >
                {item.icon}
            </IconButton>
        )
    }

    render () {
        const {items, onClickItem, active} = this.props
        return (
            <Drawer open width={sidebarWidth} containerStyle={sidebarStyle}>
                <div className="margin-md-top">
                    {items.map((item, index) =>
                        <div key={index}
                             className={index === active ? 'sidebar-chosen' : ''}
                             onClick={onClickItem.bind(this, index)}>
                            {index > 0 && <Divider style={{margin: 0, backgroundColor: '#393b42'}}/>}
                            <div className="sidebar-item-container">
                                {this.renderButton(item)}
                            </div>
                        </div>
                    )}
                </div>
            </Drawer>
        )
    }
}
