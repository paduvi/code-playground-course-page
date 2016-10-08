/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var MuiThemeProvider = require('material-ui').MuiThemeProvider;

var injectTapEventPlugin = require('react-tap-event-plugin');

var Header = require('./Header');
var Course = require('./Course');
var NoMatch = require('./NoMatch');

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