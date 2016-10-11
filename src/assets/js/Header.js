/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
import React from 'react';

import {AppBar, FontIcon} from 'material-ui';

const icon = <FontIcon className="material-icons">code</FontIcon>;

class Header extends React.Component {
    render() {
        return (
            <AppBar title="Code Playground" iconElementLeft={icon} className="navBar"/>
        )
    }
}

export default Header