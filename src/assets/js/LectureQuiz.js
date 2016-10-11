/**
 * Created by chotoxautinh on 10/8/16.
 */
import React from 'react';
import {withRouter} from 'react-router';
import _ from 'lodash';

import {CardText, CardTitle, CardActions, Subheader, RaisedButton, FlatButton, Dialog, Divider} from 'material-ui';

class LectureQuiz extends React.Component {
    constructor(props) {
        super(props);
        let quizzes = _.shuffle(this.props.data.quiz.slice(0));
        quizzes.map(function (quiz) {
            _.shuffle(quiz.answer);
        });

        this.state = {
            status: 'prepare', // ['prepare', 'started', 'finished']
            openDialog: false,
            nextRoute: null,
            removeLeaveHook: null,
            quizzes: quizzes,
            chosenAnswers: [],
            currentQuestion: 1,
            submit: 'not' // ['not', 'loading', 'already']
        }
    }

    componentWillMount() {
        this.setState({
            removeLeaveHook: this.props.router.setRouteLeaveHook(this.context.route, this.routerWillLeave.bind(this))
        });
    }

    componentWillUnmount() {
        if (this.state.removeLeaveHook)
            this.state.removeLeaveHook();
    }

    routerWillLeave(route) {
        if (this.state.status == 'started') {
            this.handleOpenDialog(route);
            return false;
        }
    }

    handleOpenDialog(route) {
        this.setState({
            openDialog: true,
            nextRoute: route
        });
    }

    handleCancelNavigate() {
        this.setState({
            openDialog: false
        });
    }

    handleContinueNavigate() {
        this.setState({
            openDialog: false,
            status: 'prepare'
        }, function () {
            this.props.router.push(this.state.nextRoute);
        }.bind(this));
    }

    startQuiz() {
        this.setState({
            status: 'started'
        })
    }

    submitAnswer() {
        this.setState({
            submit: 'loading'
        }, function () {
            setTimeout(function () {
                this.setState({
                    submit: 'already'
                })
            }.bind(this), 1500);
        }.bind(this))
    }

    render() {
        if (this.state.status == 'prepare') {
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
                                      onTouchTap={()=>this.startQuiz()}/>
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
                label="Stay my work"
                primary={true}
                onTouchTap={()=>this.handleCancelNavigate()}
            />,
            <FlatButton
                label="Leave it!!!"
                secondary={true}
                onTouchTap={()=>this.handleContinueNavigate()}
            />,
        ];
        var nextButton;
        var nextIcon;
        switch (this.state.submit) {
            case 'not':
                nextIcon = <i className="material-icons" style={{color: 'white', marginRight: '5px'}}>done</i>;
                break;
            case 'loading':
                nextIcon =
                    <i className="material-icons rotating" style={{color: 'white', marginRight: '5px'}}>autorenew</i>;
                break;
            case 'already':
                nextIcon = <i className="material-icons" style={{color: 'white', marginRight: '5px'}}>navigate_next</i>;
                break;
        }
        if (this.state.submit == 'already') {
            nextButton = (
                <RaisedButton label="Next question" labelStyle={{paddingRight: '3px'}} style={{margin: 12}}
                              labelPosition="before" secondary={true} icon={nextIcon}/>
            )
        } else {
            nextButton = (
                <RaisedButton label="Submit" labelStyle={{paddingRight: '3px', color: 'white'}} style={{margin: 12}}
                              labelPosition="before" backgroundColor="#2c9676" icon={nextIcon}
                              onTouchTap={()=>this.submitAnswer()}/>
            )
        }
        return (
            <div>
                <Dialog
                    title="Your work hasn't submitted yet. Do you really want to leave?"
                    actions={actions}
                    modal={true}
                    open={this.state.openDialog}/>
                <CardText>
                    <Subheader>Quiz Question {this.state.currentQuestion} of {this.props.data.quiz.length}</Subheader>
                    <CardTitle title={this.state.quizzes[this.state.currentQuestion].text}/>
                    <Divider/>
                    <div style={{overflow: "auto"}}>
                        <div style={{display: 'inline-block'}}>
                            <Subheader style={{lineHeight: '60px'}}>Choose the correct answer below:</Subheader>
                        </div>
                        <div className="button-controller">
                            <RaisedButton label="Review lesson" style={{margin: 12}}/>
                            {nextButton}
                        </div>
                    </div>
                    <Divider/>
                </CardText>
            </div>
        )
    }
}

LectureQuiz.contextTypes = {
    route: React.PropTypes.object
}
export default withRouter(LectureQuiz)