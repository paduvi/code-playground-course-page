/**
 * Created by chotoxautinh on 10/8/16.
 */
var React = require('react');
var withRouter = require('react-router').withRouter;

var CardText = require('material-ui').CardText;
var CardTitle = require('material-ui').CardTitle;
var CardActions = require('material-ui').CardActions;
var RaisedButton = require('material-ui').RaisedButton;
var FlatButton = require('material-ui').FlatButton;
var Dialog = require('material-ui').Dialog;
var Divider = require('material-ui').Divider;

var LectureQuiz = React.createClass({
    getInitialState: function () {
        return {
            started: false,
            openDialog: false,
            nextRoute: null
        }
    },
    contextTypes: {
        route: React.PropTypes.object
    },
    componentDidMount: function () {
        this.props.router.setRouteLeaveHook(this.context.route, this.routerWillLeave);
    },
    componentWillUnmount: function () {
      console.log("Unmount");
    },
    routerWillLeave: function (route) {
        console.log("vao day");
        if (this.state.started) {
            this.handleOpenDialog(route);
            return false;
        }
    },
    handleOpenDialog: function (route) {
        this.setState({
            openDialog: true,
            nextRoute: route
        });
    },
    handleCloseDialog: function () {
        this.setState({
            openDialog: false,
            started: false
        }, function () {
            this.props.router.setRouteLeaveHook(null);
            this.props.router.push(this.state.nextRoute);
        }.bind(this));
    },
    startQuiz: function () {
        this.setState({
            started: true
        })
    },
    render: function () {
        if (!this.state.started) {
            var message;
            if (this.props.data.left) {
                message = (
                    <CardTitle subtitle={`Remaining Turn: ${this.props.data.left}`}/>
                );
            } else {
                message = (
                    <CardTitle subtitleStyle={{color: 'red'}}
                               subtitle={`Currently out of turn! Please review the lesson and comeback after ${new Date(this.props.data.notBeforeTime)}`}/>
                )
            }
            if (this.props.data.left) {
                var button = (
                    <CardActions style={{textAlign: 'center'}}>
                        <RaisedButton label="I'm ready! Let's go!" primary={true} style={{margin: 12}}
                                      onTouchTap={this.startQuiz}/>
                    </CardActions>
                );
            }
            return (
                <div>
                    <CardTitle title={this.props.data.title} titleStyle={{textAlign: 'center'}}/>
                    <CardText>
                        <CardTitle
                            subtitle={`The test contains ${this.props.data.quiz.length} questions and there is no time limit.`}/>
                        <Divider/>
                        <CardTitle title="Count Your Score"
                                   subtitle={`You will get 1 point for each correct answer. At the end of the Quiz, your total score
                                will be displayed. Maximum score is ${this.props.data.quiz.length} points.`}/>
                        <Divider/>
                        <CardTitle title="Pass Requirement"
                                   subtitle={`Try your best to get the points ≥ 60% maximum score.`}/>
                        {message}
                    </CardText>
                    {button}
                </div>
            );
        }
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseDialog}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleCloseDialog}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.openDialog}
                >
                </Dialog>
            </div>
        )
    }
});

module.exports = withRouter(LectureQuiz);