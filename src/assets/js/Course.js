/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');

var Link = require('react-router').Link;
var FontIcon = require('material-ui').FontIcon;
var Card = require('material-ui').Card;
var CardHeader = require('material-ui').CardHeader;

var backIcon = <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>;

var CourseDetail = React.createClass({
    getInitialState: function () {
        return {
            activeStep: 1
        }
    },
    render: function () {
        var stepList = (
            <div className="mdl-stepper-horizontal-alternative">
                <div className="mdl-stepper-step active-step step-done">
                    <div className="mdl-stepper-circle"><i className="material-icons">done</i></div>
                    <div className="mdl-stepper-title">Strings and variables</div>
                    <div className="mdl-stepper-bar-left"></div>
                    <div className="mdl-stepper-bar-right"></div>
                </div>
                <div className="mdl-stepper-step active-step">
                    <div className="mdl-stepper-circle"><i className="material-icons">hdr_weak</i></div>
                    <div className="mdl-stepper-title">Receiving input</div>
                    <div className="mdl-stepper-optional">Optional</div>
                    <div className="mdl-stepper-bar-left"></div>
                    <div className="mdl-stepper-bar-right"></div>
                </div>
                <div className="mdl-stepper-step current-step active-step">
                    <div className="mdl-stepper-circle"><i className="material-icons">edit</i></div>
                    <div className="mdl-stepper-title">Quiz: Strings, variables and formatting</div>
                    <div className="mdl-stepper-optional"></div>
                    <div className="mdl-stepper-bar-left"></div>
                    <div className="mdl-stepper-bar-right"></div>
                </div>
                <div className="mdl-stepper-step">
                    <div className="mdl-stepper-circle"><i className="material-icons">hdr_weak</i></div>
                    <div className="mdl-stepper-title">IO</div>
                    <div className="mdl-stepper-optional"></div>
                    <div className="mdl-stepper-bar-left"></div>
                    <div className="mdl-stepper-bar-right"></div>
                </div>
            </div>
        );
        return (
            <Card style={{marginTop: 10}}>
                <CardHeader children={stepList} className="courseHeader"/>
            </Card>
        )
    }
});

var Course = React.createClass({
    render: function () {
        return (
            <div style={{marginTop: 15}}>
                <Link to="/" className="breadcrumb">{backIcon} Java Basics</Link>
                <CourseDetail/>
            </div>
        )
    }
});

module.exports = Course;