/**
 * Created by vietnam on 10/6/16.
 */
var React = require('react');
var cheerio = require('cheerio');

var LectureVideo = require('./LectureVideo');
var LectureText = require('./LectureText');

const dataList = [{
    id: 0,
    type: 'text',
    content: handleHtmlString(require('../data/environment-html')),
    title: 'Introduction to Your Tool',
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
}];

function handleHtmlString(html) {
    var $ = cheerio.load(html);

    $('*').each(function (index, element) {      // iterate over all elements
        if (element.attribs.hasOwnProperty('class'))
            delete element.attribs.class;
        if (['h1', 'h2', 'h3'].indexOf(element.name) != -1)
            element.name = 'h5';
    });
    $('pre,code').attr('class', 'prettyprint');

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
                return <LectureText data={this.state.data}/>
        }
    }
});

module.exports = Lecture;