import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';

const Test = () => (
    <div>
        <h2>hello kookoo</h2>
        <IconButton tooltip="kkk" containerElement={<Link to={'/devices'} />}><Settings
            color={'black'}/></IconButton>
    </div>
)

export default Test;