/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');

var AppBar = require('material-ui').AppBar;
var FontIcon = require('material-ui').FontIcon;

var icon = <FontIcon className="material-icons">code</FontIcon>;

var Header = React.createClass({
    render: function () {
        return (
            <AppBar title="Code Playground" iconElementLeft={icon} className="navBar"/>
        )
    }
});

module.exports = Header;