/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
var React = require('react');
var withRouter = require('react-router').withRouter;
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
            currentId: this.props.currentId
        }
    },
    childContextTypes: {
        route: React.PropTypes.object
    },
    getChildContext() {
        return { route: this.context.route }
    },
    contextTypes: {
        route: React.PropTypes.object
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
            subtitle: '2 questions',
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
    componentDidMount: function () {
        this.loadLectureListInSection();
    },
    componentDidUpdate: function (prevProps) {
        if (this.props.currentId != prevProps.currentId) {
            this.setState({
                currentId: this.props.currentId
            })
        }
    },
    changeLesson: function (index) {
        if (this.state.current == index)
            return;
        this.props.onChangeLesson(index);
    },
    render: function () {
        var stepList = this.state.steps.map(function (step) {
            return <Step data={step} current={this.state.currentId == step.id} key={step.id}
                         onclick={this.changeLesson}/>
        }.bind(this));

        return (
            <Card style={{marginTop: 10}}>
                <CardText className="courseHeader" style={{padding: '0'}}>
                    <div className="mdl-stepper-horizontal-alternative">
                        {stepList}
                    </div>
                </CardText>
                <Lecture currentId={this.state.currentId}/>
            </Card>
        )
    }
});

var Course = React.createClass({
    changeLesson: function (index) {
        if (index == this.props.params.id)
            return;
        this.props.router.push("/" + index);
    },
    childContextTypes: {
        route: React.PropTypes.object
    },
    getChildContext() {
        return {route: this.props.route}
    },
    render: function () {
        return (
            <div style={{marginTop: 15}}>
                <Link to="/" className="breadcrumb">{backIcon} Java Basics</Link>
                <CourseDetail currentId={this.props.params.id} onChangeLesson={this.changeLesson}/>
            </div>
        )
    }
});

module.exports = withRouter(Course);