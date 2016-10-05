/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var MuiThemeProvider = require('material-ui').MuiThemeProvider;
var getMuiTheme = require('material-ui/styles').getMuiTheme;
var DarkBaseTheme = require('material-ui/styles').darkBaseTheme;

var injectTapEventPlugin = require('react-tap-event-plugin');

var Header = require('./Header');
var Course = require('./Course');

injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider muiTheme={getMuiTheme(DarkBaseTheme)}>
        <div>
            <Header/>
            <Course/>
        </div>
    </MuiThemeProvider>
), document.getElementById('main'));