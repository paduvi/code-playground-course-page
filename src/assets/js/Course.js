/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');

var Link = require('react-router').Link;
var FontIcon = require('material-ui').FontIcon;
var Card = require('material-ui').Card;
var CardText = require('material-ui').CardText;

var backIcon = <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>;
var Step = require('./Step');
var Lecture = require('./Lecture');

var CourseDetail = React.createClass({
    getInitialState: function () {
        return {
            steps: [],
            current: null
        }
    },
    loadLectureListInSection: function () {
        // request server API
        var steps = [{
            id: 0,
            active: true,
            done: true,
            title: 'Introduction to Your Tool',
            type: 'text'
        }, {
            id: 1,
            active: true,
            done: true,
            title: 'Review: Introduction to Your Tool',
            subtitle: '4 questions',
            type: 'quiz'
        }, {
            id: 2,
            active: true,
            done: true,
            title: 'Strings and variables',
            type: 'text'
        }, {
            id: 3,
            active: true,
            done: false,
            title: 'Receiving input',
            subtitle: '7:30',
            type: 'video'
        }, {
            id: 4,
            active: true,
            title: 'Review: Strings, variables and formatting',
            subtitle: '3 questions',
            type: 'quiz'
        }, {
            id: 5,
            title: 'IO',
            type: 'text'
        }, {
            id: 6,
            title: 'Reading File',
            subtitle: '7:30',
            type: 'video'
        }, {
            id: 7,
            title: 'Review: Reading File',
            type: 'text'
        }];
        this.setState({
            steps: steps
        });
    },
    loadCurrentLecture: function () {
        this.setState({
            current: 0
        });
    },
    componentDidMount: function () {
        this.loadLectureListInSection();
        this.loadCurrentLecture();
    },
    changeLesson: function (index) {
        if (this.state.current == index)
            return;
        this.setState({
            current: index
        })
    },
    render: function () {
        var stepList = this.state.steps.map(function (step) {
            return <Step data={step} current={this.state.current == step.id} key={step.id} onclick={this.changeLesson}/>
        }.bind(this));

        return (
            <Card style={{marginTop: 10}}>
                <CardText className="courseHeader" style={{padding: '0'}}>
                    <div className="mdl-stepper-horizontal-alternative">
                        {stepList}
                    </div>
                </CardText>
                <Lecture currentId={this.state.current}/>
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