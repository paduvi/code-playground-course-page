/**
 * Created by Cho To Xau Tinh on 05-Oct-16.
 */
import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router';
import {FontIcon, Card, CardText} from 'material-ui';

import Step from './Step';
import Lecture from './Lecture';
const backIcon = <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>;

class CourseDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
            currentId: this.props.currentId
        }
    }

    getChildContext() {
        return {route: this.context.route}
    }

    loadLectureListInSection() {
        console.log("vao day");
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
    }

    componentDidMount() {
        this.loadLectureListInSection();
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentId != prevProps.currentId) {
            this.setState({
                currentId: this.props.currentId
            })
        }
    }

    changeLesson(index) {
        if (this.state.currentId == index)
            return;
        this.props.onChangeLesson(index);
    }

    render() {
        var stepList = this.state.steps.map(function (step) {
            return <Step data={step} current={this.state.currentId == step.id} key={step.id}
                         onclick={id=> this.changeLesson(id)}/>
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
}

CourseDetail.childContextTypes = {
    route: React.PropTypes.object
}
CourseDetail.contextTypes = {
    route: React.PropTypes.object
}

class Course extends React.Component {
    changeLesson(index) {
        if (index == this.props.params.id)
            return;
        this.props.router.push("/" + index);
    }

    getChildContext() {
        return {route: this.props.route}
    }

    render() {
        return (
            <div style={{marginTop: 15}}>
                <Link to="/" className="breadcrumb">{backIcon} Java Basics</Link>
                <CourseDetail currentId={this.props.params.id} onChangeLesson={id=>this.changeLesson(id)}/>
            </div>
        )
    }
}

Course.childContextTypes = {
    route: React.PropTypes.object
}

export default withRouter(Course);