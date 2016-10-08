/**
 * Created by chotoxautinh on 10/8/16.
 */
var React = require('react');

var CardText = require('material-ui').CardText;
var CardTitle = require('material-ui').CardTitle;
var Divider = require('material-ui').Divider;

var LectureQuiz = React.createClass({
    getInitialState: function () {
        return {
            started: false
        }
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
                </div>
            );
        }
    }
});

module.exports = LectureQuiz;