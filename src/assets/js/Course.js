/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');

var Link = require('react-router').Link;
var FontIcon = require('material-ui').FontIcon;
var Card = require('material-ui').Card;
var CardHeader = require('material-ui').CardHeader;
var CardText = require('material-ui').CardText;

var backIcon = <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>;

var Step = React.createClass({
    render: function () {
        let className = 'mdl-stepper-step';
        if (this.props.data.active) {
            className += ' active-step';
        }
        if (this.props.data.done) {
            className += ' step-done';
        }
        if (this.props.data.current) {
            className += ' current-step';
        }
        var icon;
        switch (this.props.data.type) {
            case 'text':
                icon = <i className="material-icons">hdr_weak</i>;
                break;
            case 'quiz':
                icon = <i className="material-icons">edit</i>;
                break;
            case 'code':
                icon = <i className="material-icons">code</i>;
                break;
        }
        if (this.props.data.done) {
            icon = <i className="material-icons">done</i>;
        }
        return (
            <div className={className}>
                <div className="mdl-stepper-circle">{icon}</div>
                <span className="tooltiptext">
                    <div className="mdl-stepper-title">{this.props.data.title}</div>
                    <div className="mdl-stepper-optional">{this.props.data.subtitle}</div>
                </span>
                <div className="mdl-stepper-bar-left"></div>
                <div className="mdl-stepper-bar-right"></div>
            </div>
        )
    }
})

var CourseDetail = React.createClass({
    getInitialState: function () {
        var steps = [
            {
                active: true,
                done: true,
                title: 'Introduction to Your Tool',
                type: 'text'
            },
            {
                active: true,
                done: true,
                title: 'Review: Introduction to Your Tool',
                subtitle: '4 questions',
                type: 'quiz'
            },
            {
                active: true,
                done: true,
                title: 'Strings and variables',
                type: 'text'
            },
            {
                active: true,
                done: false,
                title: 'Receiving input',
                subtitle: 'Optional',
                type: 'text'
            },
            {
                active: true,
                current: true,
                title: 'Review: Strings, variables and formatting',
                subtitle: '3 questions',
                type: 'quiz'
            },
            {
                title: 'IO',
                type: 'text'
            },
            {
                title: 'Review: Reading File',
                type: 'code'
            },
            {
                title: 'Review: Writing to File',
                type: 'text'
            }
        ]
        return {
            steps: steps
        }
    },
    render: function () {
        var stepList = this.state.steps.map(function (step, index) {
            return <Step data={step} key={index}/>
        });
        return (
            <Card style={{marginTop: 10}}>
                <CardText className="courseHeader" style={{padding: '0'}}>
                    <div className="mdl-stepper-horizontal-alternative">
                        {stepList}
                    </div>
                </CardText>
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