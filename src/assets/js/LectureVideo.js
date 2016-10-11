/**
 * Created by vietnam on 10/6/16.
 */
import React from 'react';
import {CardMedia, CardTitle} from 'material-ui';

require('../css/LectureVideo.css');

class LectureVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerStatus: 'paused',
        }
    }

    componentDidMount() {
        var video = document.getElementById('video');
        video.addEventListener("pause", function () {
            this.setPlayerStatus('paused');
        }.bind(this));
        video.addEventListener("play", function () {
            this.setPlayerStatus('play')
        }.bind(this));
    }

    setPlayerStatus(status) {
        this.setState({
            playerStatus: status
        });
    }

    render() {
        return (
            <CardMedia
                overlay={<CardTitle className={this.state.playerStatus} title={this.props.data.title}
                                    subtitle={this.props.data.duration}/>}
                overlayContainerStyle={{top: '0', left: '0', right: '0', bottom: 'initial'}}
                overlayContentStyle={{height: 'auto', top: '0', left: '0', right: '0', bottom: 'initial', padding: '0'}}
                className="coursePlayer">
                <video id="video" controls autoPlay>
                    <source src={this.props.data.url} type="video/mp4"/>
                </video>
            </CardMedia>
        );
    }
}

export default LectureVideo