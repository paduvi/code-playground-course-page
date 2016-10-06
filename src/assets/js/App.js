/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var MuiThemeProvider = require('material-ui').MuiThemeProvider;

var injectTapEventPlugin = require('react-tap-event-plugin');

var Header = require('./Header');
var Course = require('./Course');

injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider>
        <div>
            <Header/>
            <Course/>
        </div>
    </MuiThemeProvider>
), document.getElementById('main'));