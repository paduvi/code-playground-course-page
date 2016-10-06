/**
 * Created by vietnam on 10/6/16.
 */
var React = require('react');

var VideoPlayer = require('./VideoPlayer');

var Lecture = React.createClass({
    getInitialState: function () {
        return {
            data: {}
        }
    },
    componentDidMount: function () {
        var data = {
            type: 'video',
            url: 'media/corgi.mp4',
            title: 'Reading File',
            duration: '7:30'
        };
        this.setState({
            data: data
        })
    },

    render: function () {
        if (!this.state.data.type) {
            return <div></div>;
        }
        switch (this.state.data.type) {
            case 'video':
                return <VideoPlayer data={this.state.data}/>
        }
    }
});

module.exports = Lecture;