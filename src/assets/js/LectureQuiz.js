/**
 * Created by chotoxautinh on 10/8/16.
 */
import React from 'react';
import {withRouter} from 'react-router';
import * as _ from 'lodash';

import {
    CardText,
    CardTitle,
    CardActions,
    Subheader,
    RaisedButton,
    FlatButton,
    Dialog,
    Divider,
    Avatar
} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import {pink200, pinkA200, redA700, transparent} from 'material-ui/styles/colors';

class LectureQuiz extends React.Component {
    constructor(props) {
        super(props);
        let quizzes = _.shuffle(this.props.data.quiz.slice(0)).map(function (quiz) {
            quiz.answer = _.shuffle(quiz.answer);
            return quiz;
        });

        this.state = {
            status: 'prepare', // ['prepare', 'started', 'finished']
            openDialog: false,
            nextRoute: null,
            removeLeaveHook: null,
            quizzes: quizzes,
            rightQuestion: 0,
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

            let result = true;
            for (let answer of this.state.chosenAnswers) {
                if (!answer.isCorrect) {
                    result = false;
                    break;
                }
            }

            setTimeout(function () {
                this.setState({
                    submit: 'already',
                    rightQuestion: result ? this.rightQuestion + 1 : this.rightQuestion
                })
            }.bind(this), 1500);
        }.bind(this))
    }

    toggleAnswer(answer) {
        var index = this.state.chosenAnswers.indexOf(answer);

        if (~index) {
            this.setState({
                chosenAnswers: this.state.chosenAnswers.filter((_, i) => i !== index)
            });
        } else {
            this.setState({
                chosenAnswers: this.state.chosenAnswers.concat([answer])
            });
        }
    }

    nextQuestion() {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            chosenAnswers: [],
            submit: 'not'
        });
    }

    concludeResult() {

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
            if (this.state.currentQuestion == this.state.quizzes.length) {
                nextButton = (
                    <RaisedButton label="Done" labelStyle={{paddingRight: '3px'}} style={{margin: 12}}
                                  labelPosition="before" secondary={true} icon={nextIcon}
                                  onTouchTap={()=>this.concludeResult()}/>
                )
            } else {
                nextButton = (
                    <RaisedButton label="Next question" labelStyle={{paddingRight: '3px'}} style={{margin: 12}}
                                  labelPosition="before" secondary={true} icon={nextIcon}
                                  onTouchTap={()=>this.nextQuestion()}/>
                )
            }

        } else {
            nextButton = (
                <RaisedButton label="Submit" labelStyle={{paddingRight: '3px', color: 'white'}} style={{margin: 12}}
                              labelPosition="before" backgroundColor="#2c9676" icon={nextIcon}
                              onTouchTap={()=>this.submitAnswer()}/>
            )
        }
        var answers = this.state.quizzes[this.state.currentQuestion - 1].answer.map(function (answer, index) {
            let style = {left: 8};
            let color = pink200;
            let disabled = this.state.submit == 'already';
            let className = this.state.submit == 'already' ? 'disabledList' : '';
            if (~this.state.chosenAnswers.indexOf(answer)) {
                if (this.state.submit == 'already') {
                    if (answer.isCorrect) {
                        color = "#2c9676";
                        Object.assign(style, {borderRadius: '5px', border: '2px solid #2c9676'});
                    } else {
                        color = redA700;
                        Object.assign(style, {borderRadius: '5px', border: '2px solid ' + redA700});
                    }
                } else {
                    color = pinkA200;
                    Object.assign(style, {borderRadius: '5px', border: '2px solid ' + pinkA200});
                }
            }
            let avatar = <Avatar color={color} backgroundColor={transparent}
                                 style={style}>{String.fromCharCode(65 + index)}</Avatar>
            return <ListItem className={className} primaryText={answer.text} leftAvatar={avatar} disabled={disabled}
                             onTouchTap={()=>this.toggleAnswer(answer)}/>
        }.bind(this));
        return (
            <div>
                <Dialog
                    title="Your work hasn't submitted yet. Do you really want to leave?"
                    actions={actions}
                    modal={true}
                    open={this.state.openDialog}/>
                <CardText>
                    <Subheader>Quiz Question {this.state.currentQuestion} of {this.props.data.quiz.length}</Subheader>
                    <CardTitle title={this.state.quizzes[this.state.currentQuestion - 1].text}/>
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
                    <List>
                        {answers}
                    </List>
                </CardText>
            </div>
        )
    }
}

LectureQuiz.contextTypes = {
    route: React.PropTypes.object
}
export default withRouter(LectureQuiz)