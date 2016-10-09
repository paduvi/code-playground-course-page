/**
 * Created by vietnam on 10/6/16.
 */
var React = require('react');
var cheerio = require('cheerio');
var withRouter = require('react-router').withRouter;

var LectureVideo = require('./LectureVideo');
var LectureText = require('./LectureText');
var LectureQuiz = require('./LectureQuiz');

const dataList = [{
    id: 0,
    type: 'text',
    content: handleHtmlString(require('../data/environment-html')),
    title: 'Introduction to Your Tool',
}, {
    id: 1,
    type: 'quiz',
    title: 'Review: Introduction to Your Tool',
    left: 2,
    quiz: [{
        id: 2209,
        type: 'single-choice',
        text: 'Which one of the following statements is true?',
        answer: [{
            id: 1,
            text: 'Java is used only in web and mobile applications',
            isCorrect: false
        }, {
            id: 2,
            text: 'Java has a huge developer community',
            isCorrect: true
        }, {
            id: 3,
            text: `Java is used only in NASA's space related applications`,
            isCorrect: false
        }]
    }, {
        id: 2702,
        type: 'single-choice',
        text: 'To distribute your application to different platforms, how many Java versions do you need to create?',
        answer: [{
            id: 4,
            text: 'Just one version',
            isCorrect: true
        }, {
            id: 5,
            text: 'Two versions',
            isCorrect: false
        }, {
            id: 6,
            text: 'One for each platform',
            isCorrect: false
        }]
    }]
}, {
    id: 2,
    type: 'text',
    title: 'String and Variables',
    content: handleHtmlString(require('../data/variables-html'))
}, {
    id: 3,
    type: 'video',
    url: 'media/corgi.mp4',
    title: 'Receiving input',
    duration: '7:30'
}, {
    id: 4,
    type: 'quiz',
    title: 'Review: Strings, variables and formatting',
    left: 0,
    notBeforeTime: Date.now() + 5 * 3600 * 1000,
    quiz: [{
        id: 3695,
        type: 'single-choice',
        text: 'What of the following is the default value of an instance variable?',
        answer: [{
            id: 7,
            text: 'null',
            isCorrect: false
        }, {
            id: 8,
            text: '0',
            isCorrect: false
        }, {
            id: 9,
            text: `Depends upon the type of variable`,
            isCorrect: true
        }, {
            id: 10,
            text: 'Not assigned',
            isCorrect: false
        }]
    }, {
        id: 1210,
        type: 'single-choice',
        text: 'Can be constructor be made final?',
        answer: [{
            id: 11,
            text: 'False',
            isCorrect: true
        }, {
            id: 12,
            text: 'True',
            isCorrect: false
        }]
    }, {
        id: 409,
        type: 'single-choice',
        text: 'Which of the following stands true about default modifier of class members?',
        answer: [{
            id: 13,
            text: 'By default, variables, methods and constructors can be accessed by subclass only.',
            isCorrect: false
        }, {
            id: 14,
            text: 'By default, variables, methods and constructors can be accessed by any class lying in any package.',
            isCorrect: false
        }, {
            id: 15,
            text: 'By default, variables, methods and constructors can be accessed by any class lying in the same package.',
            isCorrect: true
        }, {
            id: 16,
            text: 'None of the above.',
            isCorrect: false
        }]
    }, {
        id: 272,
        type: 'single-choice',
        text: 'What kind of variables a class can consist of?',
        answer: [{
            id: 17,
            text: 'class variables, instance variables',
            isCorrect: false
        }, {
            id: 18,
            text: 'class variables, local variables, instance variables',
            isCorrect: true
        }, {
            id: 19,
            text: 'class variables',
            isCorrect: false
        }, {
            id: 20,
            text: 'class variables, local variables',
            isCorrect: false
        }]
    }]
}];

function handleHtmlString(html) {
    var $ = cheerio.load(html);

    $('*').each(function (index, element) {      // iterate over all elements
        if (element.attribs.hasOwnProperty('class'))
            delete element.attribs.class;
        if (['h1', 'h2', 'h3'].indexOf(element.name) != -1)
            element.name = 'h5';
    });

    return $.html();
}

var Lecture = React.createClass({
    getInitialState: function () {
        return {
            data: {}
        }
    },
    componentDidMount: function () {
        this.loadData();
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
    getChildContext() {
        return { route: this.context.route }
    },
    componentDidUpdate: function (prevProps) {
        var oldId = prevProps.currentId;
        var newId = this.props.currentId;
        if (oldId === newId) {
            return;
        }
        this.loadData();
    },
    loadData: function () {
        let filter = dataList.filter(function (o) {
            return o.id == this.props.currentId;
        }.bind(this));

        if (filter.length) {
            this.setState({
                data: filter[0]
            });
        }
    },
    render: function () {
        if (!this.state.data.type) {
            return <div></div>;
        }
        switch (this.state.data.type) {
            case 'video':
                return <LectureVideo data={this.state.data}/>;
            case 'text':
                return <LectureText data={this.state.data}/>;
            case 'quiz':
                return <LectureQuiz data={this.state.data}/>;
        }
    }
});

module.exports = withRouter(Lecture);