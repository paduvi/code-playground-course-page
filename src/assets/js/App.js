/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';
import {MuiThemeProvider} from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './Header';
import Course from './Course';
import NoMatch from './NoMatch';

injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider>
        <div>
            <Header/>
            <Router>
                <Route path="/:id" component={Course}/>
                <Route path="*" component={NoMatch}/>
            </Router>
        </div>
    </MuiThemeProvider>
), document.getElementById('main'));