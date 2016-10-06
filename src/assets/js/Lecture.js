/**
 * Created by vietnam on 10/6/16.
 */
var React = require('react');
var cheerio = require('cheerio');

var LectureVideo = require('./LectureVideo');
var LectureText = require('./LectureText');

var Lecture = React.createClass({
    getInitialState: function () {
        return {
            data: {}
        }
    },
    componentDidMount: function () {
        /*
         Example for video data
         */
        // var data = {
        //     type: 'video',
        //     url: 'media/corgi.mp4',
        //     title: 'Reading File',
        //     duration: '7:30'
        // };

        /*
         Example for text data
         */
        let content = require('../test/html-string');

        let data = {
            type: 'text',
            title: 'String and Variables',
            content: this.handleHtmlString(content)
        };

        this.setState({
            data: data
        });

    },
    handleHtmlString: function (html) {
        var $ = cheerio.load(html);

        $('*').each(function (index, element) {      // iterate over all elements
            if (element.attribs.hasOwnProperty('class'))
                delete element.attribs.class;
            if (['h1', 'h2', 'h3'].indexOf(element.name) != -1)
                element.name = 'h5';
        });
        $('pre,code').attr('class', 'prettyprint');

        return $.html();
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