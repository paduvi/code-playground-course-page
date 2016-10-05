/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');

var Link = require('react-router').Link;
var FontIcon = require('material-ui').FontIcon;

var backIcon = <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>

var Course = React.createClass({
    render: function () {
        return (
            <div style={{marginTop: 15}}>
                <Link to="/" className="breadcrumb">{backIcon} Java Basics</Link>
            </div>
        )
    }
});

module.exports = Course;