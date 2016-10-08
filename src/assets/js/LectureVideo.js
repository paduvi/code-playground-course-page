/**
 * Created by vietnam on 10/6/16.
 */
var React = require('react');
var CardMedia = require('material-ui').CardMedia;
var CardTitle = require('material-ui').CardTitle;

var VideoPlayer = React.createClass({
    getInitialState: function () {
        return {
            playerStatus: 'paused',
        }
    },
    componentDidMount: function () {
        var video = document.getElementById('video');
        video.addEventListener("pause", function () {
            this.setPlayerStatus('paused');
        }.bind(this));
        video.addEventListener("play", function () {
            this.setPlayerStatus('play')
        }.bind(this));
    },
    setPlayerStatus: function (status) {
        this.setState({
            playerStatus: status
        });
    },
    render: function () {
        return (
            <CardMedia
                overlay={<CardTitle className={this.state.playerStatus} title={this.props.data.title} subtitle={this.props.data.duration}/>}
                overlayContainerStyle={{top: '0', left: '0', right: '0', bottom: 'initial'}}
                overlayContentStyle={{height: 'auto', top: '0', left: '0', right: '0', bottom: 'initial', padding: '0'}}
                className="coursePlayer">
                <video id="video" controls autoPlay>
                    <source src={this.props.data.url} type="video/mp4"/>
                </video>
            </CardMedia>
        );
    }
});

module.exports = VideoPlayer;